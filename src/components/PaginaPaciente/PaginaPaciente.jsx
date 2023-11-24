'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from './PaginaPaciente.module.css';

const PaginaPaciente = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };
  return (
<div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="./img/PacientePage.jpeg" alt="Imagem Colaborador" />
        </div>
      <div className={styles.bigCard}>
        <h2>Seja bem vindo</h2>

        <div className={styles.smallCardsContainer}>
          <div className={styles.smallCard}>
            <h3>Agenda</h3>
            <p>Nos informe qual o melhor dia da semana e horário é melhor para você.</p>
            <br />
            <div className={styles.botao}>
            <Link href="/AgendaPaciente">
                Clique aqui!
            </Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Avalie a sua consulta</h3>
            <p>Conte para nós como foi a sua experiência. </p>
            <br />
            <div className={styles.botao}>
            <Link href="/Avaliacao">
                Clique aqui!
            </Link>
            </div>
          </div>


          <div className={styles.smallCard}>
            <h3>Próxima consulta</h3>
            <p>A sua próxima consulta será:</p>
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

export default PaginaPaciente;