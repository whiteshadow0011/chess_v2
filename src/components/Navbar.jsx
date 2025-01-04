import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onAchievementsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">MyLogo</div>

        {/* Toggle Button for Mobile */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-link">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="navbar-link">
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className="navbar-link achievements-link">
            <span onClick={onAchievementsClick} style={{ cursor: 'pointer' }}>
              Achievements
            </span>
          </li>
          <li className="navbar-link">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
