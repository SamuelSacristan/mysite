import React from 'react';
import './FixedMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FixedMenu = () => {
    <script src="https://kit.fontawesome.com/71c904f8a3.js" crossorigin="anonymous"></script>
  return (
    <div className="fixed-menu">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </a>
      {/* <a href="mailto:your.email@example.com">
        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
      </a> */}
    </div>
  );
};

export default FixedMenu;
