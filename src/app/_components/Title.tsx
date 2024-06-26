import Style  from "src/styles/Title.module.css";

export function Title() {
  return (
    <div className= {Style.div}>
      <h1 className= {Style.h1}>Comprar, vender ou trocar livro? Vem pro Sebinho</h1>
      <p className= {Style.p}>Encontra de livros raros até novos lançamento e best-sellers</p>
      <img className={Style.img} src={"/images/imagem de inicio.png"}/>
    </div>
  );
}