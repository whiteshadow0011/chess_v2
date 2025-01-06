import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/kid_chess.avif';
import img2 from '../assets/tutor.jpeg';

const Aboutus = () => {
    useEffect(() => {
        Aos.init({ duration: 1500, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div className='About-box'>
            <div className="About-container">
                <div
                    className="About-txt"
                    data-aos="fade-right"
                >
                    <div className="About-head">
                        About Us
                    </div>
                    <div className="About-data">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam reprehenderit sunt unde? Repellat alias ratione totam quo iure quisquam perspiciatis amet a. Enim aut tenetur in.
                    </div>
                </div>
                <div
                    className="About-img"
                    style={{ backgroundImage: `url(${img1})` }}
                    data-aos="fade-left"
                ></div>
            </div>
            <div className="About-container">
                <div
                    className="About-img2"
                    style={{ backgroundImage: `url(${img2})` }}
                    data-aos="fade-right"
                ></div>
                <div
                    className="About-txt2"
                    data-aos="fade-left"
                >
                    <div className="About-head">
                        Our Academy's Benefits
                    </div>
                    <div className="About-data2">
                        <div className="point1">
                            Best Teachers
                        </div>
                        <div className="point1-data">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, optio.
                        </div>
                        <div className="point1">
                            Positive Learning Environment
                        </div>
                        <div className="point1-data">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, eveniet!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
