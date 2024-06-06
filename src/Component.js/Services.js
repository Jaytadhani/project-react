import React from 'react';
import './All.css';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ marginTop: 50 }}>
            <h1>Services</h1>
            <div>
              <div className='Servicesdiv'  data-aos="fade-right">Web Development</div>
              <div className='Servicesdiv' data-aos="fade-right">ReactJs Development</div>
              <div className='Servicesdiv' data-aos="fade-right">Web Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
