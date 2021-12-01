import React from 'react';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <About></About>
             <Skills></Skills>
             <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;