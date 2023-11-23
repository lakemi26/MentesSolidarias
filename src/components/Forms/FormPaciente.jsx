'use client'
import styles from './Forms.module.css';
import { useState } from 'react';

const FormPaciente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    genero: '',
    telefone: '',
    escolaridade: '',
    dataNascimento: '',
    email: '',
    senha: '',
    cep: '',
    endereco: '',
    bairro: '',
    complemento: '',
    numero: '',
    cidade: '',
    estado: '',
    filhos: '',
    ocupacao: '',
    estadoCivil: '',
    niss: '',
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
          main_usuario: {
            nome: formData.nome,
            cpf: formData.cpf,
            genero: formData.genero,
            num_telefone: formData.telefone,
            escolaridade: formData.escolaridade,
            dt_nasc: formData.dataNascimento,
            email: formData.email,
            senha: formData.senha,
            cep: formData.cep,
            logradouro: formData.endereco,
            bairro: formData.bairro,
            complemento: formData.complemento,
            numero: formData.numero,
            cidade: formData.cidade,
            estado: formData.estado,
          },
        }),
      });
  
      // Endpoint para enviar especiais do paciente
      await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          special_paciente: {
            filhos: formData.filhos,
            ocupacao: formData.ocupacao,
            estadoCivil: formData.estadoCivil,
            niss: formData.niss,
          },
        }),
      });

      if (response.ok) {
        // Redirecionar para a próxima página (substitua '/proxima-pagina' pelo caminho desejado)
        window.location.href = '/LoginPaciente';
      } else {
        console.error('Erro ao enviar os dados para o backend.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para o backend:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Cadastro do Paciente</h1>
      <label className={styles.label}>
        Nome:
        <input 
          className={styles.input} 
          type="text" 
          name="nome" 
          value={formData.nome} 
          onChange={handleChange}
          placeholder="Nome completo"
          errorMessage="Verifique seu nome!"
          pattern="^[A-Za-z ]+$"
          required
        />
      </label>

    <label className={styles.label}>
      CPF:
      <input 
        className={styles.input} 
        type="text" 
        name="cpf" 
        value={formData.cpf} 
        onChange={handleChange}
        placeholder="CPF"
        errorMessage="Verifique seu CPF!"
        pattern="[0-9]{11}"
        required
      />
    </label>

    <label className={styles.label}>
    Gênero:
    <select 
      className={styles.input} 
      name="genero" 
      value={formData.genero} 
      onChange={handleChange}
      required
    >
      <option value="" disabled>Selecione o gênero</option>
      <option value="feminino">Feminino</option>
      <option value="masculino">Masculino</option>
      <option value="outros">Outros</option>
    </select>
  </label>

    <label className={styles.label}>
      Telefone:
      <input 
        className={styles.input} 
        type="text" 
        name="telefone" 
        value={formData.telefone} 
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
    </label>

    <label className={styles.label}>
      Escolaridade:
      <input 
        className={styles.input} 
        type="text" 
        name="escolaridade" 
        value={formData.escolaridade} 
        onChange={handleChange}
        placeholder="Escolaridade"
        required
      />
    </label>

    <label className={styles.label}>
      Data de Nascimento:
      <input 
        className={styles.input} 
        type="date" 
        name="dataNascimento" 
        value={formData.dataNascimento} 
        onChange={handleChange}
        required
      />
    </label>

    <label className={styles.label}>
      Email:
      <input 
        className={styles.input} 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
        placeholder="Endereço de email"
        errorMessage="Verifique seu email!"
        required
      />
    </label>

    <label className={styles.label}>
      Senha:
      <input 
        className={styles.input} 
        type="password" 
        name="senha" 
        value={formData.senha} 
        onChange={handleChange}
        placeholder="Senha"
        errorMessage="A senha deve conter pelo menos 8 caracteres"
        minLength="8"
        required
      />
    </label>

    <label className={styles.label}>
      CEP:
      <input 
        className={styles.input} 
        type="text" 
        name="cep" 
        value={formData.cep} 
        onChange={handleChange}
        placeholder="CEP"
        required
      />
    </label>

    <label className={styles.label}>
      Endereço:
      <input 
        className={styles.input} 
        type="text" 
        name="endereco" 
        value={formData.endereco} 
        onChange={handleChange}
        placeholder="Endereço"
        required
      />
    </label>

    <label className={styles.label}>
      Bairro:
      <input 
        className={styles.input} 
        type="text" 
        name="bairro" 
        value={formData.bairro} 
        onChange={handleChange}
        placeholder="Bairro"
        required
      />
    </label>

    <label className={styles.label}>
      Complemento:
      <input 
        className={styles.input} 
        type="text" 
        name="complemento" 
        value={formData.complemento} 
        onChange={handleChange}
        placeholder="Complemento"
      />
    </label>

    <label className={styles.label}>
      Número:
      <input 
        className={styles.input} 
        type="text" 
        name="numero" 
        value={formData.numero} 
        onChange={handleChange}
        placeholder="Número"
        required
      />
    </label>

    <label className={styles.label}>
      Cidade:
      <input 
        className={styles.input} 
        type="text" 
        name="cidade" 
        value={formData.cidade} 
        onChange={handleChange}
        placeholder="Cidade"
        required
      />
    </label>

    <label className={styles.label}>
      Estado:
      <input 
        className={styles.input} 
        type="text" 
        name="estado" 
        value={formData.estado} 
        onChange={handleChange}
        placeholder="Estado"
        required
      />
  </label>

    {/* Campos especiais Pacientes */}
  <label className={styles.label}>
    Filhos:
    <input 
      className={styles.input} 
      type="number" 
      name="filhos" 
      value={formData.filhos} 
      onChange={handleChange}
      placeholder="Número de filhos"
      required
    />
  </label>

  <label className={styles.label}>
    Ocupação:
    <input 
      className={styles.input} 
      type="text" 
      name="ocupacao" 
      value={formData.ocupacao} 
      onChange={handleChange}
      placeholder="Ocupação"
      required
    />
  </label>

  <label className={styles.label}>
    Estado Civil:
    <select 
      className={styles.input} 
      name="estadoCivil" 
      value={formData.estadoCivil} 
      onChange={handleChange}
      required
    >
      <option value="" disabled>Selecione o estado civil</option>
      <option value="solteiro">Solteiro</option>
      <option value="casado">Casado</option>
      <option value="divorciado">Divorciado</option>
      <option value="viuvo">Viúvo</option>
    </select>
  </label>

  <label className={styles.label}>
    NISS:
    <input 
      className={styles.input} 
      type="text" 
      name="niss" 
      value={formData.niss} 
      onChange={handleChange}
      placeholder="NISS"
      required
    />
  </label>
      
      <button className={styles.button} type="submit">Enviar</button>
    </form>
  );
};

export default FormPaciente;