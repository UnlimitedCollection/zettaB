import React from 'react';
import styles from './InfiniteMarquee.module.css';

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    direction?: 'left' | 'right';
    speed?: number; // duration in seconds
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
    children,
    direction = 'left',
    speed = 40,
    pauseOnHover = true,
    className = ''
}) => {
    return (
        <div className={`${styles.marqueeContainer} ${className}`}>
            <div
                className={`${styles.marqueeContent} ${direction === 'right' ? styles.reverse : ''} ${pauseOnHover ? styles.pauseOnHover : ''}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
                {/* Duplicate content for seamless loop */}
                {children}
            </div>
        </div>
    );
};
