/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Context from './Context';

const copy = require('clipboard-copy');

export default function Provider({ children }) {
  const [typePage, setTypePage] = useState('Tamanho');

  const context = {
    typePage,
    setTypePage,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
