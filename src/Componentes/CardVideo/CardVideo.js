import { ContainerSection } from "./style";
import { ContainerImg } from "./style";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <ContainerSection className="box-pagina-principal" onClick={reproduzVideo}>
      <ContainerImg src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </ContainerSection>
    
  );
}

export default CardVideo;
