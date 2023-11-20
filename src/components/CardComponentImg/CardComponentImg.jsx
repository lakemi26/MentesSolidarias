import React from 'react';
import styles from './CardComponentImg.module.css';

const CardComponentImg = () => {
  return (
    <div className={styles.cardContainer}>
      <h1>Transtornos comuns</h1>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <img src="./img/Teste2.png" alt="Imagem 1" />
          <h2>Card 1</h2>
          <p>Conteúdo do Card 1...</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Teste2.png" alt="Imagem 2" />
          <h2>Card 2</h2>
          <p>Conteúdo do Card 2...</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Teste2.png" alt="Imagem 3" />
          <h2>Card 3</h2>
          <p>Conteúdo do Card 3...</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Teste2.png" alt="Imagem 4" />
          <h2>Card 4</h2>
          <p>Conteúdo do Card 4...</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Teste2.png" alt="Imagem 5" />
          <h2>Card 5</h2>
          <p>Conteúdo do Card 5...</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponentImg;
