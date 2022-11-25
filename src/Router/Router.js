import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Seller from "../Components/Dashboard/Seller";
import Users from "../Components/Dashboard/Users";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import PrivateRoute from "./PrivateRout";

export const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Main></Main>,
        children : [
            {
                path : '/' ,
                element : <Home></Home>
            },
            {
                path : '/login' ,
                element : <Login></Login>
            },
            {
                path : '/signup' ,
                element : <Register></Register>
            },
            {
                path : '/dashboard' ,
                element : <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
                children : [
                    {
                        path : '/dashboard/users' ,
                        element :<Users></Users>
                    },
                    {
                        path : '/dashboard/seller' ,
                        element : <Seller></Seller>
                    }
                    
                ]
            }
        ]
    }
])