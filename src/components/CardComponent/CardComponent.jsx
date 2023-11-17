import styles from './CardComponent.module.css';

const CardComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>Card 1</h2>
        <p>Conteúdo do Card 1...</p>
      </div>
      <div className={styles.card}>
        <h2>Card 2</h2>
        <p>Conteúdo do Card 2...</p>
      </div>
      <div className={styles.card}>
        <h2>Card 3</h2>
        <p>Conteúdo do Card 3...</p>
      </div>
    </div>
  );
};

export default CardComponent;