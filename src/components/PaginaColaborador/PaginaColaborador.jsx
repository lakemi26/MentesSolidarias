import Link from 'next/link';
import styles from './PaginaColaborador.module.css';

const PaginaColaborador = () => {
  return (
<div className={styles.container}>
      <div className={styles.bigCard}>
        <h2>Seja bem vindo</h2>

        <div className={styles.smallCardsContainer}>
          <div className={styles.smallCard}>
            <h3>Agenda</h3>
            <p>Nos informe qual o melhor dia da semana e horário é melhor para você</p>
            <div className={styles.botao}>
            <Link href="/AgendaColaborador">
                Clique aqui!
            </Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Prontuário</h3>
            <p>Preencha o prontuário daconsulta</p>
            <div className={styles.botao}>
            <Link href="/Prontuario">
                Clique aqui!
            </Link>
            </div>
          </div>

          <div className={styles.smallCard}>
            <h3>Receitas</h3>
            <p>Faça aqui uma receita virtual para seus pacientes</p>
            <div className={styles.botao}>
            <Link href="/Receita">
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

export default PaginaColaborador;