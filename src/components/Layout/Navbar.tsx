import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logoContainer}>
                    <div className={styles.logoIcon}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>all_inclusive</span>
                    </div>
                    <h2 className={styles.logoText}>ZettaB</h2>
                </Link>

                <nav className={styles.nav}>
                    <Link to="/services" className={styles.navLink}>Capabilities</Link>
                    <Link to="/work" className={styles.navLink}>Work</Link>
                    <Link to="/process" className={styles.navLink}>Approach</Link>
                    <Link to="/insights" className={styles.navLink}>Insights</Link>
                </nav>

                <div className={styles.actions}>
                    <Button variant="ghost" size="sm" className={styles.loginBtn}>Client Login</Button>
                    <Button variant="primary" size="sm">Contact Us</Button>
                </div>
            </div>
        </header>
    );
};
