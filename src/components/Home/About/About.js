import React from 'react';
import img from '../../../images/img.jpg'
import './About.css'

const About = () => {
    return (
        <div id="about" class="about">
           <div className="container">
           <div className="section-title pt-3 mt-3">
               <h2>About</h2>
              
           </div>
           <div className="row">
               <div className="col-lg-6" data-aos="fade-right">
                   <img className="w-50 ms-5 ps-5" src={img} alt="" />
               </div>
               <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                   <h3 className="pt-4">Front End Developer</h3>
                   <p className="font-italic">I am a front end developer.I want to be web developer.I also done projects.Upcomming all the projects are done by me.Most of the project are done by using React js,Javascript,MongoDB.</p>
                   <div class="row">
                     
                   </div>
               </div>
           </div>
               </div> 
        </div>
    );
};

export default About;