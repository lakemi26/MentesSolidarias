import React from 'react';
import styles from './CardLogin.module.css';

const CardLogin = () => {
  return (
    <div className={styles.cardContainer}>
      <h1>Login</h1>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <h2>Pacientes</h2>
          
          <p>Conteúdo do Card 1...</p>
        </div>
        <div className={styles.card}>
          <img src="caminho/para/sua/imagem2.jpg" alt="Imagem 2" />
          <h2>Psiquiatras</h2>
          <p>Conteúdo do Card 2...</p>
        </div>
        <div className={styles.card}>
          <img src="caminho/para/sua/imagem3.jpg" alt="Imagem 3" />
          <h2>Psicólogos</h2>
          <p>Conteúdo do Card 3...</p>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
