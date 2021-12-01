import React from 'react';

const Header = () => {
    return (
        <div>
          
            <nav class="navbar navbar-dark bg-dark sticky-top  navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#nav">Welcome to Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-5 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#blogs">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#services">Services</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;