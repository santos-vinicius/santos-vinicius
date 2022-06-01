import React from 'react';
import style from '../buttons/Buttons.module.scss';

const ResumeButton = () => {
  return (
    <>
      <a href="./assets/cv.pdf" className={style.btn__resume}>
        Download Currículo
      </a>
    </>
  );
};

export default ResumeButton;
