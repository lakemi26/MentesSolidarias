import Link from 'next/link';
import styles from './PaginaPaciente.module.css';

const PaginaPaciente = () => {
  return (
<div className={styles.container}>
      <div className={styles.bigCard}>
        <h2>Seja bem vindo</h2>

        <div className={styles.smallCardsContainer}>
          <div className={styles.smallCard}>
            <h3>Agenda</h3>
            <p>Nos informe qual o melhor dia da semana e horário é melhor para você</p>
            <div className={styles.botao}>
            <Link href="/AgendaPaciente">
                Clique aqui!
            </Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Avalie a sua consulta</h3>
            <p>Conte para nós como foi a sua experiência com um de nossos colaboradores</p>
            <div className={styles.botao}>
            <Link href="/Avaliacao">
                Clique aqui!
            </Link>
            </div>
          </div>


          <div className={styles.smallCard}>
            <h3>Próxima consulta</h3>
            <p>A sua próxima consulta será no dia:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaPaciente;