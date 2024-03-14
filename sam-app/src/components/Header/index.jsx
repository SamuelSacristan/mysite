import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Icone_Pieuvre_Sam_Originale.jpg';
import githubLogo from '../../images/Octicons-mark-github.svg'
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen, menuRef]);

  return (
    <header className="header">
      <img id="Sam-icon" src={logo} alt="Profil Samuel Sacristan" />
      <div id="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div id="menu" ref={menuRef} className={`menu ${isMenuOpen ? 'menuOpen' : ''}`}>
        <div className="close-button" onClick={closeMenu}>
          &#x2715;
        </div>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About Me
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <a href="https://github.com/SamuelSacristan" onClick={closeMenu}>
          <img className='github-logo' src={githubLogo} alt="GitHub" /> {/* Use an img tag with the imported image */}
        </a>
        {/* Add more links as needed */}
      </div>
      <div className={`overlay ${isMenuOpen ? 'overlayVisible' : ''}`} onClick={closeMenu}></div>
    </header>
  );
};

export default Header;
