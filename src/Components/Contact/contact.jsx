import React, { useRef } from "react";
import './contact.css'
import facebook from '../../Assets/images/facebook.ico'
import linkdin from '../../Assets/images/linkdin.ico'
import github from '../../Assets/images/git.ico'
import emailjs from '@emailjs/browser';
import swal from "sweetalert";


export const Contact=()=>{
const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vbrh2vb', 'template_7qqi15p', form.current, '0WNDFhOqdfXgDHzNj')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert=swal("Email Send", "Thanks For Contact");
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
      <section id="con">
        <div className="contact">
        <h1 className="c-title">Contact Me</h1>
        <span className="contact-desc">Give me Oppertunity</span>
        <form  className="contactform" ref={form} onSubmit={sendEmail}>
           <input type="text" className="name"  placeholder="Name" name="user_name"/>
           <input type="email" className="email" placeholder="email" name="user_email"/>
           <textarea name="message" rows="5" placeholder="Message" className="msg"></textarea>
           <button className="btn1" type="submit" value='Send'>Submit</button>
           <div className="links">
           <a href="https://www.facebook.com/profile.php?id=100041490312666" target="__blank"> <img src= {facebook} alt="facebook" className="link" /></a>
           <a href="https://www.linkedin.com/in/tharun-g-v-58146119a/" target="__blank"> <img src={linkdin} alt="linkdin"  className="link"/></a>
            <a href="https://github.com/4Tharun4" target="__blank"> <img src={github} alt="github"   className="link"/></a>
            
           </div>

        </form>
      </div>
      </section>
    )
}


