import React from 'react';
import styles from './AncientCode.module.css';

const AncientCodeComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <img src="./img/Isa.jpg" alt="Isabelli" />
          <h2>RM552389</h2>
          <p>Isabelli Heloiza Ferreira Lima</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Ju.jpg" alt="Júlia" />
          <h2>RM98163</h2>
          <p>Júlia Martins Santana Figueiredo</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Nery.jpg" alt="Nery" />
          <h2>RM552292</h2>
          <p>Julia Nery <br/>Sinigalia</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Lari.jpg" alt="Larissa" />
          <h2>RM550562</h2>
          <p>Larissa Akemi <br/>Iwamoto</p>
        </div>
        <div className={styles.card}>
          <img src="./img/Vini.jpg" alt="Vinicius" />
          <h2>RM94679</h2>
          <p>Vinicius Becker <br/>Prediger</p>
        </div>
      </div>
    </div>
  );
};

export default AncientCodeComponent;
