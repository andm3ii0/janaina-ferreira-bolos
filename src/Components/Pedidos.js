import React from "react";
import Context from "../Context/Context";
import Header from "./Header";
import './pedidos.css';

function Pedidos() {
  return (
    <Context.Consumer>
      {({pedidosList}) => {
        return (
          <div className="pedidos">
            <Header type="Pedidos" />
            <div className="pedidos-card">{pedidosList.map((pedido) => <div className="pedido-card" key={pedido.codigo}>
              <p>Código {pedido.codigo}</p>
              <p>Nome: {pedido.nome}</p>
              <p>Tamanho: {pedido.tamanho}</p>
              <p>Sabor: {pedido.sabor}</p>
            </div>)}</div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Pedidos;
