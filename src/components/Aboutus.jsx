import React from 'react'
import img1 from '../assets/kid_chess.avif'
import img2 from '../assets/tutor.jpeg'

const Aboutus = () => {
    return (
        <div className='About-box'>
            <div className="About-container">
                <div className="About-txt">
                    <div className="About-head">
                        About Us
                    </div>
                    <div className="About-data">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam reprehenderit sunt unde? Repellat alias ratione totam quo iure quisquam perspiciatis amet a. Enim aut tenetur in.
                    </div>
                </div>
                <div className="About-img" style={{
            backgroundImage: `url(${img1})`}}></div>
            </div>
            <div className="About-container">
                <div className="About-img2"style={{
            backgroundImage: `url(${img2})`}}></div>
                <div className="About-txt2">
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
    )
}

export default Aboutus
