import React from 'react';
import NavigationBar from './Component.js/Navbar';
import Home from './Component.js/Home';
import About from './Component.js/About';
import Services from './Component.js/Services';
import Portfolio from './Component.js/Portfolio';
import Team from './Component.js/Team';
import Blog from './Component.js/Blog';
import Contact from './Component.js/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const App = () => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <div style={{backgroundImage:"URL('./Images/back.jpg')"}} className='backgroundimg'>
      <NavigationBar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="team"><Team /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
