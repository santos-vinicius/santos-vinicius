import React from 'react';
import style from './Buttons.module.scss';

const ContactButton = () => {
  return (
    <>
      <a
        href="mailto:santosvinicius.dev@gmail.com"
        className={style.btn__contact}
      >
        Entre em contato
      </a>
    </>
  );
};

export default ContactButton;
