'use client'
import { useState } from 'react';
import styles from "./Prontuario.module.css"

const PontuarioForm = () => {
  const [formData, setFormData] = useState({
    dataConsulta: '',
    horaConsulta: '',
    nomeProfissional: '',
    cpfProfissional: '',
    nomePaciente: '',
    cpfPaciente: '',
    diagnostico: '',
    remedios: '',
    comentarios: '',
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

    const apiUrl = 'http://localhost:8080/pronuario';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.href = '/Colaborador';
      } else {
        console.error('Erro ao enviar os dados para o backend.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para o backend:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Prontuário:</h1>
      <label className={styles.label}>
        Data da Consulta:
        <input
          className={styles.input}
          type="date"
          name="dataConsulta"
          value={formData.dataConsulta}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Hora da Consulta:
        <input
        className={styles.input}
          type="time"
          name="horaConsulta"
          value={formData.horaConsulta}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Nome do Profissional:
        <input
        className={styles.input}
          type="text"
          name="nomeProfissional"
          value={formData.nomeProfissional}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        CPF do Profissional:
        <input
        className={styles.input}
          type="text"
          name="cpfProfissional"
          value={formData.cpfProfissional}
          onChange={handleChange}
          placeholder="123.456.789-01"
          required
        />
      </label>

      <label className={styles.label}>
        Nome do Paciente:
        <input
        className={styles.input}
          type="text"
          name="nomePaciente"
          value={formData.nomePaciente}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        CPF do Paciente:
        <input
        className={styles.input}
          type="text"
          name="cpfPaciente"
          value={formData.cpfPaciente}
          onChange={handleChange}
          placeholder="123.456.789-01" 
          required
        />
      </label>

      <label className={styles.label}>
        Diagnóstico:
        <textarea
        className={styles.textarea}
          name="diagnostico"
          value={formData.diagnostico}
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <label className={styles.label}>
        Remédios (opcional):
        <input
        className={styles.input}
          type="text"
          name="remedios"
          value={formData.remedios}
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Comentários:
        <textarea
        className={styles.textarea}
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
        ></textarea>
      </label>

      <button className={styles.button} type="submit">Enviar</button>
    </form>
  );
};

export default PontuarioForm;
