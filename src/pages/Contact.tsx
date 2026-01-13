import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        vision: '',
        timeline: 'asap',
        budget: 'medium',
        name: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Background */}
            <div className={styles.ambientBackground}>
                <div className={styles.glowTop} />
                <div className={`${styles.driftOrb} ${styles.orb1}`} />
                <div className={`${styles.driftOrb} ${styles.orb2}`} />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>
                        Tell Us What You’re <br />
                        <span className={styles.gradientText}>Trying to Build</span>
                    </h1>
                    <p className={styles.subtitle}>
                        We’ll help you shape your vision into a clear, executable engineering plan. No friction, just focus.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    className={styles.formPanel}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Vision */}
                    <div className={styles.formSection}>
                        <label className={styles.label}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1.125rem', color: 'var(--pk-color-primary)' }}>edit_note</span>
                            Project Vision
                        </label>
                        <div className={styles.textAreaContainer}>
                            <textarea
                                name="vision"
                                className={styles.textArea}
                                placeholder="I'm building a..."
                                value={formData.vision}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.gridCols2}>
                        {/* Timeline */}
                        <div className={styles.formSection}>
                            <label className={styles.label}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1.125rem', color: 'var(--pk-color-primary)' }}>schedule</span>
                                Timeline
                            </label>
                            <div className={styles.radioGroup}>
                                {[
                                    { value: 'asap', label: 'ASAP (Immediate Start)' },
                                    { value: '3m', label: '< 3 Months' },
                                    { value: '6m', label: '6+ Months' }
                                ].map(opt => (
                                    <label key={opt.value} className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="timeline"
                                            value={opt.value}
                                            checked={formData.timeline === opt.value}
                                            onChange={handleChange}
                                            className={styles.radioInput}
                                        />
                                        <div className={styles.radioBox}>
                                            <span>{opt.label}</span>
                                            <span className={`material-symbols-outlined ${styles.checkIcon}`} style={{ fontSize: '1.125rem' }}>check_circle</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Budget */}
                        <div className={styles.formSection}>
                            <label className={styles.label}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1.125rem', color: 'var(--pk-color-primary)' }}>payments</span>
                                Budget Est.
                            </label>
                            <div className={styles.radioGroup}>
                                {[
                                    { value: 'small', label: '< $50k' },
                                    { value: 'medium', label: '$50k - $200k' },
                                    { value: 'large', label: '$200k+' }
                                ].map(opt => (
                                    <label key={opt.value} className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="budget"
                                            value={opt.value}
                                            checked={formData.budget === opt.value}
                                            onChange={handleChange}
                                            className={styles.radioInput}
                                        />
                                        <div className={styles.radioBox}>
                                            <span>{opt.label}</span>
                                            <span className={`material-symbols-outlined ${styles.checkIcon}`} style={{ fontSize: '1.125rem' }}>check_circle</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.1)', width: '100%', margin: '1.5rem 0' }} />

                    <div className={styles.gridCols2}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label className={styles.label} style={{ fontSize: '0.875rem', fontWeight: 500, color: '#9ca3af', textTransform: 'none', letterSpacing: 0 }}>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.textInput}
                                placeholder="e.g. Alex Chen"
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label className={styles.label} style={{ fontSize: '0.875rem', fontWeight: 500, color: '#9ca3af', textTransform: 'none', letterSpacing: 0 }}>Work Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.textInput}
                                placeholder="alex@company.com"
                            />
                        </div>
                    </div>

                    <button className={styles.submitBtn}>
                        <span>Start the Conversation</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
                    </button>
                    <p className={styles.privacyText}>By submitting, you agree to our privacy policy. We respect your inbox.</p>
                </motion.div>

                {/* Steps */}
                <div className={styles.stepsSection}>
                    <div className={styles.stepsHeader}>
                        <div className={styles.stepsLine} />
                        <h3 className={styles.stepsTitle}>The Road to Clarity</h3>
                        <div className={styles.stepsLine} />
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepsConnector} />
                        {[
                            { title: 'We Review Request', desc: "Our engineering leads analyze your requirements to ensure we're the perfect fit.", icon: 'mark_email_read' },
                            { title: 'Clarity Call', desc: 'A 30-minute deep dive to align on goals, technical constraints, and initial scope.', icon: 'call' },
                            { title: 'Proposal & Next Steps', desc: 'We deliver a transparent roadmap, budget estimate, and execution strategy.', icon: 'rocket_launch' }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.stepCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                            >
                                <div className={styles.stepIconBox}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--pk-color-primary)' }}>{step.icon}</span>
                                </div>
                                <h4 className={styles.stepName}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
