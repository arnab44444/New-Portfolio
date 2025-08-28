import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
// import Plants from "../components/Plants";
// import Library from "../components/Library";
// import Kitchen from "../components/Kitchen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        //path: '',
        index: true,

        element: <Home></Home>,
      },
    ],
  },
//   {
//     path: "/project-details/plant",
//     element: <Plants></Plants>,
//   },
//   {
//     path: "/project-details/library",
//     element: <Library></Library>,
//   },
//   {
//     path: "/project-details/kitchen",
//     element: <Kitchen></Kitchen>,
//   },
]);

export default router;
