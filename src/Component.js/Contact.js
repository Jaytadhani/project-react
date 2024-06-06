import React from 'react';
import { FaAddressCard, FaClock, FaMailBulk,FaMobileAlt} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{marginTop:30}}>
          <h1>Contact</h1>
            <div className='Contactdiv' data-aos="fade-down"> <FaAddressCard></FaAddressCard> Address</div>
            <div className='Contactdiv' data-aos="fade-down">  <FaMailBulk></FaMailBulk> Email Us</div>  
            <div >
        <form>
          <input type='text' placeholder='Name' className='Forminput' data-aos="fade-down"></input>
          <input type='text' placeholder='Your Email' className='Forminput' data-aos="fade-down"></input>
          <input type='text' placeholder='Address' className='Forminput' data-aos="fade-down"></input>
        <center > <button data-aos="fade-right">Submit</button></center> 
          </form>
        </div>
            </div>
            <div>  
            <div className='Contactdiv' data-aos="fade-down"><FaMobileAlt></FaMobileAlt>Call Us</div>
            <div className='Contactdiv' data-aos="fade-down"><FaClock/>Open Hours 24/7</div>
        
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Contact;
