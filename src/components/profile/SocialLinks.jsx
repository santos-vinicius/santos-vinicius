import React from 'react';
import style from './Profile.module.scss';
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Email from '../../assets/email.svg';
import Twitter from '../../assets/twitter.svg';

const SocialLinks = () => {
  return (
    <>
      <ul className={style.social}>
        <li className={style.social__item}>
          <a
            href="https://github.com/santos-vinicius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub logo" />
          </a>
        </li>
        <li className={style.social__item}>
          <a
            href="https://twitter.com/santosviniciusv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter logo" />
          </a>
        </li>
        <li className={style.social__item}>
          <a
            href="https://www.linkedin.com/in/santos-vinicius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn logo" />
          </a>
        </li>
        <li className={style.social__item}>
          <a
            href="mailto:santosvinicius.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Email} alt="Email icon" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
