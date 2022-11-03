import React from "react";
import Header from "../Components/Header";
import "./nota.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// const doc = new jsPDF();
// doc.save("a4.pdf");

function Nota() {
  const printDocument = () => {
    const input = document.getElementById("to-print");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="gerar-nota">
      <Header type="Criar Recibo" />
      <div className='print'>
        <div id="to-print" className="pedido">
          <form>
            <div className="cliente nota titulo">
              <p>Informações do cliente</p>
              <div className="clinet-inputs inputs">
                <label htmlFor="nome">
                  Nome do cliente:
                  <input id="nome" type="text" />
                </label>
                <label htmlFor="endereco">
                  Endereço:
                  <input id="endereco" type="text" />
                </label>
              </div>
            </div>

            <div className="pedido nota titulo">
              <p>Informaçoes do pedido</p>

              <div className="section">
                <div className="pedido-inputs horario titulo">
                  <p>Data e hora da entrega:</p>
                  <div className="inputs horario-inputs">
                    <label className="data" htmlFor="data">
                      Data:
                      <input id="data" type="date" />
                    </label>
                    <label className="hora" htmlFor="hora">
                      Hora:
                      <input id="hora" type="time" />
                    </label>
                  </div>
                </div>

                <div className="pedido-inputs tamanho-sabor">
                  <div className="tamanho-sabor1 titulo destaque">
                    <p>Tamanho e Sabor - Bolo inferior:</p>

                    <div className="inputs tamanho-sabor-inputs">
                      <label className="tamanho" htmlFor="tamanho1">
                        Tamanho:
                        <input id="tamanho1" type="text" />
                      </label>
                      <label className="sabor" htmlFor="sabor1">
                        Sabor:
                        <input id="sabor1" type="text" />
                      </label>
                    </div>
                  </div>

                  <div className="tamanho-sabor1 titulo destaque">
                    <p>Tamanho e Sabor - Bolo superior:</p>
                    <div className="inputs tamanho-sabor-inputs">
                      <label className="tamanho" htmlFor="tamanho2">
                        Tamanho:
                        <input id="tamanho2" type="text" />
                      </label>
                      <label className="sabor" htmlFor="sabor2">
                        Sabor:
                        <input id="sabor2" type="text" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="inputs categoria">
                  <label className="topo" htmlFor="topo">
                    Topo:
                    <input id="topo" type="text" />
                  </label>
                  <label className="tema" htmlFor="tema">
                    Tema:
                    <input id="tema" type="text" />
                  </label>
                </div>

                <div className="inputs categoria">
                  <label className="nome1" htmlFor="nome1">
                    Nome no bolo:
                    <input id="nome1" type="text" />
                  </label>
                  <label className="idade" htmlFor="idade">
                    Idade:
                    <input id="idade" type="text" />
                  </label>
                </div>
              </div>
            </div>
            <div className="outo nota titulo">
              <p>Outras informações</p>
              <div className="outro-inputs inputs">
                <label htmlFor="detalhes">
                  Detalhamento do pedido:
                  <textarea
                    maxlength="500"
                    className="outro-input"
                    id="detalhes"
                  />
                </label>
                <label htmlFor="elementos">
                  Elementos:
                  <textarea
                    maxlength="500"
                    className="outro-input"
                    id="elementos"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
        <button onClick={printDocument}>Print</button>
      </div>
    </div>
  );
}

export default Nota;
