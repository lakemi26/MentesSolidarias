import styles from './CollaboratorsComponent.module.css';

const CollaboratorsComponent = () => {
    return (
        <div className={styles.collaboratorsContainer}>
          <h2>Colaboradores</h2>
          <div className={styles.imagesContainer}>
            <a href="https://link-colaborador-1.com" target="_blank" rel="noopener noreferrer">
              <img src="/image1.jpg" alt="Colaborador 1" className={styles.image} />
            </a>
            <a href="https://link-colaborador-2.com" target="_blank" rel="noopener noreferrer">
              <img src="/image2.jpg" alt="Colaborador 2" className={styles.image} />
            </a>
            <a href="https://link-colaborador-3.com" target="_blank" rel="noopener noreferrer">
              <img src="/image3.jpg" alt="Colaborador 3" className={styles.image} />
            </a>
            <a href="https://link-colaborador-4.com" target="_blank" rel="noopener noreferrer">
              <img src="/image4.jpg" alt="Colaborador 4" className={styles.image} />
            </a>
          </div>
        </div>
      );
    };

export default CollaboratorsComponent;
