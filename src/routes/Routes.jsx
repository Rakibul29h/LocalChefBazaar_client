import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/Meals";
import DashBoardLayout from "../layouts/DashBoardLayout/DashBoardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "meals",
        element: <Meals></Meals>,
      },
      { path: "login", element: <LogIn /> },
  { path: "signup", element: <SignUp /> }
    ],
  },
  {
    path: "dashboard",
    element:
    <PrivateRoute>
       <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
   
  },
  
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
