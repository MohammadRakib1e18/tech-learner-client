import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import NotFound from "../others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import FrequentQues from "../Pages/FrequentQues/FrequentQues";
import CoursesLayout from "../layout/CoursesLayout";
import Banner from "../Pages/Home/Banner/Banner";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import PremiumAccess from "../Pages/PremiumAccess/PremiumAccess";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/courses/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/courses/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
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
      {
        path: "/courses/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/course/${params.id}`),
      },
      {
        path: "/courses/premium",
        element: (
          <PrivateRoute>
            <PremiumAccess></PremiumAccess>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
