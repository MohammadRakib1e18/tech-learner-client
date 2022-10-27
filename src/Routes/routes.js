import { createBrowserRouter } from "react-router-dom";
import BlogLayout from "../layout/BlogLayout";
import HomeLayout from "../layout/HomeLayout";
import NotFound from "../others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import FrequentQues from "../Pages/FrequentQues/FrequentQues";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/home',
    element: <HomeLayout></HomeLayout>
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
