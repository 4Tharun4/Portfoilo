import React from "react";
import './About.css'
import full from '../../Assets/images/full-stack.ico'
import html from '../../Assets/images/html.ico'
import css from '../../Assets/images/css.ico'
import js from '../../Assets/images/js.ico'
import react from '../../Assets/images/react.ico'
import node from '../../Assets/images/node.ico'
import php from '../../Assets/images/php.ico'
import ejs from '../../Assets/images/express.ico'
import mongo from '../../Assets/images/m.ico'
import sql from '../../Assets/images/sql.ico'

export const About =()=>{
    return(
       <section id="Skills">
        <span className="skill-title">What i do</span>
        <span className="skill-desc">We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.</span>
        <div className="skill-bars">
            <div className="skillbar">
                <img src={full} alt="skillbar-image" className="skillbar-image"/>
                <div className="skillbar-Text">
                <h2>Front Developer</h2>
                <p>A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or products you offer</p>
                <div className="tech">
                    <h1 className="tech-title">Technologies Offered</h1>
                    <img src={html} alt="Html image" />
                    <img src={css} alt="css image" />
                    <img src={js} alt="javascript image" />
                    <img src={react} alt="react image" />
                </div>
                </div>
               
            </div>
        </div>
        <div className="skill-bars">
            <div className="skillbar">
                <img src={full} alt="skillbar-image" className="skillbar-image" />
                <div className="skillbar-Text">
                <h2>Back-End Developer</h2>
                <p>Frontend developers make the UI pretty; backend developers make it work. Together, we create magic. </p>
                <div className="tech">
                    <h1 className="tech-title">Technologies Offered</h1>
                    <img src={node} alt="node image" />
                    <img src={php} alt="php image" />
                    <img src={ejs} alt="express image" />
                </div>
                </div>
            </div>
        </div>
        <div className="skill-bars">
            <div className="skillbar">
                <img src={full} alt="skillbar-image" className="skillbar-image" />
                <div className="skillbar-Text">
                <h2>DataBase</h2>
                <p>
                A database is to an application what a brain is to a body - the central repository of knowledge and functionality.
                </p>
                <div className="tech">
                    <h1 className="tech-title">Technologies Offered</h1>
                    <img src={mongo} alt="mongo image" />
                    <img src={sql} alt="sql image" />
                </div>
                </div>
            </div>
        </div>
       </section>
    )
}