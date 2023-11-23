import React from 'react';
import styles from './CardComponentImg.module.css';

const CardComponentImg = () => {
  return (
    <div className={styles.cardContainer}>
      <h1>Transtornos comuns</h1>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <img src="./img/ansiedade.png" alt="Ansiedade" />
          <h2>Ansiedade</h2>
          <p>Indivíduos com transtorno de ansiedade experimentam preocupações intensas e constantes,
             muitas vezes acompanhadas por sintomas físicos como palpitações, sudorese e tensão muscular.</p>
        </div>
        <div className={styles.card}>
          <img src="./img/depressao.png" alt="Depressão" />
          <h2>Depressão</h2>
          <p>A depressão é um transtorno do humor caracterizado por sentimentos persistentes de tristeza, desesperança e falta de interesse em atividades.
          </p>
        </div>
        <div className={styles.card}>
          <img src="./img/bipolaridade.png" alt="Bipolaridade" />
          <h2>Bipolaridade</h2>
          <p>O transtorno bipolar é uma condição que envolve oscilações extremas de humor, 
            indo de episódios de euforia (mania) a períodos de intensa tristeza (depressão). </p>
        </div>
        <div className={styles.card}>
          <img src="./img/sindromedopanico.png" alt="Pânico" />
          <h2>Pânico</h2>
          <p>A síndrome do pânico é um transtorno de ansiedade que se manifesta através de ataques de pânico recorrentes e imprevisíveis. 
          </p>
        </div>
        <div className={styles.card}>
          <img src="./img/tdah.png" alt="TDAH" />
          <h2>TDAH</h2>
          <p>O TDAH é um transtorno neurobiológico que afeta crianças e adultos, interferindo na capacidade de manter a atenção, controlar impulsos e regular a atividade motora. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponentImg;
