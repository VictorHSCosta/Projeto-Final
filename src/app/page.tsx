"use client"

import { useRef } from "react";
import { Title } from "./_components/Title";
import styles from "~/styles/homepage.module.css"
import {Vantagem} from "./_components/vantagem"
import Sobre from "~/app/_components/Sobre"
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
        <section ref={navReferences.sobre}>
          <Sobre title="Sobre">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Egestas diam in arcu cursus euismod quis. Arcu bibendum at varius vel pharetra vel turpis nunc. Tortor at risus viverra adipiscing at in tellus integer. Ornare arcu odio ut sem nulla pharetra diam. Magna etiam tempor orci eu lobortis elementum nibh tellus. Massa placerat duis ultricies lacus sed. Eget nulla facilisi etiam dignissim diam quis enim.</p>
            <p>Scelerisque purus semper eget duis at tellus at urna. Tempus egestas sed sed risus pretium quam vulputate dignissim. Posuere lorem ipsum dolor sit. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. At quis risus sed vulputate odio ut. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Sapien pellentesque habitant morbi tristique senectus. Urna nunc id cursus metus.</p>
          </Sobre>
        </section>
        <section ref={navReferences.localizacao}>
          <Localizacao />
        </section>
      <Footer {...navReferences}/>
    </>
  );
}
