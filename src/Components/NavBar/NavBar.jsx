import React, { useState } from "react";
import './NavBar.css'
 import logo from '../../Assets/images/logo.png';
import {Link} from 'react-scroll';
import contact from '../../Assets/images/contact.jpeg'
import menu from '../../Assets/images/menu.ico'
export const Navbar =()=>{
    const[showmenu,setshowmenu]=useState(false);
    return(
       <nav className="main">
        <img src={logo} alt="logo" className="logo"/>
        <div className="nav-list">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="nav-items">Home</Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="nav-items">About</Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="nav-items">Portfoilo</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="nav-items">Projects</Link>
        </div>
        <button className="btn" onClick={()=>{
            document.getElementById('con').scrollIntoView({behavior:'smooth'})
        }}
        >
            <img src={contact}alt="contact img" className="btnimg" /> Contact Me
        </button>
        <img src={menu} alt="menu" className="mobview" onClick={()=>setshowmenu(!showmenu)}/>
        <div className="nav-menu" style={{display:showmenu? "flex" :'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="items" onClick={()=>setshowmenu(false)}>Home</Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="items" onClick={()=>setshowmenu(false)}>About</Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="items" onClick={()=>setshowmenu(false)}>Portfoilo</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="items" onClick={()=>setshowmenu(false)}>Projects</Link>
            <Link activeClass="active" to="con" spy={true} smooth={true} offset={-100} duration={500} className="items" onClick={()=>setshowmenu(false)}>Contact Me</Link>
        </div>
       </nav>
    )
}