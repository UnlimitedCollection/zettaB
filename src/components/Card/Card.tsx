import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass';
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    hoverEffect = false,
    className,
    ...props
}) => {
    const rootClassName = [
        styles.card,
        styles[variant],
        hoverEffect ? styles.hoverEffect : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={rootClassName} {...props}>
            {children}
        </div>
    );
};
