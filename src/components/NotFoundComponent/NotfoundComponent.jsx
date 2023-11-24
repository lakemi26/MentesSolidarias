import styles from './NotfoundComponent.module.css';

export default function NotFoundComponent(){
    return(
        <>
        <div className={styles.container}>
            <h1>404 </h1>
            <p>Parece que esta página não existe!</p>
            <img src="./img/NotFound.jpeg" alt="Imagem Not Found" />
        </div>
        </>
    )
}
