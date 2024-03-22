import React from 'react';
import './ChapterTitle.scss';

const ChapterTitle = ({ number, name }) => {
  return (
    <div className="chapter-block">
      <div className="number">{number}</div>
      <h2 className="name">{name}</h2>
      <div className="line"></div>
    </div>
  );
};

export default ChapterTitle;
