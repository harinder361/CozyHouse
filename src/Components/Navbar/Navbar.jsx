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
              <Link to={'/'} className='link'>HOME</Link>
            </li>
            <li className="topListItem">
            <Link to="/" className='link' >ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link to="/pets" className='link' >PETS</Link>
            </li>
            <li className="topListItem">
            <Link to="/write" className='link' >WRITE</Link>
            </li>
            <li className="topListItem">
            <Link to="/login" className='link' >LOGOUT</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
        
        {/* <img className='topImage' src="profile" alt=<i class="fa-solid fa-user"></i> /> */}
        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
        <i className="topSearchIcon fa-solid fa-user"></i>
        </div>
    </div>
  )
}

export default Navbar
