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

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [ 
                { 
                                index: true,
                                path: '/',
                                element: <Home></Home>,
                },
                { 
                                path: '/all-recipies',
                                element: <AllRecipies></AllRecipies>,
                },
                { 
                                path: '/add-recipies',
                                element: <AddRecipies></AddRecipies>,
                },
                { 
                                path: '/my-recipies',
                                element: <MyRecipies></MyRecipies>,
                },
                { 
                                path: '/login',
                                element: <LogIn></LogIn>,
                },
                { 
                                path: '/register',
                                element: <Register></Register>,
                },
                
    ]
  },
]);

export default router;