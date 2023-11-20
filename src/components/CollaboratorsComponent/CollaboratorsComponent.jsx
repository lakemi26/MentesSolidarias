import styles from './CollaboratorsComponent.module.css';

const CollaboratorsComponent = () => {
    return (
        <div className={styles.collaboratorsContainer}>
          <h2>Colaboradores</h2>
          <div className={styles.imagesContainer}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="./img/Teste2.png" alt="Colaborador 1" className={styles.image} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="./img/Teste2.png" alt="Colaborador 2" className={styles.image} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="./img/Teste2.png" alt="Colaborador 3" className={styles.image} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="./img/Teste2.png" alt="Colaborador 4" className={styles.image} />
            </a>
          </div>
        </div>
      );
    };

export default CollaboratorsComponent;
