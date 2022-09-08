/* eslint-disable react/prop-types */
import React from 'react';
import './header.css';
import Home from '../Images/Home.svg';

function Header({ history }) {
  const homeButtonClick = () => {
    history.push('/');
  };
  return (
    <div className="header">
      <button className="header-home-button" type="button" onClick={ homeButtonClick }>
        <img src={ Home } alt="Home" />
      </button>
      <p className="header-title">Pedido</p>
      <div className="espaco-vazio-header" />
    </div>
  );
}

export default Header;
