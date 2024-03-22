import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Icone_Pieuvre_Sam_Originale.jpg';
import githubLogo from '../../images/Octicons-mark-github.svg';
import './Header.scss';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img id="Sam-icon" src={logo} alt="Profil Samuel Sacristan" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
