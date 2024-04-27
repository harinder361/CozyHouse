import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='top'>
        <div className="topLeft">
          <a href="https://www.facebook.com/" className="topIcon"><i className="topIcon fa-brands fa-square-facebook"></i></a>
          <a href="https://twitter.com/?lang=en" className="topIcon"><i className="topIcon fa-brands fa-square-x-twitter"></i></a>
          <a href="https://in.pinterest.com/" className="topIcon"><i className="topIcon fa-brands fa-square-pinterest"></i></a>
          <a href="https://www.instagram.com/" className="topIcon"><i className="topIcon fa-brands fa-square-instagram"></i></a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to={'/'} style={{textDecoration: "none", color: "inherit"}}>HOME</Link>
            </li>
            <li className="topListItem">
            <Link to="/" style={{textDecoration: "none", color: "inherit"}} >ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link to="/" style={{textDecoration: "none", color: "inherit"}} >CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link to="/write" style={{textDecoration: "none", color: "inherit"}} >WRITE</Link>
            </li>
            <li className="topListItem">
            <Link to="/login" style={{textDecoration: "none", color: "inherit"}} >LOGOUT</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
        
        {/* <img className='topImage' src="profile" alt=<i class="fa-solid fa-user"></i> /> */}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar
