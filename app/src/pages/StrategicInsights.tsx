import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import styles from './StrategicInsights.module.css';
import { ARTICLES, FEATURED_ARTICLE } from '../data/mockData';

const FILTERS = ['All Insights', 'UX Insights', 'Tech Decisions', 'Startup Lessons', 'Engineering Culture', 'Case Studies'];

export const StrategicInsights: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Insights');

    const filteredArticles = activeFilter === 'All Insights'
        ? ARTICLES
        : ARTICLES.filter(art => art.type === activeFilter);

    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Ideas, lessons, and perspectives from building real software.
                </motion.h1>
                <motion.p
                    className={styles.heroDesc}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Deep dives into engineering, design, and strategy for the modern digital enterprise.
                </motion.p>
            </section>

            {/* Filter Bar */}
            <section className={styles.filterSection}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterList}>
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                className={`${styles.filterChip} ${activeFilter === filter ? styles.chipActive : styles.chipInactive}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className={styles.contentArea}>
                {/* Featured (Only show if All or Tech Decisions is active, for demo) */}
                {(activeFilter === 'All Insights' || activeFilter === 'Tech Decisions') && (
                    <motion.div
                        className={styles.featuredCard}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.featuredImageWrapper}>
                            <div
                                className={styles.featuredImage}
                                style={{ backgroundImage: 'linear-gradient(45deg, #111 0%, #0d0d26 100%)' }}
                            />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.featuredMeta}>
                                <span className={styles.tag}>{FEATURED_ARTICLE.type}</span>
                                <span className={styles.readTime}>Featured • {FEATURED_ARTICLE.readTime}</span>
                            </div>
                            <h2 className={styles.featuredTitle}>{FEATURED_ARTICLE.title}</h2>
                            <p className={styles.featuredExcerpt}>
                                {FEATURED_ARTICLE.excerpt}
                            </p>
                            <Link to={`/insights/${FEATURED_ARTICLE.slug}`}>
                                <Button variant="ghost" style={{ paddingLeft: 0, marginTop: '1rem', color: 'white' }}>
                                    Read Article <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}

                {/* Grid */}
                <div className={styles.grid}>
                    {filteredArticles.map((article, idx) => (
                        <motion.article
                            key={article.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className={styles.cardImageWrapper}>
                                <div
                                    className={styles.cardImage}
                                    style={{ backgroundImage: article.image }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--pk-color-primary)', textTransform: 'uppercase' }}>{article.type}</span>
                                    <span style={{ fontSize: '0.75rem', color: '#9da6b9' }}>{article.readTime}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{article.title}</h3>
                                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <section className={styles.newsletterSection}>
                <div className={styles.nlContainer}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h2 className={styles.nlTitle}>Thinking Partner to the world's best.</h2>
                        <p style={{ color: '#9da6b9' }}>Get our latest thinking on software, design, and strategy delivered straight to your inbox.</p>
                    </div>
                    <div className={styles.nlForm}>
                        <input className={styles.nlInput} placeholder="Enter your email address" />
                        <div className={styles.nlButton}>
                            <Button variant="primary">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
