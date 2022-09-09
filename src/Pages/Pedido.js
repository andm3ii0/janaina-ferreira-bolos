import React, { useContext } from 'react';
import Header from '../Components/Header';
import PedidoSabor from '../Components/PedidoSabor';
import PedidoTamanho from '../Components/PedidoTamanho';
import Context from '../Context/Context';

require('react-dom');

window.React2 = require('react');

console.log(window.React1 === window.React2);

function Pedido() {
  const { typePage } = useContext(Context);
  console.log(typePage);
  
  return (
    <div className="pedido-page-tamanho">
      <Header />
      {typePage === 'Sabor' && <PedidoSabor />}
      {typePage === 'Tamanho' && <PedidoTamanho />}
    </div>
  );
}

export default Pedido;
