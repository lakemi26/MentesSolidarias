'use client'
import { useState } from 'react';
import styles from './Agenda.module.css';

const AgendaColaboradorForm = () => {
  const [formData, setFormData] = useState({
    diasSemana: [],
    horarios: [],
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
        window.location.href = '/Colaborador';
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
        <img src="./img/AgendaColaborador.jpg" alt="Descrição da imagem" />
      </div>
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Agenda do Colaborador</h1>
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



      <button className={styles.button} type="submit">Agendar</button>
    </form>
    </div>
  );
};

export default AgendaColaboradorForm;
