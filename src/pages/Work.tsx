import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Work.module.css';

type Category = 'All Projects' | 'Fintech' | 'SaaS' | 'Infrastructure' | 'Strategic Design';

interface ProjectItem {
    type: 'project';
    id: string;
    title: string;
    category: Category;
    image: string;
    description: string;
    aspectRatio?: 'square' | 'portrait' | 'landscape'; // To toggle aspect ratios
    link: string;
}

interface ImpactItem {
    type: 'impact';
    id: string;
    icon: string;
    value: string;
    label: string;
    theme: 'dark' | 'primary';
    aspectRatio?: 'square' | 'video';
}

type GalleryItem = ProjectItem | ImpactItem;

const galleryItems: GalleryItem[] = [
    {
        type: 'project',
        id: '1',
        title: 'Nexus Core Banking',
        category: 'Fintech',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBobhx6-yxURCeYeslt1UJTuAMokN9tBCASTGk5P1pJtZdH6tCXpYmhUyYzaEhkVaCAmI4tAFED0VTM0FoIj0PXhDKE-2l7jmSExSLatzepKfpguIJbMj8o21svUgR6x7w2-MZLq_kA3qA2xzB16yNheb-H372X3gczlxX3xaJCvQM6fuzuKppd2ZdvFu_HtqtbjiHdHOUSGhkGFooVT1Z86FG786ki_HcH2G4GMSeLqxMJeOE0lyrxu3gxlgwtPVUtSTdLianR-RnJ',
        description: 'Modernizing a legacy monolith into a cloud-native microservices architecture for a Tier-1 bank.',
        aspectRatio: 'portrait',
        link: '/work/nexus'
    },
    {
        type: 'impact',
        id: 'impact1',
        icon: 'speed',
        value: '99.99%',
        label: 'Total System Uptime Across All Enterprise Clients',
        theme: 'primary',
        aspectRatio: 'square'
    },
    {
        type: 'project',
        id: '2',
        title: 'Aether Cloud',
        category: 'Infrastructure',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1lot37JtzcwW_4f35mDYOMtybNYaYPPp9sRQoJvyEhChV2aWRYal1JfT-1Ju53WDvrR-fJsM9o8Bkk2JQ4uPb9dSwRVafgXk58z5NsypBe8Yw_mMWYspmJp4PlKdTW-y13FEuwyoG6iDgjNB-unFssrNlIxufTUbw2ZCAenoeRPhCTTiO1nt1ojkynAzKensPttfqvndTzjN16v5Ly6UQjo-dguv1AHnDIxYf6kknakd8IWo9X_aSVTu7Hfa4_IC93Pj_UXNma0xk',
        description: 'Scaling global infrastructure to support hyper-growth for a silicon valley unicorn.',
        aspectRatio: 'portrait',
        link: '/work/aether'
    },
    {
        type: 'project',
        id: '3',
        title: 'Orbit Pay',
        category: 'SaaS',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMnSZNIeWjbol3byXOO3JJPBM33DiKlOfgyvuhvHW25wH8ujJe0UYJ5xqg7Qb1JgHibtMnvsJG8HmKPgmBdNXUcLsqUU5fnDwDj3EdWd8ooSLJMRaYd0AFz306F0d6XOMyzIoa9ob2BRJnYxxquDkOSsCsA9irPjMNt3oRdv50OjnM_Yd0yYmY8RDtt5Mj70ESi3qfLEhs6zgS52OaWAhNlfpFnoBE2x3x4aY7eXKIAl-_sNOHt5rOWpT_G_bre1AA8o96kB-5V9Cd',
        description: 'Next-gen fintech experience with sub-millisecond transaction processing.',
        aspectRatio: 'square',
        link: '/work/orbit'
    },
    {
        type: 'impact',
        id: 'impact2',
        icon: 'groups',
        value: '10M+',
        label: 'Concurrent Users Managed on Peak Traffic',
        theme: 'dark',
        aspectRatio: 'video'
    },
    {
        type: 'project',
        id: '4',
        title: 'Cipher OS',
        category: 'Strategic Design',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlzgJmqOSDIC0DMuXIFBv1G6jSrfcDd9EWpAspUJcKE7HJ2Hvlw84l8rDwbWAi_ndacjIOwPy3MdhIgjrirebLqYEOUhIYLaXv8sI--Vs97iyWBd08B6rxABXNukCzI0rTQPgVUxgelIeQujlztyZP7EOD_r_I6aGwkhhg7xRZhD8_1zEhCPbr2U4DebSr_o3xx6vswf3e6zVEpXbyIdLN-ONPr_-347jljpdb7B-kfI5VfzxpfBZJxyI_asGomM5yfA40qYYXMPkJ',
        description: 'Reimagining the operating system for decentralized security protocols.',
        aspectRatio: 'portrait',
        link: '/work/cipher'
    },
    {
        type: 'impact',
        id: 'impact3',
        icon: 'bolt',
        value: '40%',
        label: 'Average Reduction in API Latency for Global Endpoints',
        theme: 'primary',
        aspectRatio: 'square'
    },
    {
        type: 'project',
        id: '5',
        title: 'Lumina Analytics',
        category: 'SaaS',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaFUIhRWhrHYuuCYG4Ty7l2186sL8otmlrg2NBgLPpt4t6kqEPBNyEcot6DDfFEWRqo_-nnk9EYIgGgTk0ogj1omX8H0yZZEHvI5p3P-LRNBnJGUmydlwXGcLcdEpJkreDPwTQ4b9PmFuCKdA19UEGKrcbEnyKV7DpRwAu7NCbBlgqhiwpMX8t5aYRnpSmhZxKxT-wP0-5L21Ahx_rAIu3u-WOkLFtqioHIXWvJEVT19S8DDGh6eMBId_-e-Fiy78Rd_L_L18mEU2k',
        description: 'Real-time data visualization engine processing petabytes of market data daily.',
        aspectRatio: 'portrait',
        link: '/work/lumina'
    }
];

const categories: Category[] = ['All Projects', 'Fintech', 'SaaS', 'Infrastructure', 'Strategic Design'];

export const Work: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Category>('All Projects');

    const filteredItems = galleryItems.filter(item => {
        if (activeFilter === 'All Projects') return true;
        if (item.type === 'impact') return true; // Always show impact cards? Or maybe filter them too? The reference seems to mix them. I'll keep them for "All" or filter if logical. Let's show all for now or filter impacts out?
        // Actually, usually impact cards are filler. Let's just return true for Impacts regardless of filter for layout density, or hide them.
        // For accurate filtering:
        return item.category === activeFilter;
    });

    // To mimic the exact masonry layout from the HTML which had a single list, we just map through.
    // However, if we filter, the masonry reflows.
    // If the user wants EXACTLY that HTML structure, I should be careful.
    // The HTML has `masonry-grid` class.

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Selected Works of <br className={styles.desktopBreak} />
                        <span className={styles.highlight}>Digital Engineering</span>
                    </h1>
                    <p className={styles.subtitle}>
                        A look at the complex systems and high-growth platforms we’ve engineered for industry leaders worldwide.
                    </p>
                </div>
            </section>

            {/* Sticky Filter Bar */}
            <div className={styles.stickyFilter}>
                <div className={styles.filterScroll}>
                    <div className={styles.filterContainer}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Masonry Grid */}
            <section className={styles.gridSection}>
                <div className={styles.masonryGrid}>
                    {filteredItems.map((item) => (
                        <div key={item.id} className={styles.masonryItem}>
                            {item.type === 'project' ? (
                                <Link to={item.link} className={`${styles.projectCard} ${styles[item.aspectRatio || 'portrait']}`}>
                                    <div
                                        className={styles.cardBg}
                                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${item.image}')` }}
                                    />
                                    <div className={styles.glassOverlay}>
                                        <span className={styles.cardCategory}>{item.category}</span>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardDesc}>{item.description}</p>
                                        <div className={styles.cardLink}>
                                            <span>View Case Study</span>
                                            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className={`${styles.impactCard} ${styles[`impact${item.theme}`]} ${styles[item.aspectRatio || 'square']}`}>
                                    <span className={`material-symbols-outlined ${styles.impactIcon}`}>{item.icon}</span>
                                    <div>
                                        <div className={styles.impactValue}>{item.value}</div>
                                        <p className={styles.impactLabel}>{item.label}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
