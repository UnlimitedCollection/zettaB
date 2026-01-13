import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC = () => {
    const [isPointer, setIsPointer] = useState(false);

    // Mouse position state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the follower
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('a') !== null ||
                target.closest('button') !== null
            );
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot (Precise) */}
            <motion.div
                className={styles.cursorDot}
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />
            {/* Follower Ring (Smooth) */}
            <motion.div
                className={`${styles.cursorRing} ${isPointer ? styles.pointer : ''}`}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
        </>
    );
};
