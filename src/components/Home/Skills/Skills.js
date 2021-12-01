import React from 'react';
import './Skills.css'
const Skills = () => {
    return (
        <div id="skills" className="skills section-bg pt-3 mt-5 mb-5 pb-5">
            <div className="container align-items-center">
                <div className="section-title">
                <h1 className="text-success fw-1 ms-5">Skill</h1>
                <p>This all are my skills .</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="progress">
                            <span className="skill">HTML <i className="val">95%</i> </span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                                </div>
                          
                            </div>
                        </div>
                        
                        <div className="progress">
                            <span className="skill">CSS <i className="val">75%</i> </span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                                </div>
                          
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Javascript <i className="val">65%</i> </span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                                </div>
                          
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6" data-aos-delay="100" >
                        <div className="progress">
                            <span className="skill">React <i className="val">75%</i> </span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                                </div>
                          
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">MongoDB <i className="val">55%</i> </span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                                </div>
                          
                            </div>
                        </div>
                        </div>
                   
                
            </div>
            </div>
        </div>
    );
};

export default Skills;