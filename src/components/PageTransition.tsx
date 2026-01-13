import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants, Easing } from 'framer-motion';

interface PageTransitionProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
}

const easeOutCubic: Easing = [0.61, 1, 0.88, 1];

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easeOutCubic,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
            ease: easeOutCubic,
        },
    },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children, ...props }) => {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};
