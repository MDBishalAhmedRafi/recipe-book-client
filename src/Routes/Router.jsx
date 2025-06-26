import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllRecipies from "../Pages/AllRecipies";
import AddRecipies from "../Pages/AddRecipies";
import MyRecipies from "../Pages/MyRecipies";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPass from "../Pages/ForgetPass";
import Loading from "../Pages/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import RecipeDetails from "../Pages/RecipeDetails";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Support from "../Pages/Support";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Stats from "../Pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () =>
          fetch("https://recipe-book-app-server-sepia.vercel.app/recipies"),

        element: <Home></Home>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/all-recipies",
        loader: () =>
          fetch(
            "https://recipe-book-app-server-sepia.vercel.app/more-recipies"
          ),
        element: <AllRecipies></AllRecipies>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forget-password",
        element: <ForgetPass></ForgetPass>,
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
        index: true,
        element: (
          <PrivateRoute>
            <Stats></Stats>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-recipies",
        element: (
          <PrivateRoute>
            <AddRecipies></AddRecipies>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-recipies/:email",
        loader: ({ params }) =>
          fetch(
            `https://recipe-book-app-server-sepia.vercel.app/my-recipies/${params?.email}`
          ),
        element: (
          <PrivateRoute>
            <MyRecipies></MyRecipies>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-recipies",
        loader: () =>
          fetch(
            "https://recipe-book-app-server-sepia.vercel.app/more-recipies"
          ),
        element: <AllRecipies></AllRecipies>,
      },
      {
        path: "/dashboard/recipe-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipe-book-app-server-sepia.vercel.app/more-recipies/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
