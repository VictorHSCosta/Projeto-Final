import S from "~/styles/header.module.css"

export default () => { return (
    <header className={S["header"]}>
        <div className={S["logo-container"]}>
            <img src={"/images/logo.svg"} alt="logo (livro aberto com página amarelo claro)"/>
            <p>Sebinho</p>
        </div>
        <nav className={S["nav-bar"]}>
            <ul>
                <li><a href="">Vantagens</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Localização</a></li>
                <li><a className={S.btn} href="">Contato</a></li>
            </ul>
        </nav>
        <label htmlFor={S["menu-toggle"]} className={S["menu-container"]}>
            <input type="checkbox" id={S["menu-toggle"]} style={{display: "none"}}/>
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
)}