import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

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
            }
        ]
    }
])