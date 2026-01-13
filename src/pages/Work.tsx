import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { SpotlightCard } from '../components/SpotlightCard/SpotlightCard';
import styles from './Work.module.css';

type Category = 'All' | 'UI/UX' | 'DevOps' | 'Digital Marketing' | 'Web Development';

interface Project {
    id: string;
    title: string;
    category: Category;
    image: string;
    description: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: '1',
        title: 'Scaling Momentum',
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        description: 'Refactoring a monolithic architecture into microservices for a high-growth fintech startup.',
        tags: ['AWS', 'Kubernetes', 'Terraform'],
        link: '/work/scaling-momentum'
    },
    {
        id: '2',
        title: 'Neura Health',
        category: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
        description: 'Redesigning the patient intake experience with a focus on accessibility and calm aesthetics.',
        tags: ['Figma', 'React', 'Motion'],
        link: '/work/neura' // Placeholder
    },
    {
        id: '3',
        title: 'Alpha Stream',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        description: 'Building a real-time data visualization dashboard for high-frequency traders.',
        tags: ['Next.js', 'D3.js', 'WebSockets'],
        link: '/work/alpha'
    },
    {
        id: '4',
        title: 'Global Reach',
        category: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80',
        description: 'Automated marketing funnel optimization increasing conversion by 140%.',
        tags: ['HubSpot', 'Zapier', 'Analytics'],
        link: '/work/global'
    },
    {
        id: '5',
        title: 'Secure Vault',
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
        description: 'Zero-trust architecture implementation for a legacy banking system.',
        tags: ['Security', 'Cloud', 'Compliance'],
        link: '/work/vault'
    },
    {
        id: '6',
        title: 'Lumina Fashion',
        category: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
        description: 'Immersive e-commerce experience with 3D product view and virtual try-on.',
        tags: ['Three.js', 'Shopify', 'WebGL'],
        link: '/work/lumina'
    }
];

const categories: Category[] = ['All', 'UI/UX', 'DevOps', 'Digital Marketing', 'Web Development'];

export const Work: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Category>('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.badge}>Our Portfolio</div>
                        <h1 className={styles.title}>
                            Building the Future, <br />
                            <span className={styles.gradientText}>One Project at a Time.</span>
                        </h1>
                        <p className={styles.subtitle}>
                            A curated selection of our most impactful work across engineering, design, and strategy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className={styles.filterSection}>
                <div className={styles.filterContainer}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className={styles.gridSection}>
                <div className={styles.grid}>
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <SpotlightCard className={styles.projectCard}>
                                    <div className={styles.imageWrapper}>
                                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                                        <div className={styles.categoryTag}>{project.category}</div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.tags}>
                                            {project.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>#{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDesc}>{project.description}</p>
                                        <Link to={project.link} className={styles.link}>
                                            View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                                        </Link>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};
