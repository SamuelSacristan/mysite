import React from 'react';
import './ChapterTitle.scss';

const ChapterTitle = ({ number, name }) => {
  return (
    <div className="chapter-title">
      <div className="number">{number}</div>
      <h2 className="name">{name}</h2>
    </div>
  );
};

export default ChapterTitle;
