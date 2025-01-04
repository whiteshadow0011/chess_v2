import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="logo">
                    <h1>
                        MyLogo
                    </h1>
                </div>

                {/* Follow Us Section */}
                <div className="follow-us">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </i>
                        </a>
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </i>
                        </a>
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </i>
                        </a>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="subscribe">
                    <h2>
                        Stay tuned to get the latest news, course updates, events
                    </h2>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>Copyright © 2021. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
