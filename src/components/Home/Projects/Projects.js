import React from 'react';
import img1 from '../../../images/img1.png'
import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import img4 from '../../../images/img4.png'
import './Projects.css'
const Projects = () => {
    return (
        <div id="services" class="services ">
            <div class="container">
                <h2>Services</h2>

            </div>
            <div className="row pt-4 store-container ms-5 ps-4">
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up"data-aos-delay="100">
                    <div className="icon">
                        <div className="cart-img">
                            <img src={img1} alt="" />
                        </div>
                        <h2 className="text-success pt-4 fs-1">Glassy Sunglass Store</h2>
                        <h4 className="title">Features: Html,Css,JavaScript,React Js,MongoDB </h4>
                        <p className="description">This is a full stack web application.	An authenticated user can buy the product from this website. Firstly he/she has to place an order.The order will be stored in the database and users can see their products.Here admin-user panel is also implemented.Admin can be delete any product,add any product and show all placed orders.The user can see his/her products after placing the order and also can delete their own products. Users also give their review which products they buy.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up"data-aos-delay="100">
                    <div className="icon">
                    <div className="cart-img">
                            <img src={img2} alt="" />
                        </div>
                        <h2 className="text-success pt-4 fs-1">Bio-Medicare Clinic</h2>
                        <h4 className="title"> Features: Html,Css,JavaScript,React Js </h4>
                        <p className="description">It’s a clinic website where all different services are provided for all patient.First of all users should be logged in.An authenticated user can see the details of all services and user also go to all route.
</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon">
                    <div className="cart-img">
                            <img src={img3} alt="" />
                        </div>
                        <h2 className="text-success pt-4 fs-1">Express Travel-shoot</h2>
                        <h4 className="title">Features: Html,Css,JavaScript,React Js,Firebase</h4>
                        <p className="description">It’s a travel-based website.All the users should be logged in.An authenticated user can choose any service for travel.Users can select their destination and booked their ticket for travel.Users  can be delete their services and also users can see their order.

</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  cart-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon">
                    <div className="cart-img">
                            <img src={img4} alt="" />
                        </div>
                        <h2 className="text-success pt-4 fs-1">Language Council Club</h2>
                        <h4 className="title">Features: Html,Css,JavaScript</h4>
                        <p className="description">This website is build for students for their learningBasically it helps those person who want to know many international language.All the information is given this website.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;