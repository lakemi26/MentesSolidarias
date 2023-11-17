import styles from './CollaboratorsComponent.module.css';

const CollaboratorsComponent = () => {
  return (
    <div className={styles.collaboratorsContainer}>
      <h2>Colaboradores</h2>
      <div className={styles.imagesContainer}>
        <img src="/image1.jpg" alt="Colaborador 1" className={styles.image} />
        <img src="/image2.jpg" alt="Colaborador 2" className={styles.image} />
        <img src="/image3.jpg" alt="Colaborador 3" className={styles.image} />
        <img src="/image4.jpg" alt="Colaborador 4" className={styles.image} />
      </div>
    </div>
  );
};
