'use client'
import { useState } from 'react';
import styles from './Avaliacao.module.css';

const Avaliacao = () => {
  const [formData, setFormData] = useState({
    nomeAtendente: '',
    nota: '',
    comentario: '',
    dataConsulta: '',
    horaConsulta: '',
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

    // Enviar dados para o backend
    const apiUrl = 'http://seu-backend/api/avaliacao'; // Substitua pela URL do seu backend

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirecionar para a próxima página (substitua '/proxima-pagina' pelo caminho desejado)
        window.location.href = '/Paciente';
      } else {
        console.error('Erro ao enviar os dados para o backend.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para o backend:', error);
    }
  };

  return (
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

      <label className={styles.label}>
        Data da Consulta:
        <input className={styles.input}
          type="date"
          name="dataConsulta"
          value={formData.dataConsulta}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Hora da Consulta:
        <input className={styles.input}
          type="time"
          name="horaConsulta"
          value={formData.horaConsulta}
          onChange={handleChange}
          required
        />
      </label>

      <button className={styles.button} type="submit">Enviar</button>
    </form>
  );
};

export default Avaliacao;
