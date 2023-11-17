'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        <Link className={styles.logo} href="/">
          MentesSolidárias
        </Link>
  
        <div className={styles.nav_links}>
            <Link className={styles.nav_link} href="/">
            Home
            </Link>
            <Link className={styles.nav_link} href="/">
                Sobre
            </Link>
            <Link className={styles.nav_link} href="/">
                Experiências
            </Link>
            <Link className={styles.nav_link} href="/">
                Login
            </Link>
        </div>
  
        <div className={`${styles.menuIcon} ${styles.menu_icon}`} onClick={toggleMenu}>
            ☰
        </div>
      </div>
    );
  };
  
  export default Navbar;