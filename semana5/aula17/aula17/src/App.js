import React from "react";
import "./styles.css";
import calopsita from "./img/calopsita.png";
import maldivas from "./img/maldivas.jpg"
import tttunado from "./img/tttunado.png"
import programa from "./img/programa.jpg"
import cachorro from "./img/cachorro.png"
import gruta from "./img/gruta.jpg"
import baixados from "./img/baixados.jpg"
import baixados2 from "./img/baixados2.png"



export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube - A melhor busca de vídeo</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={calopsita} alt="calopsita" />
              <h4>Calopsita Cantando</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={maldivas} alt="Ilhas maldivas" />
              <h4>Ilhas Maldivas</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={baixados}  alt="Harry Potter turma" />
              <h4>Harry Potter</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={baixados2} alt="Labenu" />
              <h4>Labenu - Escola TOP</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={cachorro} alt="Cachorro" />
              <h4>Fofos e amigos</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={gruta} alt="Gruta" />
              <h4>Paraíso</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={programa} alt="Programação" />
              <h4>Programar é viver</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={tttunado} alt="TT tunado" />
              <h4>TT TUNADO</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>DEV THAYANE BITENCOURT - 2021</h4>
        </footer>
      </div>
    </div>
  );
}


