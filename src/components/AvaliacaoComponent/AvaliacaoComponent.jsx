import styles from './AvaliacaoComponent.module.css'

function AvaliacaoComponent() {
  return (
    <div className={styles.container}>
        <h1>Veja experiências dos nossos pacientes</h1>
        <div className={styles.imageContainer}>
        <img src="./img/Avaliacao1.jpeg" alt="Avaliação 1" />
        </div>
        <div className={styles.imageContainer}>
            <img src="./img/Avaliacao2.jpeg" alt="Avaliação 2" />
        </div>
        <div className={styles.imageContainer}>
            <img src="./img/Avaliacao3.jpeg" alt="Avaliação 3" />
        </div>
        <div className={styles.imageContainer}>
            <img src="./img/Avaliacao4.jpeg" alt="Avaliação 4" />
        </div>
        <div className={styles.imageContainer}>
        <img src="./img/Avaliacao5.jpeg" alt="Avaliação 5" />
        </div>
        <div className={styles.imageContainer}>
            <img src="./img/Avaliacao6.jpeg" alt="Avaliação 6" />
        </div>
    </div>
    
  );
}

export default AvaliacaoComponent;
