'use client'
import { useState } from 'react';
import styles from './Receita.module.css';

const Receita = () => {
  const [formData, setFormData] = useState({
    dataConsulta: '',
    horaConsulta: '',
    nomePaciente: '',
    cpfPaciente: '',
    nomeMedico: '',
    cpfMedico: '',
    nomeRemedio: '',
    principioAtivo: '',
    frequenciaConsumo: '',
    duracaoTratamento: '',
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
    try {
      // Endpoint 
      await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tb_receita: {
            dataConsulta: formData.dataConsulta,
            horaConsulta: formData.horaConsulta,
            nomePaciente: formData.nomePaciente,
            cpfPaciente: formData.cpfPaciente,
            nomeMedico: formData.nomeMedico,
            cpfMedico: formData.cpfMedico,
            nomeRemedio: formData.nomeRemedio,
            principioAtivo: formData.principioAtivo,
            frequenciaConsumo: formData.frequenciaConsumo,
            duracaoTratamento: formData.duracaoTratamento
          },
        }),
      });

      await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          special_profissional: {
            certificacao: formData.certificacao,
            formacao: formData.formacao,
            cnpj: formData.cnpj
          },
        }),
      });

      if (response.ok) {
        // Redirecionar para a próxima página (substitua '/proxima-pagina' pelo caminho desejado)
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
          placeholder="123.456.789-01" // Adapte conforme o formato desejado
          required
        />
      </label>

      <label className={styles.label}>
        Nome do Médico:
        <input
        className={styles.input}
          type="text"
          name="nomeMedico"
          value={formData.nomeMedico}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        CPF do Médico:
        <input
        className={styles.input}
          type="text"
          name="cpfMedico"
          value={formData.cpfMedico}
          onChange={handleChange}
          placeholder="123.456.789-01" // Adapte conforme o formato desejado
          required
        />
      </label>

      <label className={styles.label}>
        Nome do Remédio:
        <input
        className={styles.input}
          type="text"
          name="nomeRemedio"
          value={formData.nomeRemedio}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Princípio Ativo:
        <input
        className={styles.input}
          type="text"
          name="principioAtivo"
          value={formData.principioAtivo}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Frequência de Consumo:
        <input
        className={styles.input}
          type="text"
          name="frequenciaConsumo"
          value={formData.frequenciaConsumo}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Duração do Tratamento:
        <input
        className={styles.input}
          type="text"
          name="duracaoTratamento"
          value={formData.duracaoTratamento}
          onChange={handleChange}
          required
        />
      </label>

      <button className={styles.button} type="submit">Enviar</button>
    </form>
  );
};

export default Receita;
