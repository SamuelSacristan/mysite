import React from 'react';
import './FixedMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FixedMenu = () => {
    <script src="https://kit.fontawesome.com/71c904f8a3.js" crossorigin="anonymous"></script>
    const email = 's.sacristan64@hotmail.com';
    const mailtoLink = `mailto:${email}`;
  return (
    <div className="fixed-menu">
      <a href="https://www.linkedin.com/in/samuel-sacristan" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>
      <a href="https://github.com/SamuelSacristan" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>
      <a href="https://www.instagram.com/samsacristan/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </a>
      <a className='mailLink' href={mailtoLink}>
        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
      </a>
    </div>
  );
};

export default FixedMenu;
