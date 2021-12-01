import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div id="services" class="services ">
            <div class="container">
                <h2>Services</h2>

            </div>
            <div className="row pt-4 store-container">
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up"data-aos-delay="100">
                    <div className="icon">
                        <h4 className="title"> Clear Code </h4>
                        <p className="description">Its all card are my new.Clean and clear code is provided</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up"data-aos-delay="100">
                    <div className="icon">
                        <h4 className="title"> Designing </h4>
                        <p className="description">Its all card are my new.Clean and clear code is provided</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon">
                        <h4 className="title">React Js</h4>
                        <p className="description">Its all card are my new.Clean and clear code is provided</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;