"use client"

import { useRef } from "react"
import { Title } from "./_components/Title"
import Vantagens from "~/app/_components/SecaoVantagens"
import Sobre from "~/app/_components/Sobre"
import Localizacao from "~/app/_components/Localizacao"
import Header from "~/app/_components/Header"
import Footer from "~/app/_components/Footer"

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
        <Title />
      </section>
      <section ref={navReferences.vantagens}>
        <Vantagens />
      </section>
      <section ref={navReferences.sobre}>
        <Sobre title="Sobre">
          <p>Nós somos uma livraria que atende dos mais diversos tipos de leitores que existem. Somos donos de um amplo repertório de livros internacionais e nacionais, os quais espalham emoções e conhecimento que prendem toda sua atenção. Nossa forma de reciclagem dos livros, realizada pela venda dos exemplares para nossa empresa, agrega não somente para quem quer se desfazer do escrito, mas para aqueles que anseiam por aventuras novas e um uma sede por intelectualidade. Estamos te esperando aqui no nosso endereço, para que possa adquirir a sua mais nova obra, e desfrutar do prazer de ler e vivenciar novas experiências.</p>
        </Sobre>
      </section>
      <section ref={navReferences.localizacao}>
        <Localizacao />
      </section>
      <Footer {...navReferences}/>
    </>
  )
}