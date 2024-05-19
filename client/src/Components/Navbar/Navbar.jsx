import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace('/login')
  };

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
            <Link to="/about" className='link' >ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link to="/pets" className='link' >PETS</Link>
            </li>
            <li className="topListItem">
            <Link to="/write" className='link' >ADD</Link>
            </li>
            <li className="topListItem">
            <span className='link' onClick={handleLogout}>{user && "LOGOUT"}</span>
            </li>
          </ul>
        </div>
        <div className="topRight">
        {user ? (
          <span>
            {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}
            <i className="topSearchIcon fa-solid fa-user"></i>
          </span>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        
        {/* <img className='topImage' src="profile" alt=<i class="fa-solid fa-user"></i> /> */}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        </div>
    </div>
  )
}

export default Navbar
