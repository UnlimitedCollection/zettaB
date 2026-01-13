import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <Card className={styles.modalCard} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    {title && <h3 className={styles.title}>{title}</h3>}
                    <Button variant="ghost" size="sm" onClick={onClose} className={styles.closeBtn}>×</Button>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </Card>
        </div>
    );
};
