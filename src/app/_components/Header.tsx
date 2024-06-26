import { RefObject } from "react"
import S from "~/styles/header.module.css"

export type ref2navbar = {
    vantagens: RefObject<HTMLElement>,
    sobre: RefObject<HTMLElement>,
    localizacao: RefObject<HTMLElement>
}

export function scrollTo(ref: RefObject<HTMLElement>): void{
    ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    })
}

export default (linksRef: ref2navbar) => (
    <header className={S["header"]}>
        <div className={S["logo-container"]}>
            <img src={"/images/logo.svg"} alt="logo (livro aberto com página amarelo claro)" />
            <p>Sebinho</p>
        </div>
        <input type="checkbox" id={S["menu-toggle"]} style={{display: "none"}}/>
        <nav className={S["nav-bar"]}>
            <ul>
                <li><a onClick={() => scrollTo(linksRef.vantagens)}>Vantagens</a></li>
                <li><a onClick={() => scrollTo(linksRef.sobre)}>Sobre</a></li>
                <li><a onClick={() => scrollTo(linksRef.localizacao)}>Localização</a></li>
                <li><a className={S.btn}>Contato</a></li>
            </ul>
        </nav>
        <label htmlFor={S["menu-toggle"]} className={S["menu-container"]}>
            <div className={S["menu-icon-close"]}>
                <span></span>
                <span></span>
            </div>
            <div className={S["menu-icon-burger"]}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </label>
    </header>
)