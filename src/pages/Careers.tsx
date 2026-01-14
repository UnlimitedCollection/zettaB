import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import styles from './Careers.module.css';

export const Careers: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div
                    className={styles.heroBackground}
                    style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuB982-T6hrwiH4OMXYKlD0PCEDozY6sYAZFYxqhg_YXsS-Rtj62HJ5oe7Te-oaVhjrY4VSVAfDvIX0uxlvKPqiBRLm2tgnM6vxd0KFs-UAHE-eq554ev0FiN_NuaeS47Vb8KKvfyl4zraZIQfp7UwjKBudtYISC1Nwu_TNpJ9_tH4inFh8wqd_v0xW2dtUUWEuiaytucVYqPW2IGk_3Z19cn64LpAX8hKN2IV7rCJiEhjg896EG3qLP9POZseWTKDtUSR6C9jhTAXQ1)' }}
                />
                <div className={styles.heroOverlay} />

                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className={styles.pingDot}>
                            <span className={styles.pingAnimate} />
                            <span className={styles.dotSolid} />
                        </span>
                        Hiring exceptional engineers worldwide
                    </div>

                    <h1 className={styles.heroTitle}>
                        Build the Future, <br />
                        <span className={styles.gradientText}>Not Just Projects</span>
                    </h1>

                    <p className={styles.heroDesc}>
                        Join ZettaB and engineer the digital backbone of tomorrow. We don't just write code; we cultivate careers for the ambitious.
                    </p>

                    <div className={styles.heroActions}>
                        <Link to="/contact">
                            <Button variant="primary" style={{ padding: '0.875rem 2rem' }}>Apply Now</Button>
                        </Link>
                        <a href="#culture" className={styles.cultureBtn}>View Our Culture</a>
                    </div>
                </div>
            </section>

            {/* Why Work Here */}
            <section id="culture" className={styles.whySection}>
                <div className={styles.sectionHeader}>
                    <div style={{ maxWidth: '36rem' }}>
                        <span className={styles.subHeader}>Why ZettaB?</span>
                        <h2 className={styles.sectionTitle}>Engineered for Growth</h2>
                        <p className={styles.sectionDesc}>We have created an ecosystem where technical excellence thrives. Experience a culture designed for the ambitious.</p>
                    </div>
                    <div className={styles.divider} />
                </div>

                <div className={styles.featuresGrid}>
                    {[
                        { title: 'Ownership', text: 'Lead initiatives from day one with full autonomy over your technical decisions. We trust you to build it right.', icon: 'terminal' },
                        { title: 'Diversity of Projects', text: 'Work with global clients solving unique, high-scale engineering problems across fintech, healthcare, and AI.', icon: 'public' },
                        { title: 'Learning Culture', text: "Unlimited budget for upskilling, conferences, and certifications. If you're growing, ZettaB is growing.", icon: 'school' },
                    ].map((feature, idx) => (
                        <div key={idx} className={styles.glassCard}>
                            <div className={styles.iconBox}>
                                <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{feature.icon}</span>
                            </div>
                            <div>
                                <h4 className={styles.cardTitle}>{feature.title}</h4>
                                <p className={styles.cardText}>{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Growth Framework */}
            <section className={styles.growthSection}>
                <div className={styles.growthGlow} />
                <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '42rem', margin: '0 auto' }}>
                        <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>Your Growth Framework</h2>
                        <p style={{ color: '#9ca3af' }}>A clear path from joining to leading. We value transparency in career progression.</p>
                    </div>

                    <div className={styles.timelineGrid}>
                        <div className={styles.timelineLine} />
                        {[
                            { num: '01', title: 'Foundation', sub: 'Master the stack and delivery standards.', list: ['Core Engineering', 'Agile Delivery'], active: true },
                            { num: '02', title: 'Execution', sub: 'Lead features and mentor juniors.', list: ['Tech Leadership', 'System Design'] },
                            { num: '03', title: 'Strategy', sub: 'Architect solutions and drive technical strategy.', list: ['Architecture', 'Client Advisory'] },
                            { num: '04', title: 'Visionary', sub: 'Define the future of tech at ZettaB.', list: ['CTO Office', 'Global Impact'] },
                        ].map((stage, idx) => (
                            <div key={idx} className={styles.glassCard}>
                                <div className={`${styles.stageNumber} ${stage.active ? styles.stageOne : ''}`}>{stage.num}</div>
                                <h3 className={styles.cardTitle} style={{ fontSize: '1.125rem' }}>{stage.title}</h3>
                                <p className={styles.cardText} style={{ fontSize: '0.875rem' }}>{stage.sub}</p>
                                <ul className={styles.stageList}>
                                    {stage.list.map((item, i) => (
                                        <li key={i} className={styles.stageItem}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--pk-color-primary)' }}>check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <div className={styles.ctaSplash} />
                    <h2 className={styles.ctaTitle}>
                        No open roles today?
                        <span className={styles.ctaSub}>But we’re always open to exceptional talent.</span>
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <Link to="/contact" className={styles.ctaButton}>
                            General Application <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                        </Link>
                        <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Join our talent network to be the first to know.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
