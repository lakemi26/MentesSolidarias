'use client'
import Link from 'next/link';
import styles from './FormLogin.module.css'
import { useState } from 'react';

const FormLoginPaciente = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:8080/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        sessionStorage.setItem('usuario', JSON.stringify(data));

        window.location.href = '/Paciente';
      } else {
        console.error('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para o backend:', error);
    }
  };

  return (
    <div className={styles.loginColaborador}>
      <img src="./img/LoginPaciente.jpeg" alt="Banner Colaborador" />
    <div className={styles.formContainer}>
      <h1>Login Paciente</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          CPF:
          <input className={styles.input}
            type="text" 
            name="cpf" 
            value={formData.cpf} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label className={styles.label}>
          Senha:
          <input className={styles.input}
            type="password" 
            name="senha" 
            value={formData.senha} 
            onChange={handleChange} 
            required 
          />
        </label>
        <p>Ainda não possui cadastro?</p>
        <Link href="/CadastroPaciente">
            Cadastre-se
        </Link>

        <br/>
        <br/>

        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};


export default FormLoginPaciente;