import styles from './CollaboratorsComponent.module.css';

const CollaboratorsComponent = () => {
    return (
        <div className={styles.collaboratorsContainer}>
          <h1>Colaboradores</h1>
          <div className={styles.imagesContainer}>
            <a href="/AncientCode" target="_blank" rel="noopener noreferrer">
              <img src="./img/ancientcode.png" alt="AncientCode" className={styles.image} />
            </a>
            <a href="https://www.fiap.com.br/" target="_blank" rel="noopener noreferrer">
              <img src="./img/fiap.png" alt="Fiap" className={styles.image} />
            </a>
            <a href="https://www.hapvida.com.br/site/" target="_blank" rel="noopener noreferrer">
              <img src="./img/hapvida.png" alt="Hapvida" className={styles.image} />
            </a>
            <a href="https://www.gndi.com.br/" target="_blank" rel="noopener noreferrer">
              <img src="./img/notredame.png" alt="Notredame" className={styles.image} />
            </a>
          </div>
        </div>
      );
    };

export default CollaboratorsComponent;
