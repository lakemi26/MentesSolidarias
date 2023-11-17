import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="caminho/para/seu/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.linksContainer}>
        <a href="/">Home</a>
        <a href="/sobre">Sobre nós</a>
        <a href="/contato">Contato</a>
      </div>
      <p>&copy; 2024 AncientCode. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;