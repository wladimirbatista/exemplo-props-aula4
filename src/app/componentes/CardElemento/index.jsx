import Image from "next/image";
import estilos from "./CardElemento.module.css";

export default function CardElemento(props) {
  return (
    <div className={estilos.container}>
    {props.elemento === 'Água' ? (
      <>
        <p>Elemento: <span>{props.elemento}</span></p>
        <Image src={props.imgAgua} alt="Símbolo da Água" />
        <div>
          <p>{props.descricaoAgua}</p>
        </div>
      </>
    ) : (
      <>
        <p>Elemento: <span>{props.elemento}</span></p>
        <Image src={props.imgFogo} alt="Símbolo do Fogo" />
        <div>
          <p>{props.descricaoFogo}</p>
        </div>
      </>
    )}
    </div>
  );
}
