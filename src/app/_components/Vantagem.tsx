import styles from "~/styles/vantagem.module.css"
import {useState} from "react"

type PropVantagem = {
    title: string;
    content: string;
    children: React.ReactNode;
}

export function Vantagem({title, content, children}: PropVantagem) {
    const [flag, setFlag] = useState(false);

    function handleClick() {
        setFlag(!flag);
    }

    return (
        <div className={styles.vantagem}>
            <div className={styles.vantagem_header} onClick={handleClick}>
                {children}
                <h2>{title}</h2>
                <img className={styles.seta} src={"/images/seta.svg"} alt="seta" style={flag ? {transform: "rotate(.5turn)"} : undefined}/>
            </div>
            <div className={styles.vantagem_content}>
                {flag && <p>{content}</p>}
            </div>
        </div>

    )
}