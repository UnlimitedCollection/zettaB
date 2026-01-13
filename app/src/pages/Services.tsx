import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

type IntentType = 'launch' | 'fix' | 'scale';

interface ServiceDetail {
    id: string;
    title: string;
    sub: string;
    desc: string;
    outcomes: string[];
    stack: string[];
    timeline: string;
    icon: string;
}

const SERVICES_DATA: Record<IntentType, ServiceDetail[]> = {
    launch: [
        {
            id: 'custom-soft',
            title: 'Custom Software Engineering',
            sub: 'Core Service for Launches',
            desc: 'We build scalable, secure, and high-performance applications tailored to your unique business requirements. From initial architecture to final deployment.',
            outcomes: ['Faster Time-to-Market', 'IP Ownership', 'Scalable Architecture'],
            stack: ['React/Next.js', 'Node.js', 'Python', 'PostgreSQL'],
            timeline: '3 - 6 Months',
            icon: 'code_blocks'
        },
        {
            id: 'product-design',
            title: 'UI/UX Product Design',
            sub: 'Prototyping & User Research',
            desc: 'User-centric design processes that validate your ideas before writing a single line of code.',
            outcomes: ['Validated MVP', 'High Conversion', 'User Delight'],
            stack: ['Figma', 'Prototyping', 'User Testing'],
            timeline: '4 - 8 Weeks',
            icon: 'design_services'
        },
        {
            id: 'mobile-dev',
            title: 'Mobile Application',
            sub: 'iOS & Android Native Solutions',
            desc: 'Native or Cross-platform solutions designed for the mobile-first world.',
            outcomes: ['App Store Approval', 'High Performance', 'Offline Capabilities'],
            stack: ['React Native', 'Swift', 'Kotlin'],
            timeline: '3 - 5 Months',
            icon: 'smartphone'
        }
    ],
    fix: [
        {
            id: 'legacy-modern',
            title: 'Legacy Modernization',
            sub: 'Refactor & Replatform',
            desc: 'Transforming aging monoliths into modern, microservices-based architectures without disrupting business operations.',
            outcomes: ['Reduced Tech Debt', 'Improved Security', 'Maintainable Codebase'],
            stack: ['Cloud Migration', 'Microservices', 'Docker'],
            timeline: '6 - 12 Months',
            icon: 'construction'
        },
        {
            id: 'perf-audit',
            title: 'Performance Audit',
            sub: 'Deep Dive Analysis',
            desc: 'Comprehensive analysis of your system bottlenecks, database queries, and frontend rendering.',
            outcomes: ['Faster Load Times', 'Reduced Server Costs', 'Better UX'],
            stack: ['New Relic', 'Datadog', 'Profiling'],
            timeline: '2 - 4 Weeks',
            icon: 'speed'
        }
    ],
    scale: [
        {
            id: 'cloud-infra',
            title: 'Cloud Infrastructure',
            sub: 'AWS / Azure / GCP',
            desc: 'Designing robust cloud architectures that scale automatically with your user base.',
            outcomes: ['99.99% Uptime', 'Auto-scaling', 'Global Edge Delivery'],
            stack: ['Terraform', 'Kubernetes', 'AWS'],
            timeline: 'Ongoing',
            icon: 'cloud'
        },
        {
            id: 'devops',
            title: 'DevOps Automation',
            sub: 'CI/CD Pipelines',
            desc: 'Automating the path to production to enable multiple deploys per day with confidence.',
            outcomes: ['Faster Releases', 'Fewer Bugs', 'Standardized Env'],
            stack: ['GitHub Actions', 'ArgoCD', 'Jest'],
            timeline: '1 - 3 Months',
            icon: 'settings_suggest'
        }
    ]
};

export const Services: React.FC = () => {
    const [activeIntent, setActiveIntent] = useState<IntentType>('launch');
    const [expandedService, setExpandedService] = useState<string | null>('custom-soft');

    const toggleService = (id: string) => {
        setExpandedService(expandedService === id ? null : id);
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.heroBadge}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', marginRight: 8 }} />
                            Premium Digital Engineering
                        </div>
                        <h1 className={styles.heroTitle}>
                            Solutions Built Around <br />
                            <span className={styles.titleGradient}>Your Business Reality</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            We don't just write code. We align technology with your strategic intent. Choose what you need today — scale tomorrow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intent Selector */}
            <section className={styles.intentSection}>
                <div className={styles.intentHeader}>
                    <h3 className={styles.intentTitle}>What is your primary goal?</h3>
                    <p className={styles.intentSubtitle}>Select an outcome to filter relevant services</p>
                </div>

                <div className={styles.intentGrid}>
                    <div
                        className={`${styles.intentCard} ${activeIntent === 'launch' ? styles.activeCard : ''}`}
                        onClick={() => { setActiveIntent('launch'); setExpandedService('custom-soft'); }}
                    >
                        <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                        <div className={styles.intentIcon}>
                            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>rocket_launch</span>
                        </div>
                        <h4 className={styles.cardHeading}>Launch a New Product</h4>
                        <p className={styles.cardBody}>Turn your vision into a market-ready MVP. Strategy, Design, and Core Development.</p>
                        <div className={styles.tagContainer}>
                            <span className={styles.tag}>MVP</span>
                            <span className={styles.tag}>Go-to-Market</span>
                        </div>
                    </div>

                    <div
                        className={`${styles.intentCard} ${activeIntent === 'fix' ? styles.activeCard : ''}`}
                        onClick={() => { setActiveIntent('fix'); setExpandedService('legacy-modern'); }}
                    >
                        <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                        <div className={styles.intentIcon}>
                            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>build</span>
                        </div>
                        <h4 className={styles.cardHeading}>Fix an Existing System</h4>
                        <p className={styles.cardBody}>Modernize legacy code, improve performance, and eliminate technical debt.</p>
                        <div className={styles.tagContainer}>
                            <span className={styles.tag}>Refactoring</span>
                            <span className={styles.tag}>Audit</span>
                        </div>
                    </div>

                    <div
                        className={`${styles.intentCard} ${activeIntent === 'scale' ? styles.activeCard : ''}`}
                        onClick={() => { setActiveIntent('scale'); setExpandedService('cloud-infra'); }}
                    >
                        <span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span>
                        <div className={styles.intentIcon}>
                            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>monitoring</span>
                        </div>
                        <h4 className={styles.cardHeading}>Scale Faster</h4>
                        <p className={styles.cardBody}>Expand your infrastructure, automate DevOps, and prepare for global traffic.</p>
                        <div className={styles.tagContainer}>
                            <span className={styles.tag}>Cloud</span>
                            <span className={styles.tag}>DevOps</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service List */}
            <section className={styles.serviceListSection}>
                <div className={styles.listHeader}>
                    <h3 className={styles.listTitle}>Recommended Services for "{activeIntent === 'launch' ? 'Launch' : activeIntent === 'fix' ? 'Fixing' : 'Scaling'}"</h3>
                    <div className={styles.filterCount}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>
                        {SERVICES_DATA[activeIntent].length} Services Found
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIntent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {SERVICES_DATA[activeIntent].map((service) => (
                            <div
                                key={service.id}
                                className={`${styles.serviceCard} ${expandedService === service.id ? styles.serviceCardExpanded : ''} ${styles.serviceCardWrapper}`}
                                onClick={() => toggleService(service.id)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.headerLeft}>
                                        <div className={styles.serviceIcon}>
                                            <span className="material-symbols-outlined">{service.icon}</span>
                                        </div>
                                        <div className={styles.serviceTitle}>
                                            <span className={styles.titleMain}>{service.title}</span>
                                            <span className={styles.titleSub}>{service.sub}</span>
                                        </div>
                                    </div>
                                    <span className={`material-symbols-outlined ${styles.expandIcon}`}>expand_more</span>
                                </div>

                                <AnimatePresence>
                                    {expandedService === service.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className={styles.cardContent}>
                                                <p className={styles.description}>{service.desc}</p>

                                                <div className={styles.detailGrid}>
                                                    <div className={styles.detailCol}>
                                                        <div className={styles.detailLabel}>
                                                            <span className={`material-symbols-outlined ${styles.detailLabelIcon}`}>verified</span> Outcomes
                                                        </div>
                                                        <ul className={styles.outcomeList}>
                                                            {service.outcomes.map((outcome, idx) => (
                                                                <li key={idx} className={styles.outcomeItem}>
                                                                    <span className={styles.dot} /> {outcome}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className={styles.detailCol}>
                                                        <div className={styles.detailLabel}>
                                                            <span className={`material-symbols-outlined ${styles.detailLabelIcon}`}>layers</span> Tech Stack
                                                        </div>
                                                        <div className={styles.stackTags}>
                                                            {service.stack.map((tag, idx) => (
                                                                <span key={idx} className={styles.stackTag}>{tag}</span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className={styles.detailCol}>
                                                        <div className={styles.detailLabel}>
                                                            <span className={`material-symbols-outlined ${styles.detailLabelIcon}`}>schedule</span> Timeline
                                                        </div>
                                                        <div>
                                                            <div className={styles.timelineVal}>{service.timeline}</div>
                                                            <div className={styles.timelineSub}>Typical cycle</div>
                                                        </div>
                                                        <Link to="/work/scaling-momentum" className={styles.caseStudyBtn}>
                                                            View Case Study <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className={styles.ctaSect}>
                    <div className={styles.ctaContent}>
                        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Not sure what you need?</p>
                        <Link to="/contact" className={styles.ctaLink}>
                            Schedule a Discovery Call <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
