import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Сасный Лого</h1>
            </div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Главная</Link>
                <Link to="/about" className={styles.navLink}>О Нас</Link>
                <Link to="/todos" className={styles.navLink}>Задачи</Link>
            </nav>
        </header>
    );
};

export default Header;