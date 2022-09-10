import React from "react";
import Header from "../Components/Header";
import './homeServer.css';

function HomeServer({ history }) {
  return (
    <div>
      <Header type="Gerenciador" />
      <div className="manager">
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
    </div>
  );
}

export default HomeServer;
