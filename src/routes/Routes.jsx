
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import AllArtCraft from "../components/pages/AllArtCraft/AllArtCraft";
import AddCraft from "../components/pages/AddCraft/AddCraft";
import MyArtList from "../components/pages/MyArtList/MyArtList";
import PrivateRoute from "./PrivateRoute";
import Banner from "../components/pages/Banner/Banner";
// import ViewDetailPage from "../components/pages/ViewDetailPage/ViewDetailPage";
import ViewDetails from "../components/pages/ViewDetailPage/ViewDetails";
import UpdateCraft from "../components/pages/UpdateCraft/UpdateCraft";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allArtCraft',
                element: <AllArtCraft></AllArtCraft>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/addCraft',
                element: <PrivateRoute>
                    <AddCraft></AddCraft>
                </PrivateRoute>
            },
            {
                path: '/updateCraft/:id',
                element:<PrivateRoute> <UpdateCraft></UpdateCraft></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/craft/${params.id}`)
            },
            {
                path: '/myArtList',
                element: <PrivateRoute><MyArtList></MyArtList></PrivateRoute>
            },
            {
                path: '/craftDetails/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            }
        ]
    }
])
export default router;