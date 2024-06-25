import Style  from "src/styles/Footer.module.css";
import facebook from "~/app/_images/facebook.png";
import linkedin from "~/app/_images/likedin.png";
import youtube from "~/app/_images/youtube.png";
import instagram from "~/app/_images/Instagram.png";

export function Footer() {
  return (
    <footer className={Style.footer}>
        <div className={Style.divSebinho}>
            <h3 className={Style.h3}>Sebinho - 2024</h3>
        </div>
        <div className= {Style.linksTexto}>
            <a className = {Style.a}  href="##">Vantagens</a>
            <a className = {Style.a}  href="##">Sobre</a>
            <a className = {Style.a}  href="##">Localização</a>
            <a className = {Style.a}  href="##">Area funcionarios</a>
        </div>
        <div  className= {Style.divLinks}>
            <a href="https://www.facebook.com/" target="_blank"><img className = {Style.aImg} src= {facebook.src} alt="" /></a>
            <a href="https://www.linkedin.com/" target="_blank"><img className = {Style.aImg} src= {linkedin.src} alt="" /></a>
            <a href="https://www.youtube.com/" target="_blank"><img className = {Style.aImg} src= {youtube.src} alt="" /></a>
            <a href="https://www.instagram.com/" target="_blank"><img className = {Style.aImg} src= {instagram.src} alt="" /></a>
        </div>
    </footer>
  );
}