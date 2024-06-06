import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './All.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ScrollLink className="navbar-brand" to="home" smooth={true} duration={500}>
        <img src='./Images/Logo.PNG' alt='' className='Logo'></img>Our Company</ScrollLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true} duration={500}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="services" smooth={true} duration={500}>Services</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="team" smooth={true} duration={500}>Team</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="blog" smooth={true} duration={500}>Blog</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="contact" smooth={true} duration={500}>Contact</ScrollLink>
            </li>
            </ul>
           <ul class="navbar-nav">
          <li class="nav-item dropdown">
             <button class="btn dropdown-toggle" data-bs-toggle="dropdown">Other
             </button>
             <ul className="dropdown-menu dropdown-menu-info">
                  <li><a className="dropdown-item" href="action">Action</a></li>
                   <li><a className="dropdown-item" href="another ">Another action</a></li>
                  <li><a className="dropdown-item" href="something">Something else here</a></li>
             </ul>
         </li>
         </ul>
         <div style={{paddingLeft:700}}>
          <button type="button" className='btn btn-dark' >Get Start </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
