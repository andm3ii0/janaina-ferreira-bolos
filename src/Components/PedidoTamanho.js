/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import ButtonContinue from './ButtonContinue';
import PedidoTitulo from './PedidoTitulo';
import './pedidoTamanho.css';

function PedidoTamanho() {
  const [tamanho, setTamanho] = useState({
    serve: {
      PP: 'Serve até 8 fatias',
      P: 'Serve até 18 fatias',
      M: 'Serve até 28 fatias',
      G: 'Serve até 48 fatias',
    },
    tamanhoA: {
      PP: ['8', 1],
      P: ['18', 2],
      M: ['28', +'3'],
      G: ['48', +'4'],
    },
    tamanhoB: {
      8: ['PP', 1],
      18: ['P', 2],
      28: ['M', +'3'],
      48: ['G', +'4'],
    },
    tamanhoC: {
      1: ['8', 'PP'],
      2: ['18', 'P'],
      3: ['28', 'M'],
      4: ['48', 'G'],
    },
  });
  const [tamanhoA, setTamanhoA] = useState('PP');
  const [tamanhoB, setTamanhoB] = useState('8');
  const [tamanhoC, setTamanhoC] = useState('1');

  const tamanhos = (num) => {
    if (num <= 8) {
      return 8;
    }
    if (num <= 18 && num > 8) {
      return 18;
    }
    if (num < 28 && num > 18) {
      return 28;
    }
    return 48;
  };

  console.log(tamanho.serve);

  return (
    <div className="pedido-tamanho">
      <PedidoTitulo
        page="Tamanho"
        tamanho={ setTamanho }
        description={ tamanho.tamanhoC[tamanhoC][1] }
      />
      <p className="pedido-tamanho-help">
        Aqui você pode escolher pelo tamanho, a quantidade de convidados ou pelo
        peso.
      </p>
      <div className="inputs-tamanho">
        <label htmlFor="tamanho" className="tamanho-input">
          Tamanho do bolo:
          {' '}
          <select
            className="input"
            value={ tamanhoA }
            name="tamanho"
            onChange={ ({ target }) => {
              setTamanhoA(target.value);
              setTamanhoB(tamanho.tamanhoA[target.value][0]);
              setTamanhoC(tamanho.tamanhoA[target.value][1]);
            } }
          >
            <option value="PP">PP</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
          </select>
          <p className="description">{tamanho.serve[tamanhoA]}</p>
        </label>
        <label htmlFor="pessoas" className="tamanho-input">
          Convidados:
          {' '}
          <input
            min="8"
            className="input"
            id="pessoas"
            name="pessoas"
            type="number"
            value={ tamanhoB }
            onChange={ ({ target }) => {
              console.log(tamanho.tamanhoB[tamanhos(parseInt(target.value, 10))]);
              setTamanhoA(
                tamanho.tamanhoB[tamanhos(parseInt(target.value, 10))][0],
              );
              setTamanhoB(target.value);
              setTamanhoC(tamanho.tamanhoB[tamanhos(parseInt(target.value, 10))][1]);
            } }
          />
        </label>
        <label htmlFor="peso" className="tamanho-input">
          Peso em kg:
          {' '}
          <input
            className="input"
            value={ tamanhoC }
            id="peso"
            name="peso"
            type="number"
            onChange={ ({ target }) => {
              if (target.value > 4) {
                setTamanhoA(tamanho.tamanhoC[4][1]);
                setTamanhoB(tamanho.tamanhoC[4][0]);
                setTamanhoC(target.value);
              } else {
                setTamanhoA(tamanho.tamanhoC[target.value][1]);
                setTamanhoB(parseInt(tamanho.tamanhoC[target.value][0], 10));
                setTamanhoC(target.value);
              }
            } }
          />
        </label>
      </div>
      <ButtonContinue />
    </div>
  );
}

export default PedidoTamanho;
