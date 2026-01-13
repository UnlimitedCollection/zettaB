import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "../components/Button/Button";
import styles from './CaseStudy.module.css';

export const CaseStudyPage: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroImageContainer}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.heroOverlay}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className={styles.heroBadge}>
                                    <span className={styles.pulseDot} />
                                    Case Study
                                </div>
                                <h1 className={styles.heroTitle}>
                                    Scaling for the Next<br />
                                    <span className={styles.titleGradient}>10 Million Users</span>
                                </h1>
                                <p className={styles.heroDesc}>
                                    <span className={styles.clientHighlight}>Client: Fintech Global.</span> Transforming legacy infrastructure into a scalable, future-proof digital ecosystem.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* The Challenge */}
            <section className={styles.challengeSection}>
                <div className={styles.challengeLeft}>
                    {[
                        { title: 'System Latency', text: 'High response times were degrading user experience during peak trading hours.', icon: 'timer_off' },
                        { title: 'Monolithic Architecture', text: 'A rigid 10-year-old codebase was slowing down deployment cycles to a crawl.', icon: 'domain_disabled' },
                        { title: 'Scalability Limits', text: 'Inability to auto-scale infrastructure resulted in frequent outages during market spikes.', icon: 'trending_down' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.painCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className={styles.painIcon}>
                                <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{item.icon}</span>
                            </div>
                            <h3 className={styles.painTitle}>{item.title}</h3>
                            <p className={styles.painText}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.challengeRight}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.sectionHeading}>The Challenge</h2>
                        <p className={styles.narrativeText}>
                            Fintech Global was facing a critical bottleneck. Their monolithic architecture, once a robust foundation, had become a prison that stifled growth. As user acquisition soared past the 2 million mark, the system began to buckle under the pressure.
                        </p>
                        <p className={styles.narrativeText}>
                            Business impact was severe: feature rollouts stagnated due to fear of breaking the build, and user retention numbers began to dip correlated directly with performance lag. They needed a radical overhaul—not just a patch.
                        </p>
                        <div className={styles.divider} />
                    </motion.div>
                </div>
            </section>

            {/* Strategic Pivot */}
            <section className={styles.pivotSection}>
                <div className={styles.pivotContent}>
                    <div className={styles.pivotHeader}>
                        <div>
                            <h2 className={styles.pivotTitle}>The Strategic Pivot</h2>
                            <p className={styles.pivotSub}>Moving from a brittle monolith to a resilient, event-driven microservices ecosystem.</p>
                        </div>
                        <div className={styles.diagramLabel}>
                            <span className="material-symbols-outlined">architecture</span> Architecture Diagram v2.0
                        </div>
                    </div>

                    <motion.div
                        className={styles.diagramContainer}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.diagramPlaceholder}>
                            <span className="material-symbols-outlined" style={{ fontSize: 64, opacity: 0.3 }}>hub</span>
                            <span>[Architecture Visual Placeholder]</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Deep Dive */}
            <section className={styles.deepDiveSection}>
                <div>
                    <h3 className={styles.sectionHeading} style={{ fontSize: '1.75rem' }}>Technical Deep Dive</h3>
                    <p className={styles.narrativeText}>
                        We re-engineered the core transaction engine using Go for high concurrency, while orchestrating the entire fleet on Kubernetes across multi-zone AWS clusters.
                    </p>
                </div>

                <div className={styles.techGrid}>
                    {[
                        { title: 'Golang', sub: 'Transaction Engine', icon: 'code', color: '#00ADD8' },
                        { title: 'Kubernetes', sub: 'Orchestration', icon: 'deployed_code', color: '#326CE5' },
                        { title: 'AWS', sub: 'Infrastructure', icon: 'cloud', color: '#FF9900' },
                        { title: 'Kafka', sub: 'Event Streaming', icon: 'hub', color: 'white' },
                        { title: 'Figma', sub: 'Design System', icon: 'draw', color: '#F24E1E' },
                        { title: 'React', sub: 'Frontend', icon: 'data_object', color: '#61DAFB' },
                    ].map((tech, idx) => (
                        <div key={idx} className={styles.techCard}>
                            <div className={styles.techIcon} style={{ background: `${tech.color}1a`, color: tech.color }}>
                                <span className="material-symbols-outlined">{tech.icon}</span>
                            </div>
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 700 }}>{tech.title}</h4>
                                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{tech.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Business Impact */}
            <section className={styles.impactSection}>
                <div style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b7280', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                    Business Impact
                </div>
                <div className={styles.impactGrid}>
                    <div className={styles.impactCard}>
                        <div className={styles.impactValue} style={{ backgroundImage: 'linear-gradient(to bottom right, white, #9ca3af)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>40%</div>
                        <div className={styles.impactLabel}>Reduction in Infra Cost</div>
                        <div className={styles.impactSub}>Optimized resource allocation via auto-scaling.</div>
                    </div>
                    <div className={styles.impactCard}>
                        <div className={styles.impactValue} style={{ backgroundImage: 'linear-gradient(to bottom right, #0d59f2, #60a5fa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>2x</div>
                        <div className={styles.impactLabel}>Faster Load Times</div>
                        <div className={styles.impactSub}>Global content delivery under 100ms.</div>
                    </div>
                    <div className={styles.impactCard}>
                        <div className={styles.impactValue} style={{ backgroundImage: 'linear-gradient(to bottom right, white, #9ca3af)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Zero</div>
                        <div className={styles.impactLabel}>Downtime Migration</div>
                        <div className={styles.impactSub}>Seamless transition for 10M+ users.</div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className={styles.testSection}>
                <div className={styles.quoteCard}>
                    <div className={styles.quoteContent}>
                        <span className="material-symbols-outlined" style={{ fontSize: 48, color: 'rgba(13, 13, 242, 0.5)', marginBottom: '2rem' }}>format_quote</span>
                        <blockquote className={styles.quoteText}>
                            "ZettaB didn't just code; they re-engineered our future. The new architecture isn't just faster—it's a competitive advantage that lets us innovate at the speed of the market."
                        </blockquote>
                        <div className={styles.author}>
                            <div className={styles.authorAvatar} />
                            <div>
                                <div style={{ color: 'white', fontWeight: 700 }}>Marcus Thorne</div>
                                <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>CTO, Fintech Global</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '8rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h2 className={styles.sectionHeading} style={{ marginBottom: '1rem' }}>Ready to Scale?</h2>
                <p className={styles.narrativeText} style={{ maxWidth: '36rem', margin: '0 auto 3rem', textAlign: 'center' }}>
                    See how ZettaB can engineered your digital transformation.
                </p>
                <Link to="/contact">
                    <Button variant="primary" size="lg">Start Your Project</Button>
                </Link>
            </section>
        </div>
    );
};
