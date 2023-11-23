import styles from './SobreNos.module.css';
import Link from 'next/link';

const SobreNos = () => {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Sobre nós</h2>
          <p>"Mentes Solidárias" é um projeto dedicado a oferecer apoio emocional e psicológico acessível a 
            indivíduos de baixa renda, através de consultas gratuitas com psicólogos e psiquiatras voluntários. 
            Nossa missão é utilizar tecnologias emergentes para promover a saúde mental, proporcionando um espaço 
            de acolhimento e cuidado para aqueles que mais necessitam. Valorizamos a solidariedade, a empatia e a 
            busca por um mundo onde o suporte emocional seja acessível a todos, independentemente de suas condições 
            financeiras. Estamos comprometidos em oferecer um ambiente seguro e confidencial, onde cada pessoa possa
            encontrar ajuda e orientação para o seu bem-estar psicológico.
           </p>
        </div>
  
        <div className={styles.card}>
          <h2>Receba atendimento</h2>
          <p>Nossa missão no Mentes Solidárias é proporcionar atendimentos psiquiátricos e sessões de terapia gratuitas para indivíduos de baixa renda. Para garantir acesso aos nossos serviços, solicitamos informações pessoais, incluindo o Número de Inscrição Social (NIS). Essa medida é essencial para validar a renda familiar da pessoa, assegurando o acesso aos atendimentos necessários. Estamos comprometidos em oferecer suporte emocional a quem mais precisa, tornando os cuidados de saúde mental acessíveis e inclusivos.</p>
          <br/>
          <Link href="/CadastroPaciente">
            Cadastre-se
          </Link>
        </div>
  
        <div className={styles.card}>
          <h2> Junte-se à nós</h2>
          <p>Estamos em busca de profissionais dedicados e apaixonados por ajudar o próximo para integrar nossa equipe. Na Mentes Solidárias, contamos com uma equipe excepcional, composta por indivíduos competentes e apaixonados pelo que fazem. Todos os nossos profissionais são voluntários, doando parte de seu tempo e expertise para oferecer atendimentos gratuitos aos pacientes. Se você busca fazer a diferença na vida de quem mais precisa e compartilha de nossa visão de solidariedade e apoio emocional acessível, junte-se a nós!</p>
          <br/>
          <Link href="/CadastroColaborador">
            Cadastre-se
          </Link>
        </div>
      </div>
    );
  };
  
  export default SobreNos;