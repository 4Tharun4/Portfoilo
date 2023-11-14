import React from "react";
import './About.css'
import full from '../../Assets/images/full-stack.ico'

export const About =()=>{
    return(
       <section id="Skills">
        <span className="skill-title">What i do</span>
        <span className="skill-desc">We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.</span>
        <div className="skill-bars">
            <div className="skillbar">
                <img src={full} alt="skillbar-image" className="skillbar-image"/>
                <div className="skillbar-Text">
                <h2>Full-Stack Developer</h2>
                <p>I'm full stack developer is a developer who can work on both the frontend and backend parts of an application</p>
                </div>
            </div>
        </div>
        <div className="skill-bars">
            <div className="skillbar">
                <img src={full} alt="skillbar-image" className="skillbar-image" />
                <div className="skillbar-Text">
                <h2>Full-Stack Developer</h2>
                <p>I'm full stack developer is a developer who can work on both the frontend and backend parts of an application. </p>
                </div>
            </div>
        </div>
        <div className="skill-bars">
            <div className="skillbar">
                <img src={full} alt="skillbar-image" className="skillbar-image" />
                <div className="skillbar-Text">
                <h2>Full-Stack Developer</h2>
                <p>
                I'm full stack developer is a developer who can work on both the frontend and backend parts of an application.
                </p>
                </div>
            </div>
        </div>
       </section>
    )
}