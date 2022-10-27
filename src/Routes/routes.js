import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import NotFound from "../others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import FrequentQues from "../Pages/FrequentQues/FrequentQues";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CoursesLayout from "../layout/CoursesLayout";
import Banner from "../Pages/Home/Banner/Banner";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/home",
        element: <Banner></Banner>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/courses/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/frequent_ques",
        element: <FrequentQues></FrequentQues>,
      },
    ],
  },
  {
    path: "/courses",
    element: <CoursesLayout></CoursesLayout>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/category/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
