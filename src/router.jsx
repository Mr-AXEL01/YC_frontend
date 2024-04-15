import {createBrowserRouter} from "react-router-dom";
import Dashboard from "@/views/Dashboard.jsx";
import Login from "@/views/Login.jsx";
import Register from "@/views/Register.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    },
])

export default router;