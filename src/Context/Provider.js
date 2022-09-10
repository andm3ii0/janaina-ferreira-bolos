/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Context from "./Context";
import { codigoObj } from "../data";

const copy = require("clipboard-copy");

export default function Provider({ children }) {
  const [typePage, setTypePage] = useState("Tamanho");
  const [codigo, setCodigo] = useState({});
  const [codigoCliente, setCodigoClente] = useState("");
  const [codigoInvalido, setCondigoInvalido] = useState(false);
  const [nome, setNome] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [sabor, setSabor] = useState("");
  const [pedidosList, setPedidosList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("pedidos") !== null) {
      setPedidosList(JSON.parse(localStorage.getItem("pedidos")));
    }
  }, []);

  const codigoId = `T${codigoObj.tamanho[codigo.tamanho]}MR${
    codigoObj.sabor[codigo.sabor]
  }`;

  const context = {
    typePage,
    setTypePage,
    copyLink: copy,
    codigo,
    setCodigo,
    codigoId,
    codigoCliente,
    setCodigoClente,
    codigoInvalido,
    setCondigoInvalido,
    nome,
    setNome,
    tamanho,
    setTamanho,
    sabor,
    setSabor,
    pedidosList,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
