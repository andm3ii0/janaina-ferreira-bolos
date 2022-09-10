/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Context from './Context';
import { codigoObj } from '../data';

const copy = require('clipboard-copy');

export default function Provider({ children }) {
  const [typePage, setTypePage] = useState('Tamanho');
  const [codigo, setCodigo] = useState({});
  const codigoId = `T${codigoObj.tamanho[codigo.tamanho]}MR${codigoObj.sabor[codigo.sabor]}`

  const context = {
    typePage,
    setTypePage,
    copyLink: copy,
    codigo,
    setCodigo,
    codigoId,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
