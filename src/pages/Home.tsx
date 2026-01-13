/* ... Previous content is imported ... */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import { InfiniteMarquee } from '../components/InfiniteMarquee/InfiniteMarquee';
import styles from './Home.module.css';

export const Home: React.FC = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.glowPrimary} />
                    <div className={styles.glowSecondary} />
                    <div className={styles.gridOverlay} />
                </div>

                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className={styles.statusBadge}>
                            <span className={styles.statusDot} />
                            <span className={styles.statusText}>Accepting New Partnerships</span>
                        </div>

                        <h1 className={styles.heading}>
                            We Don’t Just Build Software. We Engineer <span className={styles.headingAccent}>Business Momentum.</span>
                        </h1>

                        <p className={styles.description}>
                            Premium digital engineering for ambitious companies ready to scale. We bridge the gap between visionary strategy and flawless execution.
                        </p>

                        <div className={styles.heroActions}>
                            <Link to="/contact">
                                <Button variant="primary" size="lg" rightIcon={<span className="material-symbols-outlined">arrow_forward</span>}>
                                    Start a Conversation
                                </Button>
                            </Link>
                            <Link to="/methodology">
                                <Button variant="secondary" size="lg">
                                    See How We Think
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Abstract Visual */}
                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className={styles.visualContainer}>
                            {/* Floating Nodes */}
                            <motion.div
                                className={`${styles.floatNode} ${styles.codeNode}`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--pk-color-primary)' }}>code_blocks</span>
                            </motion.div>

                            <motion.div
                                className={`${styles.floatNode} ${styles.analyticsNode}`}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#c084fc' }}>analytics</span>
                            </motion.div>

                            <motion.div
                                className={`${styles.floatNode} ${styles.serverNode}`}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fbbf24' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '180px' }}>
                                    <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 2, width: '100%' }} />
                                    <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 2, width: '75%' }} />
                                    <div style={{ height: 8, background: 'rgba(19, 91, 236, 0.4)', borderRadius: 2, width: '50%', marginTop: '4px' }} />
                                </div>
                            </motion.div>

                            {/* Connecting Lines SVG */}
                            <svg className={styles.connectionSvg} viewBox="0 0 600 600">
                                <path d="M100,400 Q250,300 400,200" fill="none" stroke="url(#lineGradient)" strokeDasharray="5,5" strokeWidth="2" />
                                <path d="M300,300 L500,150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" />
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#135bec" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#135bec" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#135bec" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem Awareness Section */}
            <section className={styles.problemSection}>
                <div className={styles.sectionHeader}>
                    <motion.div
                        className={styles.headerContent}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.sectionTitle}>The Old Way is <span className={styles.accentRed}>Broken</span>.</h2>
                        <p className={styles.sectionDesc}>
                            In today's hyper-competitive landscape, off-the-shelf solutions and fragmented teams create bottlenecks that stifle growth. You need a partner that sees the whole picture.
                        </p>
                    </motion.div>
                    <div className={styles.divider}>
                        <div className={styles.line} />
                    </div>
                </div>

                <div className={styles.grid}>
                    {[
                        { icon: 'link_off', title: 'Fragmented Software', desc: 'Disconnected systems create data silos, forcing manual workarounds and leading to critical information loss.' },
                        { icon: 'trending_down', title: 'Scalability Issues', desc: 'Rigid legacy architecture that crumbles under high user load, resulting in downtime during critical growth.' },
                        { icon: 'speed', title: 'Slow Velocity', desc: 'Bloated engineering cycles that lag behind market demands, causing you to miss opportunities.' }
                    ].map((item, index) => (
                        <SpotlightCard
                            key={index}
                            className={styles.problemCard}
                            spotlightColor="rgba(239, 68, 68, 0.15)"
                        >
                            <div className={styles.cardIcon}>
                                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{item.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* Positioning Section */}
            <section className={styles.positioningSection}>
                {/* Background Decor */}
                <div style={{ position: 'absolute', right: 0, bottom: 0, width: '500px', height: '500px', background: 'rgba(19, 91, 236, 0.05)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }}></div>

                <div className={styles.positioningContent}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.positioningBadge}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified</span>
                            The ZettaB Difference
                        </div>
                        <h2 className={styles.positioningTitle}>
                            ZettaB Is Your <br />
                            <span className={styles.gradientText}>Technical Growth Partner</span>
                        </h2>
                        <p className={styles.positioningDesc}>
                            We are not a dev shop. We are a strategic engineering firm. We blend high-level business strategy, world-class design, and precision engineering to solve your most complex problems.
                        </p>

                        <div className={styles.workflowGraphic}>
                            <div className={styles.workflowBox}>
                                <div className={styles.workflowInner}>
                                    <div className={styles.workflowSteps}>
                                        <div className={styles.workflowStep}>
                                            <div className={styles.stepTitle}>Strategy</div>
                                            <div className={styles.stepSub}>Foundation</div>
                                        </div>
                                        <span className={`material-symbols-outlined ${styles.plusIcon}`}>add</span>
                                        <div className={styles.workflowStep}>
                                            <div className={styles.stepTitle}>Design</div>
                                            <div className={styles.stepSub}>Experience</div>
                                        </div>
                                        <span className={`material-symbols-outlined ${styles.plusIcon}`}>add</span>
                                        <div className={styles.workflowStep}>
                                            <div className={styles.stepTitle}>Eng</div>
                                            <div className={styles.stepSub}>Execution</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className={styles.ecosystemSection}>
                <div style={{ maxWidth: '80rem', margin: '0 auto', marginBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                    <h2 className={styles.sectionTitle}>Capability Ecosystem</h2>
                    <p className={styles.sectionDesc} style={{ maxWidth: '40rem' }}>
                        An integrated approach to digital transformation. We don't just write code; we build systems that thrive.
                    </p>
                </div>

                <div className={styles.ecosystemGrid}>
                    {[
                        {
                            title: 'Strategy & Consulting',
                            desc: 'Aligning technology investments with tangible business goals to ensure ROI from day one.',
                            icon: 'lightbulb',
                            color: 'primary',
                            subItems: ['Digital Transformation', 'Tech Stack Audits']
                        },
                        {
                            title: 'UI/UX Design',
                            desc: 'Crafting intuitive, premium user experiences that convert visitors into loyal advocates.',
                            icon: 'brush',
                            color: 'purple',
                            subItems: ['Product Design', 'Design Systems']
                        },
                        {
                            title: 'Web & Mobile Engineering',
                            desc: 'Building robust, scalable applications using cutting-edge frameworks and clean code.',
                            icon: 'terminal',
                            color: 'blue',
                            subItems: ['Full Stack Development', 'Native & Cross-Platform']
                        },
                        {
                            title: 'Cloud & DevOps',
                            desc: 'Automating infrastructure for reliability, security, and infinite scalability.',
                            icon: 'cloud_upload',
                            color: 'cyan'
                        },
                        {
                            title: 'Growth & Optimization',
                            desc: 'Data-driven iteration for maximum ROI. We analyze user behavior to constantly improve performance.',
                            icon: 'monitoring',
                            color: 'emerald',
                            span: 2,
                            hasChart: true
                        }
                    ].map((item, idx) => (
                        <SpotlightCard
                            key={idx}
                            className={`${styles.ecoCard} ${item.span ? styles.colSpan2 : ''}`}
                            spotlightColor={item.color === 'primary' ? 'rgba(19, 91, 236, 0.2)' : item.color === 'purple' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'}
                        >
                            <div className={styles.ecoContentWrapper}>
                                <div className={styles.ecoContent}>
                                    <div className={styles.ecoIcon} style={{ color: item.color === 'primary' ? 'var(--pk-color-primary)' : item.color === 'purple' ? '#a855f7' : item.color === 'cyan' ? '#06b6d4' : item.color === 'emerald' ? '#10b981' : '#3b82f6' }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{item.icon}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardText} style={{ marginBottom: item.subItems ? '2rem' : 0 }}>{item.desc}</p>

                                    {item.subItems && (
                                        <ul className={styles.ecoList}>
                                            {item.subItems.map((sub, sIdx) => (
                                                <li key={sIdx} className={styles.ecoListItem}>
                                                    <span className={styles.bullet}>•</span> {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {item.hasChart && (
                                    <div className={styles.chartVisual}>
                                        <div className={styles.chartContainer}>
                                            <div className={styles.chartBar} style={{ height: '30%', animationDelay: '0ms' }} />
                                            <div className={styles.chartBar} style={{ height: '45%', animationDelay: '100ms' }} />
                                            <div className={styles.chartBar} style={{ height: '35%', animationDelay: '200ms' }} />
                                            <div className={styles.chartBar} style={{ height: '60%', animationDelay: '300ms' }} />
                                            <div className={styles.chartBar} style={{ height: '80%', animationDelay: '400ms' }} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* Trust Section */}
            <section className={styles.trustSection}>
                <div className={styles.trustGrid}>
                    <div className={styles.trustContent}>
                        <h2 className={styles.sectionTitle}>Engineered for <br /> <span className={styles.headingAccent}>Longevity</span></h2>
                        <p className={styles.sectionDesc} style={{ marginBottom: '2rem' }}>
                            We don't just launch and leave. We build partnerships that last. Our agile methodology and transparent communication ensure you are always in control.
                        </p>
                        <Button variant="ghost" rightIcon={<span className="material-symbols-outlined">arrow_forward</span>} style={{ paddingLeft: 0, fontWeight: 700 }}>
                            Read Case Studies
                        </Button>
                    </div>

                    <div className={styles.statsGrid}>
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: '98%', label: 'Client Retention' },
                            { value: '50+', label: 'Enterprise Launches' },
                            { value: '24/7', label: 'Support & Monitor', highlight: true }
                        ].map((stat, idx) => (
                            <div key={idx} className={styles.statCard} style={stat.highlight ? { background: 'linear-gradient(135deg, var(--pk-color-surface-card), rgba(19, 91, 236, 0.1))' } : {}}>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.marqueeSection}>
                        <p className={styles.marqueeLabel}>Trusted Technologies</p>
                        <InfiniteMarquee speed={30}>
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Figma'].map((tech, i) => (
                                <span key={i} className={styles.techTag}>{tech}</span>
                            ))}
                        </InfiniteMarquee>
                    </div>
                </div>
            </section>
        </div>
    );
};
