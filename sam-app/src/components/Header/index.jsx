import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Icone_Pieuvre_Sam_Originale.jpg';
import './Header.scss'; // Import the regular SCSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen, menuRef, setIsMenuOpen]);

  return (
    <header className="header">
      <img id="Sam-icon" src={logo} alt="Profil Samuel Sacristan" />
      <h1>Bienvenue sur mon site !</h1>
      <div id="menu-icon" onClick={toggleMenu}>&#9776;</div>
      <div id="menu" ref={menuRef} className={`menu ${isMenuOpen ? 'menuOpen' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        {/* Add more links as needed */}
      </div>
    </header>
  );
};

export default Header;
