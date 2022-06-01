import React from 'react';
import style from './Buttons.module.scss';
import ContactButton from './ContactButton';
import ResumeButton from './ResumeButton';

const Buttons = () => {
  return (
    <div className={style.btn}>
      <ResumeButton className={style.btn__resume} />
      <ContactButton />
    </div>
  );
};

export default Buttons;
