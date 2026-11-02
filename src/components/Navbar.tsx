import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <img src={logo} alt="Greens Technologys logo" className="navbar-logo" />
      </Link>
      <button
        type="button"
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/about-us" className="nav-link" onClick={closeMenu}>About Us</Link>
        <Link to="/certifications" className="nav-link" onClick={closeMenu}>Certifications</Link>
        <Link to="/courses" className="nav-link" onClick={closeMenu}>Courses</Link>
        <Link to="/contact-us" className="nav-link" onClick={closeMenu}>Contact Us</Link>
        <Link to="/hostel-facilities" className="nav-link" onClick={closeMenu}>Hostel Facilities</Link>
        <Link to="/placements" className="nav-link" onClick={closeMenu}>Placements</Link>
        <Link to="/careers" className="nav-link" onClick={closeMenu}>Careers</Link>
        <Link to="/franchise" className="nav-link" onClick={closeMenu}>Franchise</Link>
      </div>
    </nav>
  );
}

export default Navbar;
