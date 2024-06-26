import {createBrowserRouter} from "react-router-dom";
import Dashboard from "@/views/Dashboard.jsx";
import Login from "@/views/Login.jsx";
import Register from "@/views/Register.jsx";
import GuestLayout from "@/components/GuestLayout.jsx";
import DefaultLayout from "@/components/DefaultLayout.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/register',
                element: <Register />
            },
        ]
    }
])

export default router;