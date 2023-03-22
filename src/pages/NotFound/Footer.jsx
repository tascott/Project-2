import React from 'react'
import "./Footer.css"

import Linkedin from "../Images/Social Media/linkedin.png"
import github from "../Images/Social Media/github.png"
import instagram from "../Images/Social Media/instagram.png"


export default function Footer() {
    return (
      <div>
          {/* Footer */}
          <section className="Footer">
          <footer>
            <Container>
              <Row>
                <Col sm={4}>
                  <div className="iconcont">
                    <div className="SocialIco">
                    <a href="https://www.linkedin.com/RALPH" target="_blank" rel="noreferrer">
                      <img src={Linkedin} alt="Linkedin" />
                      </a>
                    </div>
                    <div className="SocialIco">
                    <a href="https://github.com/tascott" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                      </a>
                    </div>
                    <div className="SocialIco">
                    <a href="https://www.instagram.com/bessant.anna/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                      </a>
                    </div>
                    
                  </div>
                </Col>
  
                <Col sm={4} className="text-center">
                <Link to="/"><img src={logo} className="FooterLogo" alt="Logo" /></Link>
                </Col>
  
                <Col sm={4} className="FooterLinks copytxt">
                <p>Copyright &copy 2023: GARAGE web</p>
                </Col>
                
              </Row>
            </Container>
          </footer>
        </section>
      </div>
    )
  }

