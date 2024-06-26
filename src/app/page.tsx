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
            <p>"Nós somos uma livraria que atende dos mais diversos tipos de leitores que existem. Somos donos de um amplo repertório de livros internacionais e nacionais, os quais espalham emoções e conhecimento que prendem toda sua atenção. Nossa forma de reciclagem dos livros, realizada pela venda dos exemplares para nossa empresa, agrega não somente para quem quer se desfazer do escrito, mas para aqueles que anseiam por aventuras novas e um uma sede por intelectualidade. Estamos te esperando aqui no nosso endereço, para que possa adquirir a sua mais nova obra, e desfrutar do prazer de ler e vivenciar novas experiências."</p>
          </Sobre>
        </section>
        <section ref={navReferences.localizacao}>
          <Localizacao />
        </section>
      <Footer {...navReferences}/>
    </>
  );
}
