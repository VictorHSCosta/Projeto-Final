"use client"

import { useRef } from "react";
import { Title } from "./_components/Title";
import styles from "~/styles/homepage.module.css"
import {Vantagem} from "./_components/vantagem"
import Localizacao from "~/app/_components/Localizacao"
import Header from "~/app/_components/Header"
import Footer from "~/app/_components/Footer"

import IconDinheiro from "~/app/_images/icon_dinheiro.svg"
import IconCartao from "~/app/_images/icon_cartao.svg"
import IconEstante from "~/app/_images/icon_estante.svg"

export default function Home() {
  const navReferences = {
    "vantagens": useRef<HTMLElement>(null),
    "sobre": useRef<HTMLElement>(null),
    "localizacao": useRef<HTMLElement>(null)
  }

  return (
    <>
      <Header {...navReferences}/>
        <section>
          <div >
            <Title />
          </div>
        </section>
        <section ref={navReferences.vantagens}>
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
        <section ref={navReferences.sobre}>sobre</section>
        <section ref={navReferences.localizacao}>
          <Localizacao />
        </section>
      <Footer {...navReferences}/>
    </>
  );
}
