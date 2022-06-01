import React from 'react';
import style from '../buttons/Buttons.module.scss';

const ResumeButton = () => {
  return (
    <>
      <a
        href="https://raw.githubusercontent.com/santos-vinicius/santos-vinicius/wip/src/assets/cv.pdf"
        className={style.btn__resume}
        target="_blank"
        rel="noreferrer"
      >
        Download Currículo
      </a>
    </>
  );
};

export default ResumeButton;
