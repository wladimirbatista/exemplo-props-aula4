import estilos from "./page.module.css";
import CardElemento from "./componentes/CardElemento";
import agua from "/public/agua.png";
import fogo from "/public/fogo.png";

export default function Home() {
  return (
    <main className={estilos.main}>
      <CardElemento 
        elemento={"Água"}
        imgAgua={agua}
        imgFogo={fogo}
        descricaoAgua={'A água é um elemento essencial à vida, sendo encontrada em grandes quantidades nos oceanos, rios e lagos.'}
        descricaoFogo={'O fogo é uma manifestação poderosa da energia transformadora na natureza, capaz de gerar calor e luz.'}
      />
    </main>
  );
}
