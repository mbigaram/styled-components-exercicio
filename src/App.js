import styled from "styled-components"
import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo";
import "./styles.css";

const ContainerHeader = styled.header`
  background-color: black;
  color: white;
  margin: 1rem;
`
const ContainerMain = styled.main`
  background-color: grey;
`

const ContainerNav = styled.nav`
  background-color: black;
  color: white;
`

export default function App() {
  const card1 = {
    titulo: "Título do vídeo1",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };
  const card2 = {
    titulo: "Título do vídeo2",
    imagemDoVideo: "https://picsum.photos/400/400?a=2",
    textoAlternativo: "descrição da imagem"
  };
  const card3 = {
    titulo: "Título do vídeo3",
    imagemDoVideo: "https://picsum.photos/400/400?a=3",
    textoAlternativo: "descrição da imagem"
  };
  const card4 = {
    titulo: "Título do vídeo4",
    imagemDoVideo: "https://picsum.photos/400/400?a=4",
    textoAlternativo: "descrição da imagem"
  };
  const card5 = {
    titulo: "Título do vídeo5",
    imagemDoVideo: "https://picsum.photos/400/400?a=5",
    textoAlternativo: "descrição da imagem"
  };
  const card6 = {
    titulo: "Título do vídeo6",
    imagemDoVideo: "https://picsum.photos/400/400?a=6",
    textoAlternativo: "descrição da imagem"
  };
  const card7 = {
    titulo: "Título do vídeo7",
    imagemDoVideo: "https://picsum.photos/400/400?a=7",
    textoAlternativo: "descrição da imagem"
  };
  const card8 = {
    titulo: "Título do vídeo8",
    imagemDoVideo: "https://picsum.photos/400/400?a=8",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
        <ContainerHeader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </ContainerHeader>

        <ContainerMain>
          <ContainerNav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </ContainerNav>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card2.imagemDoVideo}
              titulo={card2.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card3.imagemDoVideo}
              titulo={card3.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card4.imagemDoVideo}
              titulo={card4.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card5.imagemDoVideo}
              titulo={card5.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card6.imagemDoVideo}
              titulo={card6.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card7.imagemDoVideo}
              titulo={card7.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
            <CardVideo
              image1={card8.imagemDoVideo}
              titulo={card8.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </ContainerMain>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
