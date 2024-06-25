import {Vantagem} from "~/app/_components/Vantagem"
import styles from "~/styles/vantagens.module.css"

export default function() {
    return (
        <ul className={styles.vantagens}>
            <li>
              <Vantagem title="Excelente relação custo-benefício!" content="Comprar livros com a gente é uma escolha inteligente e econômica, pois nossos livros usados são mais acessíveis que os novos, assim, você pode ampliar sua coleção literária gastando menos. Além disso, optar por livros de segunda mão é uma atitude sustentável, que contribui para a redução de desperdício e promove a reciclagem de recursos. Ao adquirir livros usados, você está não só economizando dinheiro, mas também ajudando a preservar o meio ambiente.">
                <img className={styles.icons_vantagens} src={"/images/icon_dinheiro.svg"}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem title="Livros em excelente estado!" content="Nós garantimos a qualidade dos livros, oferecendo produtos em boas condições e assegurando que você esteja adquirindo um livro que ainda pode proporcionar muitas horas de lazer. Nossos livros podem oferecer uma experiência única e enriquecedora, já que alguns dos nossos livros usados carregam consigo uma história própria, com dedicatórias antigas ou notas nas margens, que adicionam um toque pessoal e nostálgico à sua leitura.">
                <img className={styles.icons_vantagens} src={"/images/icon_livro.svg"}/>
              </Vantagem>
            </li>
            <li>
              <Vantagem title="Coleção única, com unidades raras!" content="Aqui, você pode encontrar uma seleção única de livros, incluindo edições esgotadas, raras e clássicos difíceis de encontrar. Por isso, explorar nosso sebo é uma verdadeira aventura literária, que frequentemente leva a descobertas surpreendentes, desde autores desconhecidos até gêneros que você talvez não considerasse inicialmente. Oferecemos, também, recomendações personalizadas e atendimento especializado, ajudando você a encontrar exatamente o que procura e até sugerindo novos títulos que podem ser do seu interesse.">
                <img className={styles.icon_estante} src={"/images/icon_estante.svg"}/>
              </Vantagem>
            </li>
        </ul>
    )
}
