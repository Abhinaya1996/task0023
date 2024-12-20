import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/elbrit-logo.jpg" alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
