import Seta from "~/app/_images/seta.svg"
import styles from "~/styles/vantagem.module.css"

type PropVantagem = {
    content: string;
    children: React.ReactNode;
}

export function Vantagem({content, children}: PropVantagem) {
    return (
        <div className={styles.vantagem}>
            {children}
            <h2>{content}</h2>
            <img className={styles.seta} src={Seta.src} alt="v"/>
        </div>
    )
}