import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import FrequentQues from "../Pages/FrequentQues/FrequentQues";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/frequent_ques',
        element: <FrequentQues></FrequentQues>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      }
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);