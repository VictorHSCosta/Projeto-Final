import {Vantagem} from "~/app/_components/Vantagem"
import styles from "~/styles/vantagens.module.css"

export default function() {
    return (
        <ul className={styles.vantagens}>
            <li>
              <Vantagem content="Livros a Preço de Banana :D">
                <img className={styles.icons_vantagens} src={"/images/icon_cartao.svg"}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem content="Aceitamos Fiado!">
                <img className={styles.icons_vantagens} src={"/images/icon_cartao.svg"}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem content="Acabou a criatividade :(">
                <img className={styles.icon_estante} src={"/images/icon_estante.svg"}/>
              </Vantagem>
            </li>
        </ul>
    )
}
