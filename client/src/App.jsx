import React, { PureComponent } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Single from './Pages/Single'
import Write from './Pages/Write'
import Settings from './Pages/Settings'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AllPets from './Pages/AllPets';
import About from './Pages/About';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path: "/register",
      element: <><Register/></>
    },
    {
      path: "/settings",
      element: <><Navbar/><Settings/></>
    },
    {
      path: "/write",
      element: <><Navbar/><Write/></>
    },
    {
      path: "/pets",
      element: <><Navbar/><AllPets/></>
    },
    {
      path: "/pets/:petID",
      element: <><Navbar/><Single/></>
    }
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
