import {Vantagem} from "~/app/_components/Vantagem"
import styles from "~/styles/vantagens.module.css"

export default function() {
    return (
        <ul className={styles.vantagens}>
            <li>
              <Vantagem content="Excelente relação custo-benefício!">
                <img className={styles.icons_vantagens} src={"/images/icon_dinheiro.svg"}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem content="Livros em excelente estado!">
                <img className={styles.icons_vantagens} src={"/images/icon_livro.svg"}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem content="Coleção única, com unidades raras!">
                <img className={styles.icon_estante} src={"/images/icon_estante.svg"}/>
              </Vantagem>
            </li>
        </ul>
    )
}
