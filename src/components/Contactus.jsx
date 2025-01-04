import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contactus = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-head">
            Contact Us  
          </div>
          <div className="contact-sources">
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: '#e6c300', marginRight: '10px' }} />
              <span style={{color:'black', fontSize:'larger'}}>123 Elm Street, Springfield, IL 62704, USA</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#e6c300', marginRight: '10px' }} />
              <span style={{color:'black', fontSize:'larger'}}>+1 (555) 867-5309</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#e6c300', marginRight: '10px' }} />
              <span style={{color:'black', fontSize:'larger'}}>exampleuser@gmail.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#e6c300', marginRight: '10px' }} />
              <span style={{color:'black', fontSize:'larger'}}>@TheChessPioneersAcademy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
