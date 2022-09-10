import React from "react";
import Context from "../Context/Context";
import Header from "./Header";

function Pedidos() {
  return (
    <Context.Consumer>
      {({pedidosList}) => {
        return (
          <div>
            <Header type="Pedidos" />
            <div>{pedidosList.map((pedido) => <div key={pedido.codigo}>
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
