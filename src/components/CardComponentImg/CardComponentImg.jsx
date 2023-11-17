import React from 'react';
import styles from './CardComponentImg.module.css';

const CardComponentImg = () => {
  return (
    <div className={styles.cardContainer}>
      <h1>Transtornos comuns</h1>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <img src=".caminho/para/sua/imagem2.jpg" alt="Imagem 1" />
          <h2>Card 1</h2>
          <p>Conteúdo do Card 1...</p>
        </div>
        <div className={styles.card}>
          <img src="caminho/para/sua/imagem2.jpg" alt="Imagem 2" />
          <h2>Card 2</h2>
          <p>Conteúdo do Card 2...</p>
        </div>
        <div className={styles.card}>
          <img src="caminho/para/sua/imagem3.jpg" alt="Imagem 3" />
          <h2>Card 3</h2>
          <p>Conteúdo do Card 3...</p>
        </div>
        <div className={styles.card}>
          <img src="caminho/para/sua/imagem4.jpg" alt="Imagem 4" />
          <h2>Card 4</h2>
          <p>Conteúdo do Card 4...</p>
        </div>
        <div className={styles.card}>
          <img src="caminho/para/sua/imagem5.jpg" alt="Imagem 5" />
          <h2>Card 5</h2>
          <p>Conteúdo do Card 5...</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponentImg;
