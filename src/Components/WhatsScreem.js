import React, { useContext } from "react";
import perfil from "../Images/foto perfil.jpg";
import send from "../Images/send.svg";
import clip from "../Images/clip.svg";
import emoji from "../Images/emoji.svg";
import "./whatsScreen.css";
import Context from "../Context/Context";
import { Redirect } from "react-router-dom";

function WhatsScreen() {
  const { codigoId } = useContext(Context);
  let redirect = false;
  const link = `https://api.whatsapp.com/send?phone=5581979121347&text=Meu código é: ${codigoId}`;
  if (redirect) {
    return <Redirect to={link} />;
  }
  return (
    <div className="whats-screen">
      <div className="whats-header">
        <img className="whats-header-perfil" src={perfil} alt="perfil" />
        <p className="whats-header-nome">Janaina Ferreira Bolos</p>
      </div>
      <div className="whats-content">
        <div className="whats-content-msg">
          <p className="whats-content-msg-text">
            Me manda o código do teu pedido.
          </p>
        </div>
      </div>
      <div className="whats-footer">
        <img className="whats-footer-img" src={emoji} alt="emoji" />
        <img className="whats-footer-img" src={clip} alt="clip" />
        <div className="whats-footer-code">{`Meu código é: ${codigoId}`}</div>
        <button
          type="button"
        >
          <a href={ link }>
            <img className="whats-footer-img" src={send} alt="send" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default WhatsScreen;
