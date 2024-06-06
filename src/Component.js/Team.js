import React, { useEffect } from 'react';
import $ from 'jquery';
import './All.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/Images/john.JPG',
    bio: 'John is the CEO of our company. He has over 10 years of experience in the industry and is passionate about helping businesses grow.'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/Images/jane.JPG',
    bio: 'Jane is our CTO. She has a background in computer science and has worked on several successful projects in the past.'
  },
  {
    name: 'Bob Johnson',
    role: 'Lead Developer',
    image: '/Images/bob.JPG',
    bio: 'Bob is our lead developer. He has a deep understanding of React and is responsible for building our platform.'
  }
];

const Team = () => {
  useEffect(() => {
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(2000);
    $("#div3").fadeIn(3000);
  }, []); 

  return (
    <div className="container" data-aos="fade-right">
      <div className="row" style={{marginTop:30}}>
      <h1>Our Team member</h1>
        {teamMembers.map((member, index) => (
          <div key={index} id={`div${index + 1}`} className="col team-member" style={{display: 'none'}}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
