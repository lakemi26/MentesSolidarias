'use client'
import { useState } from 'react';
import styles from './Agenda.module.css';

const AgendaPacienteForm = () => {
  const [formData, setFormData] = useState({
    diasSemana: [],
    horarios: [],
    preferenciaGenero: '',
    tipoAtendimento: '',
    queixas: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedList = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);

      setFormData({
        ...formData,
        [name]: updatedList,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:8080/agenda';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
        <img src="./img/AgendaPaciente.jpg" alt="Descrição da imagem" />
      </div>
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Agenda do paciente</h1>
      <div className={styles.checkboxGroup}>
        <label>
          Dias da Semana:
          {['segunda', 'terca', 'quarta', 'quinta', 'sexta'].map((dia) => (
            <div key={dia}>
              <input
                type="checkbox"
                name="diasSemana"
                value={dia}
                onChange={handleChange}
              />
              {`${dia.charAt(0).toUpperCase()}${dia.slice(1)}`}
            </div>
          ))}
        </label>
      </div>

      <div className={styles.checkboxGroup}>
        <label>
          Horários:
          {Array.from({ length: 11 }, (_, index) => index + 8).map((hora) => (
            <div key={hora}>
              <input
                type="checkbox"
                name="horarios"
                value={`${hora}h`}
                onChange={handleChange}
              />
              {`${hora}h`}
            </div>
          ))}
        </label>
      </div>

      <div className={styles.selectGroup}>
        <label>
          Preferência de Gênero:
          <select
            name="preferenciaGenero"
            value={formData.preferenciaGenero}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="sem-preferencia">Sem preferência</option>
          </select>
        </label>
      </div>

      <div className={styles.selectGroup}>
        <label>
          Tipo de Atendimento:
          <select
            name="tipoAtendimento"
            value={formData.tipoAtendimento}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="psicologia">Psicologia</option>
            <option value="psiquiatria">Psiquiatria</option>
          </select>
        </label>
      </div>

      <div className={styles.textAreaGroup}>
        <label>
          Queixas:
          <textarea
            name="queixas"
            value={formData.queixas}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>

      <button className={styles.button} type="submit">Agendar</button>
    </form>
    </div>
  );
};

export default AgendaPacienteForm;
