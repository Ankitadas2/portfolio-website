import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='profile-container' >
        <div className='profile-parent'>
        <div className='profile-details'>
            <div className='colz'>
                <div className='colz-icon'>

                
                <a href="https://www.linkedin.com/in/ankita-das-14a240216/">
                <i className="bi bi-linkedin"></i>
                </a>
                    <a href="https://github.com/Ankitadas2">
                    <i className="bi bi-github"></i>
                    </a>
                    </div>
            </div>
            <div className="profile-details-name">
                <span className="primary-text">
                    {""}
                    I am <span className="highlighted-text">Ankita Das</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className="primary-text">
                    {""}
                    <h1>
                        {""}
                       
                       
                    </h1>
                    <span className="profile-role-tagline">
                        I am a Front End Developer.
                    </span>
                </span>
            </div>
            <div className='profile-options'>
                <button className="btn primary-btn">
                 {""}
                 Hire Me{}
                </button>
                <a href='Ankita.pdf' download='Resume Ankita.pdf'>
                    <button className="btn highLighted-btn">Resume</button>
                </a>
            </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
        </div>
    </div>
        
    );
};

export default Banner;