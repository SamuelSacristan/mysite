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

  const openResume = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/images/ResumeSam.pdf`;
    window.open(resumeUrl, '_blank');
  };
  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img id="Sam-icon" src={logo} alt="Profil Samuel Sacristan" />
      </div>
      <div className="nav-links">
        <button onClick={() => scrollToSection('about')}>À propos</button>
        <button onClick={() => scrollToSection('skills')}>Compétences</button>
        <button onClick={() => scrollToSection('projects')}>Projets</button>
        <a href="/pdf/ResumeSam.pdf" target="_blank" rel="noopener noreferrer">Mon CV</a>
      </div>
    </header>
  );
};

export default Header;
