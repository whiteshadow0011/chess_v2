import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Aos from 'aos';
import 'aos/dist/aos.css';
import con_img from '../assets/pexels-pixabay-163427.jpg';

const Contactus = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      <div
        className="contact-container"
        style={{
          backgroundImage: `url(${con_img})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="contact-box" data-aos="zoom-in">
          <div className="contact-head">
            Contact Us
          </div>
          <div className="contact-sources">
            <div className="contact-item" data-aos="fade-right" data-aos-delay="100">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2x"
                style={{ color: '#e6c300', marginRight: '10px' }}
              />
              <span style={{ color: 'black', fontSize: 'larger' }}>123 Elm Street, Springfield, IL 62704, USA</span>
            </div>
            <div className="contact-item" data-aos="fade-right" data-aos-delay="200">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                style={{ color: '#e6c300', marginRight: '10px' }}
              />
              <span style={{ color: 'black', fontSize: 'larger' }}>+1 (555) 867-5309</span>
            </div>
            <div className="contact-item" data-aos="fade-right" data-aos-delay="300">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ color: '#e6c300', marginRight: '10px' }}
              />
              <span style={{ color: 'black', fontSize: 'larger' }}>exampleuser@gmail.com</span>
            </div>
            <div className="contact-item" data-aos="fade-right" data-aos-delay="400">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: '#e6c300', marginRight: '10px' }}
              />
              <span style={{ color: 'black', fontSize: 'larger' }}>@TheChessAcademy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
