import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/Meals";
import DashBoardLayout from "../layouts/DashBoardLayout/DashBoardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../Pages/Dashboard/Profile/Profile";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
import MyReview from "../Pages/Dashboard/User/MyReview";
import FavoriteMeals from "../Pages/Dashboard/User/FavoriteMeals";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import ManageRequest from "../Pages/Dashboard/Admin/ManageRequest";
import PlatformStatistics from "../Pages/Dashboard/Admin/PlatformStatistics";
import CreateMeal from "../Pages/Dashboard/Chef/CreateMeal";
import MyMeals from "../Pages/Dashboard/Chef/MyMeals";
import DetailPage from "../Pages/DetailPage/DetailPage";
import Order from "../Pages/Order/Order";
import OrderRequest from "../Pages/Dashboard/Chef/OrderRequest";
import SuccessPayment from "../Pages/Dashboard/Payment/successPayment";

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
      {
        path: "singleMeal/:id",
        element: (
          <PrivateRoute>
            <DetailPage></DetailPage>,
          </PrivateRoute>
        ),
      },
      { path: "login", element: <LogIn /> },
      { path: "signup", element: <SignUp /> },
      {
        path:"orders/:id",
        element:<PrivateRoute>
          <Order></Order>
        </PrivateRoute>
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index:true,
        element:<Profile></Profile>
      },
      {
        path:"success",
        element:<SuccessPayment></SuccessPayment>
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "myReviews",
        element: <MyReview></MyReview>,
      },
      {
        path: "favorite",
        element: <FavoriteMeals></FavoriteMeals>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manageRequest",
        element: <ManageRequest></ManageRequest>,
      },
      {
        path: "statistics",
        element: <PlatformStatistics></PlatformStatistics>,
      },
      {
        path: "createMeals",
        element: <CreateMeal></CreateMeal>,
      },
      {
        path:"orders",
        element:<OrderRequest></OrderRequest>
      },
      {
        path: "myMeals",
        element: <MyMeals></MyMeals>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
