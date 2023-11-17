'use client'
import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from './FormLogin.module.css';


const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Validação básica
    if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Chamada para o backend (substitua a URL pela sua API)
    const response = await fetch('http://localhost:8080/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Lógica de armazenamento local (usando localStorage neste exemplo)
      localStorage.setItem('token', 'seu-token-de-autenticacao');
      alert('Login bem-sucedido!');

      router.push('/PosLogin');
    } else {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.loginInput}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.loginInput}
      />
      <button onClick={handleLogin} className={styles.loginButton}>
        Entrar
      </button>
      <p>
        Ainda não é cadastrado?{' '}
        <Link href="/Cadastro">Cadastre-se aqui</Link>
      </p>
    </div>
  );
};

export default FormLogin;