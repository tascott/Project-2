import React from 'react';
import "../../scss/style.css";

import Linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github-mark.png";
import instagram from "../../assets/images/Instagram.png";


function FooterStructure() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/ralph-cox-strategy66/" target="_blank" rel="noreferrer">
        <img src={Linkedin} alt="Linkedin" />
      </a>
      <a href="https://github.com/tascott" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
      <a href="https://www.instagram.com/bessant.anna/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" />
      </a>
      <div>
        <Link to="/"><img src={logo} className="FooterLogo" alt="Logo" /></Link>
      </div>
      <div sm={4} className="FooterLinks copytxt">
        <p>Copyright &copy 2023: GARAGE web</p>
      </div>
    </div >
  );
}

export default FooterStructure;