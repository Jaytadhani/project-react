import React from 'react';
import './All.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
            <div className='col-lg-6' > 
            <div style={{position:'relative',zIndex:1 }}>  
          <h1 style={{marginTop:200,opacity:1.0}}>Welcome to Our Company</h1>
          <p style={{fontWeight:'bold'}}>We offer modern solutions for growing your business</p>
          </div>
            <div style={{
              marginLeft:-50,
              marginTop:-250,
              width : 700,
              height:500,
              backgroundImage: "URL(./Images/Background.jpg)",
              backgroundPosition : 'center',
              backgroundSize : 'cover',
              padding: 50,
              paddingTop:200,
              filter: 'blur(4px)',
              zIndex:0
            }}> 
            </div>
           
            </div>
          
          <div className='col-lg-6' data-aos="fade-left">
          <img src='./Images/Home.PNG' alt=""  id='homeimg'/>
          </div> 
       
        </div>
      </div>
  );
};

export default Home;
