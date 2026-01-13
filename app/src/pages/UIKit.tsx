import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Input } from '../components/Input/Input';
import { Badge } from '../components/Badge/Badge';
import { Modal } from '../components/Modal/Modal';

export const UIKit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ padding: '8rem 2rem 4rem', maxWidth: '80rem', margin: '0 auto' }}>
            <h1 style={{ color: 'white', marginBottom: '2rem' }}>UI Kit / Design System</h1>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Buttons</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="primary" size="lg">Large Primary</Button>
                    <Button variant="primary" size="sm">Small</Button>
                </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Badges</h2>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Badge variant="primary">Primary Badge</Badge>
                    <Badge variant="default" dot>Status Dot</Badge>
                    <Badge variant="default">Default</Badge>
                </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Inputs</h2>
                <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Input placeholder="Default Input" />
                    <Input label="With Label" placeholder="Enter text..." />
                    <Input label="With Error" placeholder="Enter text..." error="This field is required" />
                </div>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Cards</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Default Card</h3>
                        <p style={{ color: '#9ca3af' }}>This is a standard card component with default styling.</p>
                    </Card>
                    <Card variant="glass">
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Glass Card</h3>
                        <p style={{ color: '#9ca3af' }}>This card uses a glassmorphism effect.</p>
                    </Card>
                    <Card hoverEffect>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Hover Effect</h3>
                        <p style={{ color: '#9ca3af' }}>Hover over this card to see the interaction.</p>
                    </Card>
                </div>
            </section>

            <section>
                <h2 style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Interactive</h2>
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
                <p>This is a reusable modal component overlaid on the UI.</p>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </div>
            </Modal>
        </div>
    );
};
