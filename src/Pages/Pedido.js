import React from "react";
import Header from "../Components/Header";
import PedidoSabor from "../Components/PedidoSabor";
import PedidoTamanho from "../Components/PedidoTamanho";
import Context from "../Context/Context";

function Pedido() {
  return (
    <div className="pedido-page-tamanho">
      <Header />
      <Context.Consumer>
        {(value) => (
          <div>
            {value.typePage === "Sabor" && <PedidoSabor />}
            {value.typePage === "Tamanho" && <PedidoTamanho />}
          </div>
        )}
      </Context.Consumer>
    </div>
  );
}

export default Pedido;
