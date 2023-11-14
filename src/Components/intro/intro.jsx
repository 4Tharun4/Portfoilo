import React from "react";
import './intro.css'
import bg from '../../Assets/images/backimg.png'
import {Link} from 'react-scroll'
import hire from '../../Assets/images/hireimg.ico'

export const Intro = ()=>{
    return(
      <section id="intro">
      <div className="intro-content">
     <span className="hello">Hello,</span>
     <span className="intro-text">I'am <span className="intro-name">Tharun G V</span> <br />Full Stack Developer</span>
     <p className="intro-quote">Web design is not just about creating pretty layouts. <br /> It's about understanding the marketing challenge behind your business</p>
     <Link><button className="hime-btn"><img src={hire} alt="hire-me" className="btn-img" />Hire Me</button></Link>
      </div>
      <img src={bg} alt="bg-image" className="bg" />
      </section>
    )
}