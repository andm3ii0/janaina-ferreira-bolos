import React from 'react';
import ButtonContinue from './ButtonContinue';

function Aviso() {
  return (
    <div>
      <div>
        Aqui você vai escolher o tamanho do seu bolo e o sabor, quando tiver
        finalizado você vai receber um código que deve ser mandado pra mim no
        whatsapp, para que possa finalizar o seu pedido e combinar outros
        detalhes!
      </div>
      <ButtonContinue continueButtonClick={ continueButtonClick } />
    </div>
  );
}

export default Aviso;
