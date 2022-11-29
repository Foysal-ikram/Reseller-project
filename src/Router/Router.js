import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Seller from "../Components/Dashboard/Seller";
import Users from "../Components/Dashboard/Users";
import AddProduct from "../Components/Home/AddProduct";
import Display from "../Components/Home/Display";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import CatagoryPage from "../Components/Pages/CatagoryPage";
import Error from "../Components/Pages/Error";
import Login from "../Components/Pages/Login";
import Lokkk from "../Components/Pages/Lokkk";
import Register from "../Components/Pages/Register";
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
                        element :<Users></Users>
                    },
                    {
                        path : '/dashboard/sellers' ,
                        element : <Seller></Seller>
                    },
                   
                    
                ]
            },
            {
                path : '/catagory/:name' ,
                element : <CatagoryPage></CatagoryPage> ,
                loader :({params}) => fetch(`http://localhost:5000/catagory/${params.name}`)
            }
        ]
    }
])