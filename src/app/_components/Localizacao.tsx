import S from "~/styles/localizacao.module.css"
import { useMemo } from "react"
import dynamic from "next/dynamic"

export default () => {
    const Map = useMemo(() => dynamic(
        () => import("~/app/_components/Map"),
        {
            loading: () => <p>Mapa carregando ...</p>,
            ssr: false
        }
    ), [])

    return (
    <section className={S.container}>
        <div className={S.titleContainer}>
            <h2>Localização privilegiada</h2>
            <p>Centro da cidade, próximo a estação de metro e shopping</p>
        </div>
        <Map className={S.map}/>
    </section> )
}