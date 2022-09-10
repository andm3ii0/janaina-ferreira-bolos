import React from "react";
import Header from "../Components/Header";

function HomeServer({ history }) {
  return (
    <div>
      <Header type="Gerenciador" />
      <button type="button" onClick={() => history.push("/pedido-server/pedidos")}>
        Pedidos
      </button>
      <button type="button" onClick={() => history.push("/pedido-server/finalizar")}>
        Finalizar pedido
      </button>
      <button type="button" onClick={() => history.push("/pedido-server/criar")}>
        Criar pedido
      </button>
    </div>
  );
}

export default HomeServer;
