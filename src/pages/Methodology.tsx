import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import styles from './Methodology.module.css';

export const Methodology: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBeam} />
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.heroTag}>Our Philosophy</div>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.serifItalic}>Clarity before code.</span>
                        <span className={styles.gradientText}>Strategy before scale.</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        We don't just build software; we engineer digital maturity. Precision-crafted solutions for the modern enterprise.
                    </p>
                    <div className={styles.heroDivider} />
                </motion.div>
            </section>

            {/* Framework Header */}
            <section className={styles.frameworkHeader}>
                <div>
                    <h2 className={styles.fhTitle}>The Delivery Framework</h2>
                    <p className={styles.fhDesc}>Our five-stage process ensures transparency, quality, and measurable growth at every step.</p>
                </div>
                <div className={styles.fhSteps}>
                    <span>01</span>
                    <span style={{ width: 32, height: 1, background: '#374151', alignSelf: 'center' }} />
                    <span>05</span>
                </div>
            </section>

            {/* Stages Grid */}
            <section className={styles.stagesSection}>
                <div className={styles.connectorLine} />
                <div className={styles.stagesGrid}>
                    {[
                        {
                            id: '01', title: 'Discovery', icon: 'travel_explore', desc: 'Laying the foundation through deep analysis and strategic planning.',
                            items: [
                                { h: 'Business Audits', s: 'Review existing infrastructure.' },
                                { h: 'Technical Roadmapping', s: 'Architecture for scalability.' }
                            ]
                        },
                        {
                            id: '02', title: 'Design', icon: 'design_services', desc: 'Crafting intuitive interfaces that align user needs with business goals.',
                            items: [
                                { h: 'UX Architecture', s: 'User flows and wireframes.' },
                                { h: 'High-Fidelity Prototyping', s: 'Interactive design systems.' }
                            ]
                        },
                        {
                            id: '03', title: 'Build', icon: 'code_blocks', desc: 'Engineering robust, scalable software with precision and speed.',
                            items: [
                                { h: 'Clean Code', s: 'Maintainable standards.' },
                                { h: 'Agile Sprints', s: 'Iterative delivery cycles.' }
                            ]
                        },
                        {
                            id: '04', title: 'Launch', icon: 'rocket_launch', desc: 'Ensuring a seamless go-to-market with rigorous testing.',
                            items: [
                                { h: 'QA Testing', s: 'Automated & manual.' },
                                { h: 'Deployment', s: 'Zero-downtime releases.' }
                            ]
                        },
                        {
                            id: '05', title: 'Optimize', icon: 'trending_up', desc: 'Continuous improvement driven by real-world data and feedback.',
                            items: [
                                { h: 'Performance', s: 'Monitoring & scaling.' },
                                { h: 'Growth Iterations', s: 'Data-driven features.' }
                            ]
                        }
                    ].map((stage, idx) => (
                        <motion.div
                            key={stage.id}
                            className={styles.stageCardWrapper}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className={styles.stageMarker}>
                                <div className={styles.markerDot} />
                            </div>
                            <div className={styles.stageCard}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.stepNumber}>{stage.id}</span>
                                    <span className={`material-symbols-outlined ${styles.stepIcon}`}>{stage.icon}</span>
                                </div>
                                <h3 className={styles.stageTitle}>{stage.title}</h3>
                                <p className={styles.stageDesc}>{stage.desc}</p>
                                <div className={styles.stageList}>
                                    {stage.items.map((item, i) => (
                                        <div key={i} className={styles.listItem}>
                                            <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                                            <div>
                                                <span className={styles.itemHeading}>{item.h}</span>
                                                <span className={styles.itemSub}>{item.s}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why It Works */}
            <section className={styles.whySection}>
                <div className={styles.whyGrid}>
                    <div>
                        <span className={styles.whyLabel}>Why It Works</span>
                        <h2 className={styles.whyTitle}>
                            Engineered for <br />
                            <span style={{ color: '#6b7280' }}>predictable success.</span>
                        </h2>
                        <p className={styles.whyDesc}>
                            Our methodology isn't just a list of steps; it's a risk-mitigation framework. By front-loading strategy and discovery, we reduce technical debt before a single line of code is written.
                        </p>
                        <div className={styles.statGrid}>
                            <div>
                                <div className={styles.statVal}>98%</div>
                                <div className={styles.statLabel}>On-time delivery</div>
                            </div>
                            <div>
                                <div className={styles.statVal}>40%</div>
                                <div className={styles.statLabel}>Faster time-to-market</div>
                            </div>
                        </div>
                        <Link to="/work/scaling-momentum">
                            <Button variant="ghost" style={{ marginTop: '2rem', paddingLeft: 0 }}>
                                Explore Case Studies <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
                            </Button>
                        </Link>
                    </div>

                    <div className={styles.visualContainer}>
                        <div className={styles.visualOverlay} />
                        {/* Abstract Visual representation */}
                        <div className={styles.visualContent}>
                            <div className={styles.processGrid}>
                                <div className={styles.processItem} style={{ transform: 'translateY(2rem)' }}>
                                    <span className={`material-symbols-outlined ${styles.processIcon}`}>architecture</span>
                                    <div className={styles.processLine} />
                                </div>
                                <div className={styles.processItem}>
                                    <span className={`material-symbols-outlined ${styles.processIcon}`}>terminal</span>
                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <div className={`${styles.processLine} ${styles.processLineLong}`} />
                                        <div className={styles.processLine} />
                                    </div>
                                </div>
                                <div className={styles.processItem} style={{ transform: 'translateY(2rem)' }}>
                                    <span className={`material-symbols-outlined ${styles.processIcon}`}>grid_view</span>
                                    <div className={`${styles.processLine} ${styles.processLineLong}`} />
                                </div>
                                <div className={`${styles.processItem} ${styles.processItemHighlight}`}>
                                    <span className={`material-symbols-outlined ${styles.processIcon}`} style={{ color: 'var(--pk-color-primary)' }}>verified</span>
                                    <div className={styles.processLine} style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Ready to mature your process?</h2>
                <p className={styles.footerText}>Move from chaos to clarity. Partner with ZettaB for engineering excellence that scales with your ambition.</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">Start a Project</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
