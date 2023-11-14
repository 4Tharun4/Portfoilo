import React from "react";
import './NavBar.css'
 import logo from '../../Assets/images/logo.png';
import {Link} from 'react-scroll';
import contact from '../../Assets/images/contact.jpeg'
export const Navbar =()=>{
    return(
       <nav className="main">
        <img src={logo} alt="logo" className="logo"/>
        <div className="nav-list">
            <Link className="nav-items">Home</Link>
            <Link className="nav-items">About</Link>
            <Link className="nav-items">Portfoilo</Link>
            <Link className="nav-items">Projects</Link>
        </div>
        <button className="btn">
            <img src={contact}alt="contact img" className="btnimg" /> Contact Me
        </button>
       </nav>
    )
}