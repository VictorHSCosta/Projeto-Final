import { Title } from "./_components/Title"
import styles from "~/styles/homepage.module.css"
import {Vantagem} from "./_components/vantagem"
import Localizacao from "~/app/_components/Localizacao"
import Header from "~/app/_components/Header"
import Footer from "~/app/_components/Footer"

import IconDinheiro from "~/app/_images/icon_dinheiro.svg"
import IconCartao from "~/app/_images/icon_cartao.svg"
import IconEstante from "~/app/_images/icon_estante.svg"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div >
            <Title />
          </div>
        </section>
        <section>
          <ul className={styles.vantagens}>
            <li>
              <Vantagem content="Livros a Preço de Banana :D">
                <img className={styles.icons_vantagens} src={IconDinheiro.src}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem content="Aceitamos Fiado!">
                <img className={styles.icons_vantagens} src={IconCartao.src}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem content="Acabou a criatividade :(">
                <img className={styles.icon_estante} src={IconEstante.src}/>
              </Vantagem>
            </li>
          </ul>
        </section>
        <section>sobre</section>
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
