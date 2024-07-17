
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;