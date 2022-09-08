/* eslint-disable react/prop-types */
import React from 'react';
import './buttonContinue.css';

function ButtonContinue({ continueButtonClick }) {
  return (
    <button className="button-continue" type="button" onClick={ continueButtonClick }>
      Continuar
    </button>
  );
}

export default ButtonContinue;
