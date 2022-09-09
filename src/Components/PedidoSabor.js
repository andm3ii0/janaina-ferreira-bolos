import React, { useState } from 'react';
import PedidoTitulo from './PedidoTitulo';
import sabores from '../data';
import ButtonContinue from './ButtonContinue';

function PedidoSabor() {
  const [sabor, setSabor] = useState('Chocolatudo');

  return (
    <div>
      <PedidoTitulo page="Sabor" description={ sabor } />
      <p className="pedido-tamanho-help">
        Aqui você escolhe o sabor da sua massa, e pode ver uma breve descrição,
        como por exemplo sabor da massa e recheio
      </p>
      <div>
        <label htmlFor="sabores">
          <select
            id="sabores"
            value={ sabor }
            onChange={ ({ target }) => setSabor(target.value) }
          >
            {Object.keys(sabores)
              .map((saborItem) => (
                <option key={ saborItem } value={ saborItem }>{saborItem}</option>))}
          </select>
        </label>
        <p>{sabores[sabor]}</p>
      </div>
      <ButtonContinue />
    </div>
  );
}

export default PedidoSabor;
