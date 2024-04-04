import React from 'react';
import './AboutMe.scss';
import ChapterTitle from '../ChapterTitle';

function AboutMe() {
  return (
    <div className='am-wrapper'>
      <ChapterTitle number="01." name="À propos" />
      <div className="content-wrapper">
        <p>
        Développeur web passionné de 24 ans, originaire de Bayonne et récemment diplômé d'une formation Bac+2 via OpenClassrooms. Avec une solide maîtrise des technologies telles que JavaScript, React, Node.js et MongoDB, je vous propose des solutions web innovantes. Besoin d'aide ou de discuter d'un projet ? Retrouvez-moi sur mes réseaux sociaux. Merci de votre visite !
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
