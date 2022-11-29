import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Dashpage from "../Components/Dashboard/Dashpage";
import Seller from "../Components/Dashboard/Seller";
import Users from "../Components/Dashboard/Users";
import AddProduct from "../Components/Home/AddProduct";
import AllProducts from "../Components/Home/AllProducts";
import Display from "../Components/Home/Display";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import CatagoryPage from "../Components/Pages/Catagory/CatagoryPage";
import Error from "../Components/Pages/Error";
import Login from "../Components/Pages/Login";
import Lokkk from "../Components/Pages/Lokkk";
import MyOrders from "../Components/Pages/MyOrders/MyOrders";
import Register from "../Components/Pages/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRout";

export const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Main></Main>,
        children : [
            {
                path : '/' ,
                element : <Home></Home>,
                children :[
                    {
                        path : '/' ,
                        element : <Display></Display>
                    },
                    {
                        path : '*' ,
                        element : <Error></Error>
                    },
                   
                ]
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
                        path : '/dashboard' ,
                        element: <Dashpage></Dashpage>

                    },
                    {
                        path : '/dashboard/users' ,
                        element :<AdminRoute><Users></Users></AdminRoute>
                    },
                    {
                        path : '/dashboard/sellers' ,
                        element :<AdminRoute><Seller></Seller></AdminRoute> 
                    },
                    {
                        path : '/dashboard/myorders' ,
                        element : <MyOrders></MyOrders>
                    }
                   
                    
                ]
            },
            {
                path : '/catagory/:name' ,
                element : <PrivateRoute><CatagoryPage></CatagoryPage></PrivateRoute> ,
                loader :({params}) => fetch(`http://localhost:5000/catagory/${params.name}`)
            },
            {
                path : '/allproducts' ,
                element : <AllProducts></AllProducts>
            }
        ]
    }
])