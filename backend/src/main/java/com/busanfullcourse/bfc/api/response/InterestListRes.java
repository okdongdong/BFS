package com.busanfullcourse.bfc.api.response;

import com.busanfullcourse.bfc.db.entity.Interest;
import lombok.*;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterestListRes {

    private Long placeId;

    private String name;

    private Float averageScore;

    private Float lng;

    private Float lat;

    private String thumbnail;

    public static List<InterestListRes> of (List<Interest> list) {
        return list.stream().map(interest -> InterestListRes.builder()
                .placeId(interest.getPlace().getPlaceId())
                .name(interest.getPlace().getName())
                .lng(interest.getPlace().getLng())
                .lat(interest.getPlace().getLat())
                .averageScore(interest.getPlace().getAverageScore())
                .thumbnail(interest.getPlace().getThumbnail())
                .build()
        ).collect(Collectors.toList());
    }
}
