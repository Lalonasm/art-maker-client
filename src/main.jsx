import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
// import Home from './components/Home/Home.jsx';
// import Navbar from './components/Shared/Navbar/Navbar.jsx';
// import Footer from './components/Shared/Footer/Footer.jsx';
// import ErrorPage from './components/pages/ErrorPage/ErrorPage.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//     errorElement:<ErrorPage></ErrorPage>,
//     children: [
//       {
//         path: '/navbar',
//         element: <Navbar></Navbar>
//       },
//       {
//         path:'/footer',
//         element:<Footer></Footer>
//       }
//     ]
//   },
// ]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
