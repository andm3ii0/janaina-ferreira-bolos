import React from "react";
import Context from "../Context/Context";
import { itensByCode } from "../data";
import Header from "./Header";
import "./finalizarPedido.css";
import PedidoTitulo from "./PedidoTitulo";

function FinalizarPedido() {
  const aplyButtonClick = (
    codigo,
    setTamanho,
    setSabor,
    codigoInvalido,
    setCondigoInvalido
  ) => {
    if (
      codigo.length !== 7 ||
      codigo[0] !== "T" ||
      isNaN(parseInt(codigo[1] + codigo[2])) ||
      codigo[3] + codigo[4] !== "MR" ||
      isNaN(parseInt(codigo[5] + codigo[6]))
    ) {
      setCondigoInvalido(true);
    } else {
      setCondigoInvalido(false);
      setTamanho(itensByCode.tamanho[codigo[1] + codigo[2]]);
      setSabor(itensByCode.sabor[codigo[5] + codigo[6]]);
    }
  };

  const concluirButtonClick = (codigo, nome, tamanho, sabor) => {
    console.log(localStorage.getItem("pedidos"));
    if (localStorage.getItem("pedidos") === null) {
      console.log("oi");
      localStorage.setItem(
        "pedidos",
        JSON.stringify([{ codigo, nome, tamanho, sabor }])
      );
    } else {
      console.log("oi2");
      localStorage.setItem(
        "pedidos",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("pedidos")),
          { codigo, nome, tamanho, sabor },
        ])
      );
    }
  };
  return (
    <Context.Consumer>
      {({
        codigoCliente: codigo,
        setCodigoClente: setCodigo,
        nome,
        setNome,
        tamanho,
        setTamanho,
        sabor,
        setSabor,
        codigoInvalido,
        setCondigoInvalido,
      }) => {
        return (
          <div>
            <Header type="Finalizar" />
            <div className="finalizar">
              <PedidoTitulo page="Finalizar Pedido" description="" />
              <form>
                <label htmlFor="codigo">
                  Codigo:
                  <div className="input-codigo">
                    <input
                      id="codigo"
                      type="text"
                      value={codigo}
                      onChange={({ target }) => setCodigo(target.value)}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        aplyButtonClick(
                          codigo,
                          setTamanho,
                          setSabor,
                          codigoInvalido,
                          setCondigoInvalido
                        )
                      }
                    >
                      Aplicar
                    </button>
                  </div>
                </label>
                {codigoInvalido && <p>Codigo Invaliedo!</p>}
                <label htmlFor="nome">
                  Nome:
                  <input
                    type="text"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                    id="nome"
                  />
                </label>
                <label htmlFor="tamanho">
                  Tamanho:
                  <input
                    type="text"
                    value={tamanho}
                    id="tamanho"
                    onChange={({ target }) => setTamanho(target.value)}
                  />
                </label>
                <label htmlFor="sabor">
                  Sabor:
                  <input
                    type="text"
                    value={sabor}
                    id="sabor"
                    onChange={({ target }) => setSabor(target.value)}
                  />
                </label>
                <button
                  type="button"
                  onClick={() =>
                    concluirButtonClick(codigo, nome, tamanho, sabor)
                  }
                >
                  Concluir
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default FinalizarPedido;
