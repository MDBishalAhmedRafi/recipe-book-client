import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
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

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [ 
                { 
                                index: true,
                                path: '/',
                                loader: () => fetch('http://localhost:3000/recipies'),
                                element: <Home></Home>,
                                hydrateFallbackElement: <Loading></Loading>
                },
                { 
                                path: '/all-recipies',
                                loader: () => fetch('http://localhost:3000/recipies'),
                                element: <AllRecipies></AllRecipies>,
                },
                { 
                                path: '/add-recipies',
                                element: <PrivateRoute>
                                  <AddRecipies></AddRecipies>
                                </PrivateRoute>,
                },
                { 
                                path: '/my-recipies',
                                element: <PrivateRoute>
                                  <MyRecipies></MyRecipies>
                                </PrivateRoute>,
                },
                { 
                                path: '/login',
                                element: <LogIn></LogIn>,
                },
                { 
                                path: '/register',
                                element: <Register></Register>,
                },
                { 
                                path : '/forget-password',
                                element: <ForgetPass></ForgetPass>
                },
                { 
                                path: '/recipe-details',
                                element: <PrivateRoute>
                                  <RecipeDetails></RecipeDetails>
                                </PrivateRoute>
                }
                
    ]
  },
]);

export default router;