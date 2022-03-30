import { Box, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

import bfcLogo from "../../assets/img/logo_no_text.png";
const useStyles = makeStyles(() => ({
  bfcLogo: {
    height: "64px", // Fix IE 11 issue.
  },
  logoContainer: {
    alignItems: "center",
    textDecoration: "none",
    color: "#0787EC",
    display: "flex",
    flexDirection: "row",
  },
  logoTextContainer: {
    textAlign: "left",
    flexDirection: "column",
  },
}));

function Logo() {
  const APPBAR_MOBILE = 64;
  const APPBAR_DESKTOP = 92;

  const classes = useStyles();
  const TextStyle = styled("h3")(() => ({
    fontSize: "22px",
    paddingLeft: 8,
    paddingRight: 24,
    margin: "0px",
    fontFamily: "Sunflower, sans-serif",
    lineHeight: 1,
  }));

  const LogoStyle = styled(Box)(({ theme }) => ({
    maxHeight: APPBAR_MOBILE,
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      minHeight: APPBAR_DESKTOP,
    },
  }));

  return (
    <LogoStyle>
      <RouterLink to="/" className={classes.logoContainer}>
        <img className={classes.bfcLogo} src={bfcLogo} alt="Logo" />
        <div className={classes.logoTextContainer}>
          <TextStyle>Busan</TextStyle>
          <TextStyle>Full</TextStyle>
          <TextStyle>Course</TextStyle>
        </div>
      </RouterLink>
    </LogoStyle>
  );
}

export default Logo;
