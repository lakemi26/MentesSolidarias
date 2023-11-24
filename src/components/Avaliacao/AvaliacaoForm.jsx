'use client'
import { useState } from 'react';
import styles from './AvaliacaoForm.module.css';

const AvaliacaoForm = () => {
  const [formData, setFormData] = useState({
    nomeAtendente: '',
    nota: '',
    comentario: ''
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

    try {
      await fetch('http://localhost:8080/avaliacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          avaliacao: {
            nota: formData.nota,
            avaliacao: formData.comentario
          },
        }),
      });

      if (response.ok) {
      
        window.location.href = '/Paciente';
      } else {
        console.error('Erro ao enviar os dados para o backend.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para o backend:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./img/AvaliacaoImg.jpeg" alt="Descrição da imagem" />
      </div>
      <div className={styles.formContainer}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Nome do Atendente:
        <input
        className={styles.input}
          type="text"
          name="nomeAtendente"
          value={formData.nomeAtendente}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Nota de 1 a 5:
        <input
        className={styles.input}
          type="number"
          name="nota"
          value={formData.nota}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
      </label>

      <label className={styles.label}>
        Comentário:
        <textarea
        className={styles.textarea}
          name="comentario"
          value={formData.comentario}
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <button className={styles.button} type="submit">Enviar</button>
    </form>
    </div>
    </div>
  );
};

export default AvaliacaoForm;
