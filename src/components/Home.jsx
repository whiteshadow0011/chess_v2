import React from 'react';
import Home_img from '../assets/pexels-vlada-karpovich-6114992.jpg';
import Media_img from '../assets/pexels-cottonbro-4973821.jpg'; // Media query image

const Home = () => {
  return (
    <div
      className="home_container"
      style={{
        '--default-background-image': `url(${Home_img})`,
        '--media-background-image': `url(${Media_img})`,
      }}
    >
      <div className="home_head">
        ACADEMIC CHESS <br /> FOR <span style={{ color: '#ffcd18' }}>EVERYONE</span>
      </div>
      <div className="home_description">
        We are dedicated to broadening and developing chess as art, recreation, and as a significant element of culture in India.
      </div>
    </div>
  );
};

export default Home;
