import React from 'react';
import style from './Profile.module.scss';
import Avatar from '../../assets/avatar.png';
import SocialLinks from './SocialLinks';

export default function Profile() {
  return (
    <section className={style.profile}>
      <div className={style.profile__data}>
        <img
          className={style.profile__img}
          src={Avatar}
          alt="Vinicius Santos profile pic"
        />
        <div className={style.profile__info}>
          <h1 className={style.profile__title}>Vinicius Santos</h1>
          <p className={style.profile__description}>Desenvolvedor Front-End</p>
          <SocialLinks />
        </div>
      </div>
      <p className={style.profile__about}>
        Olá, me chamo Vinicius Santos, sou de Osasco - SP. Estudante de Análise
        e Desenvolvimento de Sistemas, desenvolvedor frontend curioso em
        crescimento contínuo e atualmente, estou em busca de recolocação no
        mercado de trabalho. As principais stacks que tenho estudado são: HTML,
        CSS, Javascript e React.Js .
      </p>
    </section>
  );
}
