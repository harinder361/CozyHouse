import React, { PureComponent } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Single from './Pages/Single'
import Write from './Pages/Write'
import Settings from './Pages/Settings'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <>
      <Navbar/>
      <Register/>
    </>
  )
}

export default App
