import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandCol}>
                        <div className={styles.logoContainer}>
                            <div className={styles.logoIcon}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>all_inclusive</span>
                            </div>
                            <h2 className={styles.logoText}>ZettaB</h2>
                        </div>
                        <p className={styles.tagline}>Engineering business momentum through premium software solutions.</p>
                    </div>

                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Company</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Services</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#">Strategy</a></li>
                            <li><a href="#">Product Design</a></li>
                            <li><a href="#">Engineering</a></li>
                        </ul>
                    </div>

                    <div className={styles.newsletterCol}>
                        <h3 className={styles.colTitle}>Stay Updated</h3>
                        <p className={styles.text}>Insights on technology and business momentum.</p>
                        {/* Simple input implementation for now */}
                        <div className={styles.subscribe}>
                            <input type="email" placeholder="Email Address" className={styles.emailInput} />
                            <button className={styles.subBtn}>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© 2024 ZettaB Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
