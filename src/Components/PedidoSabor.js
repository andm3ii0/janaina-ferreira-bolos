import React, { useContext, useState } from 'react';
import PedidoTitulo from './PedidoTitulo';
import sabores from '../data';
import ButtonContinue from './ButtonContinue';
import Context from '../Context/Context';
import './pedidoSabor.css';

function PedidoSabor() {
  const [sabor, setSabor] = useState('Chocolatudo');
  const { setTypePage } = useContext(Context);

  return (
    <div className="pedido-sabor">
      <PedidoTitulo page="Sabor" description={ sabor } />
      <p className="pedido-sabor-help">
        Aqui você escolhe o sabor da sua massa, e pode ver uma breve descrição,
        como por exemplo sabor da massa e recheio
      </p>
      <div className="inputs-sabor">
        <label htmlFor="sabores"
          className="sabor-input">
          Sabor:
          <select
            className="input"
            id="sabores"
            value={ sabor }
            onChange={ ({ target }) => setSabor(target.value) }
          >
            {Object.keys(sabores)
              .map((saborItem) => (
                <option key={ saborItem } value={ saborItem }>{saborItem}</option>))}
          </select>
        </label>
        <div className="label">
          Descrição:
          <p className="input">{sabores[sabor]}</p>
        </div>
        
      </div>
      <ButtonContinue continueButtonClick={ () => setTypePage('Finalizacso') }/>
    </div>
  );
}

export default PedidoSabor;
