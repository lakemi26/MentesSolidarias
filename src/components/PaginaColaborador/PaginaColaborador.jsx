'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from './PaginaColaborador.module.css';

const PaginaColaborador = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./img/ColaboradorPage.jpeg" alt="Imagem Colaborador" />
      </div>
      <div className={styles.bigCard}>
        <h2>Seja bem-vindo, Colaborador</h2>

        <div className={styles.smallCardsContainer}>
          <div className={styles.smallCard}>
            <h3>Agenda</h3>
            <p>Nos informe qual o melhor dia da semana e horário é melhor para você</p>
            <br />
            <div className={styles.botao}>
              <Link href="/AgendaColaborador">Clique aqui!</Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Prontuário</h3>
            <p>Preencha o prontuário da consulta</p>
            <br />
            <div className={styles.botao}>
              <Link href="/Prontuario">Clique aqui!</Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Receitas</h3>
            <p>Faça aqui uma receita virtual para seus pacientes</p>
            <br />
            <div className={styles.botao}>
              <Link href="/Receita">Clique aqui!</Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Próxima consulta</h3>
            <p>A sua próxima consulta </p>
            <br />
            <div className={styles.botao}>
              <Link href="#" onClick={handlePopup}>
                Clique aqui!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up para informar sobre problemas no Google Meet */}
      {showPopup && (
        <div className={styles.popup}>
          <p>O Google Meet está enfrentando problemas no momento. Tente novamente mais tarde.</p>
          <button onClick={() => setShowPopup(false)}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default PaginaColaborador;
