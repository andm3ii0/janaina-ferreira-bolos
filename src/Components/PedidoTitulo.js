/* eslint-disable react/prop-types */
import React from 'react';
import './pedidoTitulo.css';

function PedidoTitulo({ page, description }) {
  return (
    <div>
      <p className="pedido-titulo">
        {page}
        {': '}
        {description}
      </p>
    </div>
  );
}

export default PedidoTitulo;
