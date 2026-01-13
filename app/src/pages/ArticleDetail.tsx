import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import styles from './ArticleDetail.module.css';
import { getArticleBySlug } from '../data/mockData';

export const ArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);

    const article = getArticleBySlug(slug || '');

    useEffect(() => {
        if (!article) {
            // Handle 404 or redirect
            // navigate('/insights');
        }
        return scrollYProgress.onChange((latest) => {
            setProgress(latest);
        });
    }, [scrollYProgress, article, navigate]);

    if (!article) {
        return <div className={styles.pageWrapper} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'white' }}>Loading or Article Not Found...</div>;
    }

    // Hardcoded check for the "Momentum" article to allow rich unique layout, 
    // otherwise would render a generic body.
    const isMomentumArticle = slug === 'architecture-of-momentum';

    return (
        <div className={styles.pageWrapper}>
            {/* Progress Bar */}
            <div className={styles.progressBar} style={{ width: `${progress * 100}%` }} />

            {/* Hero */}
            <header className={styles.hero}>
                <div className={styles.heroBackground} style={{ backgroundImage: `url(${article.image})` }} />
                <div className={styles.heroOverlay} />

                <motion.div
                    className={styles.heroCard}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.metaRow}>
                        <span className={styles.tag}>{article.type}</span>
                        <span className={styles.readTime}>
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>schedule</span> {article.readTime}
                        </span>
                    </div>
                    <h1 className={styles.title}>{article.title}</h1>

                    <div className={styles.authorRow}>
                        <div className={styles.authorInfo}>
                            <div className={styles.avatar}>ZB</div>
                            <div>
                                <div className={styles.authorName}>ZettaB Engineering</div>
                                <div className={styles.publishDate}>October 24, 2023</div>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.actionBtn}>
                                <span className="material-symbols-outlined">ios_share</span>
                            </button>
                            <button className={styles.actionBtn}>
                                <span className="material-symbols-outlined">bookmark_border</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* Content Layout */}
            <div className={styles.layoutContainer}>
                <div className={styles.grid}>
                    {/* Left Sidebar (TOC) */}
                    <aside className={styles.sidebarLeft}>
                        {isMomentumArticle && (
                            <div className={styles.stickyContent}>
                                <span className={styles.tocTitle}>Contents</span>
                                <nav className={styles.tocNav}>
                                    <a href="#intro" className={`${styles.tocLink} ${styles.tocLinkActive}`}>Introduction</a>
                                    <a href="#clarity" className={styles.tocLink}>Clarity Over Code</a>
                                    <a href="#velocity" className={styles.tocLink}>Defining Velocity</a>
                                    <a href="#debt" className={styles.tocLink}>The Debt Trap</a>
                                    <a href="#takeaway" className={styles.tocLink}>Strategic Takeaway</a>
                                </nav>
                            </div>
                        )}
                    </aside>

                    {/* Article Body */}
                    <article className={styles.articleBody}>
                        {isMomentumArticle ? (
                            <>
                                <div id="intro">
                                    <p className={styles.introPara}>
                                        <span className={styles.firstLetter}>I</span>n the world of digital engineering, velocity is often mistaken for progress. True momentum requires mass times velocity—architectural weight behind your movement.
                                    </p>
                                    <p>
                                        We’ve all seen it: the greenfield project that starts with explosive speed. Features ship daily, demos are dazzling, and morale is high. Then, around the six-month mark, the gears begin to grind. Velocity plummets. Every new feature breaks two existing ones. The team that once sprinted is now wading through concrete.
                                    </p>
                                </div>

                                <h2 id="clarity" className={styles.articleHeading}>Clarity Over Code</h2>
                                <p>
                                    Most projects fail not because of technical debt, but because of clarity debt. When the strategic vision blurs, the codebase follows suit. The architecture of momentum isn't about microservices, monorepos, or the latest JS framework—it's about aligning the structural integrity of your software with the strategic cadence of your business.
                                </p>

                                <div className={styles.pullQuote}>
                                    "Momentum isn't just speed; it's mass times velocity. You need architectural weight behind your movement."
                                </div>

                                <p>
                                    To regain momentum, engineering leaders must shift focus from output to outcome. This requires a rigorous re-evaluation of the foundational assumptions made during the prototyping phase.
                                </p>

                                <h3 id="velocity" className={styles.articleSubHeading}>Defining Velocity in Scale</h3>
                                <p>
                                    Scaling requires a different set of physics than starting. The lightweight structures that allowed you to pivot quickly in the early days become liabilities when you need to support millions of users.
                                </p>

                                <div className={styles.bulletList}>
                                    <div className={styles.bulletItem}>
                                        <div className={styles.bulletDot} />
                                        <div><strong style={{ color: 'white' }}>Decouple Decision Making:</strong> Architecture should enable teams to make decisions independently, reducing coordination overhead.</div>
                                    </div>
                                    <div className={styles.bulletItem}>
                                        <div className={styles.bulletDot} />
                                        <div><strong style={{ color: 'white' }}>Codify Standards:</strong> Automate style guides and architectural patterns so developers spend energy on logic, not boilerplate.</div>
                                    </div>
                                    <div className={styles.bulletItem}>
                                        <div className={styles.bulletDot} />
                                        <div><strong style={{ color: 'white' }}>Observability First:</strong> You cannot improve speed if you cannot see where the friction is. Build metrics in from day one.</div>
                                    </div>
                                </div>

                                <p id="debt">
                                    The transition from "move fast and break things" to "move fast with stable infrastructure" is the most dangerous chasm for a growing tech company. It is where technical debt compounds into product paralysis.
                                </p>

                                <div id="takeaway" className={styles.takeawayBox}>
                                    <div className={styles.takeawayBar} />
                                    <div className={styles.takeawayLabel}>
                                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>lightbulb</span> Strategic Insight
                                    </div>
                                    <p className={styles.takeawayText}>
                                        Don't attempt to scale until your foundation is solid. It is cheaper to rebuild a prototype from scratch than to refactor a monolithic ball of mud while it's in production. Pause, architect, then accelerate.
                                    </p>
                                </div>
                            </>
                        ) : (
                            // Generic Fallback View for other articles
                            <div id="intro">
                                <p className={styles.introPara}>
                                    <span className={styles.firstLetter}>{article.excerpt.charAt(0)}</span>{article.excerpt.slice(1)}
                                </p>
                                <p>
                                    [Full content for "{article.title}" would appear here. This is a placeholder for the generic article template.]
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        )}
                    </article>

                    {/* Right Sidebar (Share) */}
                    <aside className={styles.sidebarRight}>
                        <div className={styles.stickyContent}>
                            <div className={styles.shareContainer}>
                                <span className={styles.shareLabel}>Share</span>
                                <button className={styles.shareBtn}>
                                    <svg style={{ width: 20, height: 20, fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                </button>
                                <button className={styles.shareBtn}>
                                    <svg style={{ width: 20, height: 20, fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                </button>
                                <button className={styles.shareBtn}>
                                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>link</span>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Newsletter */}
            <section className={styles.newsletter}>
                <div style={{ maxWidth: '40rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--pk-color-primary)', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase' }}>Stay Ahead</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>Join our network of innovators</h2>
                    <p style={{ color: '#9da6b9', marginBottom: '1rem' }}>Get monthly strategic insights and engineering deep-dives delivered straight to your inbox.</p>
                    <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                        <input style={{ background: '#1c1f27', border: '1px solid #3b4354', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: 'white', flex: 1 }} placeholder="work@email.com" />
                        <Button variant="primary">Subscribe</Button>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className={styles.relatedSection}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>Related Insights</h3>
                    <a href="/insights" style={{ color: 'var(--pk-color-primary)', fontSize: '0.875rem', fontWeight: 500 }}>View all articles &rarr;</a>
                </div>
                <div className={styles.relatedGrid}>
                    {[
                        { title: 'The Monolith Myth: When Microservices Are a Mistake', tag: 'Engineering', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV3ddEsWatP4iWXEA3RmeY1F0AMsUF6vGu4K5AJtMcM5pVyyWc32LO71FaAc1QN3Oe4L_ZWddNjDUVOWdnKnyLouqb_268lMopqAUdc3ip8SeI0tVZhKTlsZEscELGAhL4JGqfAaH52UfgGA9YgosUV9w5rHyq5jILjkhGy_s-0p5Q6xMPEuToRt2iEyT8HiTI1aFvTigZ8oFCllYMsoUrC4ELvYF1w1ZHDxKnIWs8Uv2J1907GsLnM0oa_abraCLJ2X-pa6nZfp8H' },
                        { title: 'Designing the AI Workforce: Agents vs. Assistants', tag: 'AI Strategy', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLYiWpphjhpFQk2mSj64OUFh4KI3SDEaQKQygiGlT5zWUtbViRuHliG8yuhjKz6B1A0e_dZmG5MmTFfqX3zQOZ3UPh68gG7pTZfv5qifbLmYWvjLOBSwO91FRzcejpDTl1CwRuvME598MBsuboq77kKLcQQPzpdWU6NBb4sJBEK7CVlCcv3VM5AhiGtlwqzWcJG-qnl0sYqd-PtxbHxjhy49dmh08Hf7UVRrUdyBuWwsG8TTMULB2sE5KReJSeusNe7cXG27Hvf_JW' },
                        { title: 'Strangler Fig Pattern: A Practical Guide to Modernization', tag: 'Legacy Systems', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVFi3tBzMYbxV_yL2nMAr174dRbp1D3HW8kwvZjePffGgrGfXfm_KXuQDHpHOO7fz_4IoFZhmhJVdFCR__H8aKKDYFIPGPFSubDnrMvvngKJpG8MARuevk9zjjgPty6JuwpwdMyx4zUyHLRPe7-bgOKc7ZoCYTx7FTn5_v2MAw7hLuj70kiPk2UMLkENcDe3PzowjIvOwzgVOvHZErA3ZxEPQphWvbtB1WpskLNhrcFyyX08XazrjSsJQjRqeQ35aDdUETlmnsJi9z' },
                    ].map((item, idx) => (
                        <div key={idx} className={styles.relatedCard}>
                            <div className={styles.relatedImage} style={{ backgroundImage: `url(${item.image})` }} />
                            <div className={styles.relatedContent}>
                                <span className={styles.relatedTag}>{item.tag}</span>
                                <h4 style={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.3 }}>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
