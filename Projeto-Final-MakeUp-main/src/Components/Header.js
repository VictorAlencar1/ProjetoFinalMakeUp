import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';

const Header = () => {

  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem('makeup');

    if (token) {
      return token;
    }

    return '';
  });

  useEffect(() => {
    const token = sessionStorage.getItem('makeup');

    if (token) {
      setAuth(token)
      return ;
    }

    setAuth('')

  }, []);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/home">
          <img className="logo" width="150" src={Logo} />
        </Link>
        <Link className={styles.login} to="/home">
          Home
        </Link>
        <Link className={styles.login} to="/produtos">
          Produtos
        </Link>
        <Link className={styles.login} to="/compras">
          Carrinho
        </Link>
        <Link className={styles.login} to="/login">
          Sair
        </Link>
      </nav>
    </header>
  );
};

export default Header;
