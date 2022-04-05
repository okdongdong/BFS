import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Login from "./pages/Accounts/Login";
import Signup from "./pages/Accounts/Signup";
import FindPassword from "./pages/Accounts/FindPassword";
import Profile from "./pages/Profile/Profile";
import Main from "./pages/Main/Main";
import ChangeUser from "./pages/Profile/ChangeUser";
import Detail from "./pages/Main/Detail";
import CreateFullCourse from "./pages/FullCourse/CreateFullCourse";
import Test from "./pages/Test";
import CreateFullCourseLayout from "./layouts/CreateFullCourse";
import FullCourseDetail from "./components/FullCourse/FullCourseDetail/FullCourseDetail";
function Router() {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "", element: <Main /> },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "fullcourse/:fullCourseId",
          element: <Signup />,
        },
        {
          path: "attraction",
          children: [
            { path: "", element: <Login /> },
            {
              path: ":placeId",
              element: <Signup />,
            },
          ],
        },
        {
          path: "restaurant",
          children: [
            { path: "", element: <Login /> },
            {
              path: ":placeId",
              element: <Signup />,
            },
          ],
        },
        {
          path: "info",
          element: <Signup />,
        },
        {
          path: "findPw",
          element: <FindPassword />,
        },
        {
          path: "profile/:nickname",
          element: <Profile />,
        },
        {
          path: "changeUser",
          element: <ChangeUser />,
        },
        {
          path: "detail",
          element: <Detail />,
        },
        {
          path: "fullcourseDetail",
          element: <FullCourseDetail />,
        },
      ],
    },
    {
      path: "test",
      element: <Test />,
    },
    {
      path: "createFullCourse",
      element: <CreateFullCourseLayout />,
      children: [{ path: "", element: <CreateFullCourse /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default Router;
