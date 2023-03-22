import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Garage.webp';
import "../../scss/style.css";
import { Link } from "react-router-dom";

import Linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github-mark.png";
import instagram from "../../assets/images/Instagram.png";


function FooterStructure() {
  return (

    <>
      <div className='socialLinks'>
        <a href="https://www.linkedin.com/in/ralph-cox-strategy66/" target="_blank" rel="noreferrer">
          <img className='socialLogo' src={Linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/tascott" target="_blank" rel="noreferrer">
          <img className='socialLogo' src={github} alt="github" />
        </a>
        <a href="https://www.instagram.com/bessant.anna/" target="_blank" rel="noreferrer">
          <img className='socialLogo' src={instagram} alt="instagram" />
        </a>

      </div>
      <div sm={4} className="FooterLinks copytxt">
        <p>Copyright &copy 2023: GARAGE web</p>
      </div>
      <div>
        <Link to="/"><img src={logo} className="WGLogo" alt="Logo" /></Link>
      </div>
    </>
  );
}

export default FooterStructure;