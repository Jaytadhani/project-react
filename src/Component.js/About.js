import React from 'react';
import './All.css'; 
import CountUp from 'react-countup';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"  data-aos="fade-right">
            <img src='./Images/about.JPG' alt='About Us' className='aboutimg' />
          </div>
          <div className="col-lg-6"  data-aos="fade-up">
            <div style={{ marginTop: '100px' }}>
              <h1>About Us</h1>
              <p>We are a team of talented designers making websites with Bootstrap</p>
            </div>
          </div>
        </div>

        <div className='aboutrow' >
          <div className="col aboutdiv"  data-aos="fade-up">
           <h2>Happy Clients</h2>
            <span class="stat-icon">😊</span>
            <CountUp start={0} end={250} duration={2} className='Countup' />
          </div>

          <div className="col aboutdiv"  data-aos="fade-up">
            <h2>Projects</h2>
            <span class="stat-icon">📋</span>
            <CountUp start={0} end={451} duration={2} className='Countup'  />
          </div>

          <div className="col aboutdiv"  data-aos="fade-up">
            <h2>Hours Of Support</h2>
            <span class="stat-icon">🎧</span>
            <CountUp start={0} end={1440} duration={2} className='Countup' />
          </div>

          <div className="col aboutdiv"  data-aos="fade-up">
            <h2>Hard Workers</h2>
            <span class="stat-icon">👥</span>
            <CountUp start={0} end={10} duration={2} className='Countup' />
          </div>
        </div>
      </div>  
    </div>
  );
};

export default About;
