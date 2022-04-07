package com.busanfullcourse.bfc.common.jwt;

import com.busanfullcourse.bfc.api.service.CustomUserDetailService;
import com.busanfullcourse.bfc.common.util.ExceptionUtil;
import com.busanfullcourse.bfc.common.util.JwtTokenUtil;
import com.busanfullcourse.bfc.db.repository.LogoutAccessTokenRedisRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenUtil jwtTokenUtil;
    private final CustomUserDetailService customUserDetailService;
    private final LogoutAccessTokenRedisRepository logoutAccessTokenRedisRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String accessToken = getToken(request, "Authorization");
        String requestURI = request.getRequestURI();
        if (accessToken != null && !requestURI.equals("/api/v1/auth/reissue")) {
            // 로그아웃에 사용된 토큰인지 확인
            checkLogout(accessToken);

            // 토큰에서 사용자 정보(이름)을 가져옴
            String username = jwtTokenUtil.getUsername(accessToken);
            if (username != null) {
                UserDetails userDetails = customUserDetailService.loadUserByUsername(username);
                // 토큰이 가지고 있는 정보에 기록된 사용자가 인증받은 사용자인지 확인
                equalsUsernameFromTokenAndUserDetails(userDetails.getUsername(), username);
                // 유효한 토큰인지 확인
                validateAccessToken(accessToken, userDetails);
                // SecurityContext에 Authentication 객체를 저장
                processSecurity(request, userDetails);
            }
        }

        if (requestURI.equals("/api/v1/auth/reissue")) {
            String refreshToken = getToken(request,"RefreshToken");

            String username = jwtTokenUtil.getUsername(refreshToken);
            if (username != null) {
                UserDetails userDetails = customUserDetailService.loadUserByUsername(username);
                // 토큰이 가지고 있는 정보에 기록된 사용자가 인증받은 사용자인지 확인
                equalsUsernameFromTokenAndUserDetails(userDetails.getUsername(), username);
                // 유효한 토큰인지 확인
                validateAccessToken(refreshToken, userDetails);
                // SecurityContext에 Authentication 객체를 저장
                processSecurity(request, userDetails);
            }
        }
        filterChain.doFilter(request, response);
    }

    private String getToken(HttpServletRequest request, String header) {
        String headerAuth = request.getHeader(header);
        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7);
        }
        return null;
    }

    private void checkLogout(String accessToken) {
        if (logoutAccessTokenRedisRepository.existsById(accessToken)) {
            throw new IllegalArgumentException("이미 로그아웃된 회원입니다.");
        }
    }

    private void equalsUsernameFromTokenAndUserDetails(String userDetailsUsername, String tokenUsername) {
        if (!userDetailsUsername.equals(tokenUsername)) {
            throw new IllegalArgumentException("username이 토큰과 맞지 않습니다.");
        }
    }

    private void validateAccessToken(String accessToken, UserDetails userDetails) {
        if (Boolean.FALSE.equals(jwtTokenUtil.validateToken(accessToken, userDetails))) {
            throw new IllegalArgumentException(ExceptionUtil.INVALID_AUTH_TOKEN);
        }
    }

    // SecurityContext에 Authentication 객체를 저장
    private void processSecurity(HttpServletRequest request, UserDetails userDetails) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
        usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
    }
}
