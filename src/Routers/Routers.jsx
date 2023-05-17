import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Private from './Private'
import Bookings from "../Pages/Bookings";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader:({params})=>fetch(`https://car-doctor-server-sandy-nine.vercel.app/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/bookings',
                element:<Private><Bookings></Bookings></Private>
            }
        ],
    }
]);