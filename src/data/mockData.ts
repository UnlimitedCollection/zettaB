export interface Article {
    id: string; // Changed to string for better flexibility
    type: string;
    title: string;
    excerpt: string;
    readTime: string;
    image: string;
    slug: string; // Added slug for routing
    content?: string; // Optional for full content
    author?: {
        name: string;
        role?: string;
        avatar?: string;
    };
    date?: string;
}

export const ARTICLES: Article[] = [
    {
        id: '1',
        type: 'UX Insights',
        title: 'Designing for Trust in Fintech',
        excerpt: 'How we reduced churn by 15% simply by redesigning the transaction confirmation flow.',
        readTime: '5 min read',
        image: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
        slug: 'designing-for-trust-fintech'
    },
    {
        id: '2',
        type: 'Tech Decisions',
        title: 'Why We Switched to Rust',
        excerpt: 'Memory safety was just the beginning. The real benefit was the shift in our engineering culture.',
        readTime: '12 min read',
        image: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
        slug: 'why-we-switched-to-rust'
    },
    {
        id: '3',
        type: 'Startup Lessons',
        title: 'The MVP Trap',
        excerpt: 'Stop building "Minimal Viable Products" and start building "Minimal Lovable Products".',
        readTime: '6 min read',
        image: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)',
        slug: 'the-mvp-trap'
    },
    {
        id: '4',
        type: 'Engineering Culture',
        title: 'Code Review Etiquette',
        excerpt: 'Creating a safe space for feedback is crucial for high-velocity teams. Here is our playbook.',
        readTime: '9 min read',
        image: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
        slug: 'code-review-etiquette'
    },
    {
        id: '5',
        type: 'Case Studies',
        title: 'Migrating Legacy to Cloud',
        excerpt: 'A step-by-step breakdown of how we moved a 10-year-old banking monolith to AWS without downtime.',
        readTime: '15 min read',
        image: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        slug: 'migrating-legacy-to-cloud'
    },
    {
        id: '6',
        type: 'Design Systems',
        title: 'The Tokenization of Design',
        excerpt: 'Bridging the gap between Figma and React with automated design tokens.',
        readTime: '7 min read',
        image: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
        slug: 'tokenization-of-design'
    }
];

export const FEATURED_ARTICLE: Article = {
    id: 'featured-1',
    type: 'Tech Decisions',
    title: 'The Architecture of Momentum: Why Most Software Projects Stall and How to Scale Instead',
    excerpt: "Momentum isn't just speed; it's mass times velocity. You need architectural weight behind your movement. Learn why most projects stall and how to build a foundation for scale.",
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYcDm0f-KMBHG43UGO8V4wI5yl8O5ZU-NYs-EZxJ31CiekjDI84TyxjrjrHQPPf9Gi58khg8Kz2W-_C-G1nofp9d4DYfEGGbophk-Yr63cAzf5RDIOljj_DsEyXegng_90pxUE4VNVOUKttko-T6Ey52RuF1Mumhpy4xHgExTcWXnUxpcTWmmGNq4o3Qqq_9dRIkzq9RQqjL064Kl_J1QYpOS1z1rVV3-rbm4--xX-YIpDdtqWmKGlE-DGScLYYgyTcPuxmIabBxuD',
    slug: 'architecture-of-momentum'
};

export const getArticleBySlug = (slug: string): Article | undefined => {
    if (slug === FEATURED_ARTICLE.slug) return FEATURED_ARTICLE;
    return ARTICLES.find(article => article.slug === slug);
};
