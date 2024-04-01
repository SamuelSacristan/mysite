import React from 'react';
import './FixedMail.scss';

const FixedMail = () => {
  const email = 's.sacristan@hotmail.com';
  const mailtoLink = `mailto:${email}`;

  return (
    <div className="fixed-mail">
      <a href={mailtoLink}>{email}</a>
    </div>
  );
};

export default FixedMail;
