import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import styles from './ServiceDetail.module.css';

export const ServiceDetail: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.bgPattern} />

                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.heroBadge}>
                        <span className={styles.pulseDot} />
                        Web Development Services
                    </div>

                    <h1 className={styles.heroTitle}>
                        Web Development That <br />
                        <span className={styles.heroGradientText}>Converts, Performs, and Scales</span>
                    </h1>

                    <p className={styles.heroDesc}>
                        Digital platforms designed for business growth, not just code. We engineer high-performance solutions that drive revenue and build trust.
                    </p>

                    <div className={styles.heroActions}>
                        <Link to="/work/scaling-momentum">
                            <Button variant="primary" size="lg">View Our Work</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" size="lg">Consult with Us</Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Context */}
            <section className={styles.contextSection}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.contextLabel}>The Business Reality</div>
                    <h2 className={styles.contextQuote}>
                        "Poorly designed systems cost <span className={styles.highlight}>revenue</span>, <span className={styles.highlight}>time</span>, and <span className={styles.highlight}>trust</span>. We fix that."
                    </h2>
                </motion.div>
            </section>

            {/* Strategic Approach (Timeline) */}
            <section className={styles.strategySection}>
                <h2 className={styles.sectionTitle}>Our Strategic Approach</h2>
                <p className={styles.sectionSubtitle}>
                    We don't just write code. We follow a rigorous methodology to ensure every line serves a business purpose.
                </p>

                <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine} />

                    {[
                        { title: 'Understand Business Model', desc: 'We dive deep into your revenue streams, customer journeys, and market positioning before writing a single line of code.', icon: 'analytics' },
                        { title: 'Design User-First Experiences', desc: 'Intuitive interfaces that reduce friction. We prioritize accessibility and conversion-centered design principles.', icon: 'design_services' },
                        { title: 'Build Scalable Architecture', desc: 'Future-proof engineering using modern stacks. Designed to handle growth without total refactoring.', icon: 'architecture' },
                        { title: 'Continuously Improve', desc: 'Launch is just the beginning. We use data loops to iterate, optimize, and enhance performance post-deployment.', icon: 'update' }
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            {/* Left Content (Evens) */}
                            {idx % 2 === 0 ? (
                                <div className={`${styles.timelineContent} ${styles.timelineContentLeft}`}>
                                    <div className={styles.stepIconDesktop}>
                                        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{step.icon}</span>
                                    </div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            ) : <div />}

                            {/* Center Point */}
                            <div className={styles.timelinePoint} />

                            {/* Right Content (Odds) */}
                            {idx % 2 !== 0 ? (
                                <div className={styles.timelineContent}>
                                    <div className={styles.stepIconDesktop}>
                                        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{step.icon}</span>
                                    </div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            ) : <div />}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className={styles.benefitsSection}>
                <div className={styles.grid}>
                    {[
                        { title: 'Higher Conversion Rates', desc: 'Optimized user flows and lightning-fast load times directly impact your bottom line.', icon: 'trending_up' },
                        { title: 'Lower Maintenance Cost', desc: 'Clean codebases and modular design mean updates take hours, not weeks.', icon: 'settings_suggest' },
                        { title: 'Future-Ready Architecture', desc: 'Built on scalable cloud infrastructure that grows with your user base.', icon: 'cloud_done' }
                    ].map((item, idx) => (
                        <div key={idx} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{item.icon}</span>
                            </div>
                            <h3 className={styles.benefitTitle}>{item.title}</h3>
                            <p className={styles.benefitText}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Engagement Models */}
            <section className={styles.engagementSection}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className={styles.sectionTitle}>Flexible Engagement Models</h2>
                    <p className={styles.sectionSubtitle}>Choose the working relationship that fits your project stage.</p>
                </div>

                <div className={styles.grid}>
                    {/* Model 1 */}
                    <div className={`${styles.modelCard} ${styles.modelDefault}`}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className={`${styles.modelTag} ${styles.tagDefault}`}>Best for Defined Scope</span>
                            <h3 className={styles.modelTitle}>Project Based</h3>
                            <p className={styles.modelDesc}>Fixed timeline and budget for specific deliverables.</p>
                        </div>
                        <ul className={styles.checkList}>
                            {['Clear deliverables', 'Fixed budget cap', 'Turnkey execution'].map(item => (
                                <li key={item} className={styles.checkItem}>
                                    <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" style={{ width: '100%' }}>Start Project</Button>
                        </Link>
                    </div>

                    {/* Model 2 (Highlight) */}
                    <div className={`${styles.modelCard} ${styles.modelHighlight}`}>
                        <div className={styles.popularBadge}>Most Popular</div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className={`${styles.modelTag} ${styles.tagPrimary}`}>Best for Evolving Products</span>
                            <h3 className={styles.modelTitle}>Agile Retainer</h3>
                            <p className={styles.modelDesc}>Dedicated team with monthly flexibility.</p>
                        </div>
                        <ul className={styles.checkList}>
                            {['Dedicated cross-functional team', 'Bi-weekly sprints', 'Flexible prioritization'].map(item => (
                                <li key={item} className={styles.checkItem}>
                                    <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button variant="primary" style={{ width: '100%' }}>Consult Now</Button>
                        </Link>
                    </div>

                    {/* Model 3 */}
                    <div className={`${styles.modelCard} ${styles.modelDefault}`}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className={`${styles.modelTag} ${styles.tagDefault}`}>Best for Scale</span>
                            <h3 className={styles.modelTitle}>Strategic Partner</h3>
                            <p className={styles.modelDesc}>Long-term digital transformation and support.</p>
                        </div>
                        <ul className={styles.checkList}>
                            {['CTO-level advisory', 'Enterprise architecture', '24/7 Support & DevOps'].map(item => (
                                <li key={item} className={styles.checkItem}>
                                    <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" style={{ width: '100%' }}>Contact Sales</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
