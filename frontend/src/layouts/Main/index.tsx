import { Stack, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Loading from "../../components/FullCourse/CreateFullCourse/Loading";
import Notice from "../../components/FullCourse/CreateFullCourse/Notice";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = () => {
  // const APP_BAR_MOBILE = 64;
  // const APP_BAR_DESKTOP = 92;

  const RootStyle = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
  });

  const MainStyle = styled("div")({
    flexGrow: 1,
    overflow: "hidden",
    marginTop: 80,
  });

  return (
    <RootStyle>
      <Notice></Notice>
      <Loading></Loading>
      <Stack sx={{ width: "100%" }}>
        <Navbar />
        <MainStyle>
          <Outlet />
        </MainStyle>
        <Footer />
      </Stack>
    </RootStyle>
  );
};

export default MainLayout;
