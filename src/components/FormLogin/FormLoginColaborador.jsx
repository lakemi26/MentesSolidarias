'use client'
import styles from './FormLogin.module.css'
import { useState } from 'react';

const FormLoginColaborador = () => {
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

    const apiUrl = 'http://seu-backend/api/login'; // Substitua pela URL do seu backend

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

        window.location.href = '/Colaborador';
      } else {
        console.error('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para o backend:', error);
    }
  };

  return (
    <div className={styles.formContainer}>
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

        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};


export default FormLoginColaborador;