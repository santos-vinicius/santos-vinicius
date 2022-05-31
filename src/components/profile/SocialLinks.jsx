import React from 'react';
import './Profile.scss';
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Email from '../../assets/email.svg';
import Twitter from '../../assets/twitter.svg';

const SocialLinks = () => {
  return (
    <>
      <ul className="social">
        <li className="social__item">
          <img src={GitHub} alt="GitHub logo" />
        </li>
        <li className="social__item">
          <img src={Twitter} alt="Twitter logo" />
        </li>
        <li className="social__item">
          <img src={LinkedIn} alt="LinkedIn logo" />
        </li>
        <li className="social__item">
          <img src={Email} alt="Email icon" />
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
