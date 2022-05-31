import React from 'react';
import './Profile.scss';
import Avatar from '../../assets/avatar.png';
import SocialLinks from './SocialLinks';

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__data">
        <img
          className="profile__img"
          src={Avatar}
          alt="Vinicius Santos profile pic"
        />
        <div className="profile__info">
          <h1 className="profile__title">Vinicius Santos</h1>
          <p className="profile__description">Desenvolvedor Front-End</p>
          <SocialLinks />
        </div>
      </div>
      <p className="profile__about">
        Olá, me chamo Vinicius Santos, sou de Osasco - SP. Estudante de Análise
        e Desenvolvimento de Sistemas, desenvolvedor frontend curioso em
        crescimento contínuo e atualmente, estou em busca de recolocação no
        mercado de trabalho. As principais stacks que tenho estudado são: HTML,
        CSS, Javascript e React.Js .
      </p>
    </section>
  );
}
