import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AboutUs from './Components/AboutUs.jsx'
import Product from './Components/Product.jsx'
import SignIn from './Auth/SignIn.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div className=' h-screen bg-red-300'>
    <Navbar />
    </div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path:"/login",
        element: <SignIn/> 
      }
      
    ],
  },


  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
