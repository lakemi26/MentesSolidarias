import Link from 'next/link';
import styles from './CardComponent.module.css';

const CardComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>Conheça o nosso <br/> projeto</h2>
        <p>Nosso compromisso vai além do desenvolvimento tecnológico; buscamos impactar positivamente comunidades, oferecendo apoio psicológico a quem mais precisa. 
          Acreditamos que o acesso à saúde mental é fundamental para o bem-estar de todos.</p>
        <Link href="/Sobre">
            Saiba Mais
          </Link>
      </div>
      <div className={styles.card}>
        <h2>Tenho direito ao <br/>Mentes Solidárias?</h2>
        <p>Nossa missão no Mentes Solidárias é proporcionar atendimentos psiquiátricos e 
          sessões de terapia gratuitas para indivíduos de baixa renda. Para garantir acesso aos nossos serviços,
           solicitamos informações pessoais, incluindo o Número de Inscrição Social (NIS). </p>
           <Link href="/Sobre">
            Saiba Mais
          </Link>
      </div>
      <div className={styles.card}>
        <h2>Faça Parte da Transformação</h2>
        <p>Estamos em busca de profissionais dedicados e apaixonados por ajudar o próximo para integrar 
          nossa equipe. Na Mentes Solidárias, contamos com uma equipe excepcional, 
          composta por indivíduos competentes e apaixonados pelo que fazem.</p>
          <Link href="/Sobre">
            Saiba Mais
          </Link>
      </div>
    </div>
  );
};

export default CardComponent;