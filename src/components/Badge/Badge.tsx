import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'primary';
    dot?: boolean;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    dot = false,
    className
}) => {
    return (
        <div className={`${styles.badge} ${styles[variant]} ${className || ''}`}>
            {dot && <span className={styles.dot}></span>}
            {children}
        </div>
    );
};
