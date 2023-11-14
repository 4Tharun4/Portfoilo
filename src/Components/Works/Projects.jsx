import React from "react";
import './Project.css'
import ecomm from '../../Assets/images/e-comm.ico'


export const Projects =()=>{
    return(
        <section id="works">
        <h1 className="works-title">Projects</h1>
        <span className="work-desc">Embarking on a web development journey is like crafting a digital symphony—where every line of code is a note, and every feature harmonizes to create a seamless user experience. Through meticulous design and precise execution, we orchestrate a virtual masterpiece that not only meets functional requirements but elevates user engagement, delivering a symphony of innovation in every click and interaction</span>
        <div className="workimages">
           <img src={ecomm} alt="" className="workimg" />


        </div>


        </section>
    )
}