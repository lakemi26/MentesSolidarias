import styles from './Forms.module.css';

const formularioGeral = () => {
  return (
    <>
        <div className='box'>
            <form className='form' action="">
                <input type="text" className='nome' name="nome" placeholder='Nome Completo' />
                <input type='email' name="email" placeholder='Email'/>
                <input type="password" name="senha" placeholder='Senha'/>
                <input type='number' name="tel" placeholder='Telefone'/>
                <input type='text' name='escolaridade' placeholder='Escolaridade'/>

            </form>

        </div>
    
    
    </>
    
  );
};

export default formularioGeral;