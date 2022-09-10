import React, { useContext, useState } from "react";
import WhatsScreen from "./WhatsScreem";
import "./pedidoCodigo.css";
import copy from "../Images/copy.svg";
import Context from "../Context/Context";

function PedidoCodigo() {
  const [copied, setCopied] = useState(false);
  const { copyLink, codigo, codigoId } = useContext(Context);
  return (
    <div className="pedido-codigo">
      <div className="codigo-content">
        Seu código:
        <div className="codigo">
          <div className="img" />
          {copied
            ? <p>Copiado!</p>
            : <p>{codigoId}</p>}
          <img
            onClick={() => {
              copyLink(codigo);
              setCopied(true);
              setTimeout(() => setCopied(false), +"3000");
            }}
            src={copy}
            alt="copy"
          />
        </div>
      </div>
      <p className="pedido-codigo-help">
        {
          "Você pode copiar o código, ou clicar em enviar para ser redirecionado(a) para o meu perfil: "
        }
      </p>
      <WhatsScreen />
    </div>
  );
}

export default PedidoCodigo;
