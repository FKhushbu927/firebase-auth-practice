import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/home",
            element: <Home></Home>,
          },
          {
            path: "/register",
            element:<Register></Register>
          },

          {
            path: "/login",
            element: <Login></Login>,
          },
     
        ]
      },
  ]);


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
  
    </>
  )
}

export default App
