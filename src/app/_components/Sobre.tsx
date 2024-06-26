import styles from "~/styles/sobre.module.css"

export default ({title, children}: {title: string, children: React.ReactNode} ) => (
    <>
        <h2 className={styles.titulo}>{title}</h2>
        <div className={styles.descricao}>
            {children}
        </div>
    </>
)