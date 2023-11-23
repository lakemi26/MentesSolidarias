import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <h1>Mentes Solidarias</h1>
      </div>
      <div className={styles.linksContainer}>
        <a href="/">Home</a>
        <a href="/Sobre">Sobre nós</a>
        <a href="/Contato">Contato</a>
      </div>
      <p>&copy; 2023 <a className={styles.AncientCode} href ="/AncientCode" >AncientCode.</a> Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;