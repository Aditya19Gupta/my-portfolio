"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorGlowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorGlow = cursorGlowRef.current;

        if (!cursor || !cursorGlow) return;

        const moveCursor = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            // Main cursor follows immediately
            cursor.style.transform = `translate(${x}px, ${y}px)`;

            // Glow follows with slight delay for trail effect
            setTimeout(() => {
                cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
            }, 50);
        };

        const handleMouseEnter = () => {
            cursor.style.opacity = '1';
            cursorGlow.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            cursor.style.opacity = '0';
            cursorGlow.style.opacity = '0';
        };

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                ref={cursorRef}
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '-6px',
                    top: '-6px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.1)',
                    filter: 'blur(40    px)',
                }}
            />

            {/* Glowing trail */}
            <div
                ref={cursorGlowRef}
                className="cursor-glow"
                style={{
                    position: 'fixed',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    left: '-20px',
                    top: '-20px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    filter: 'blur(10px)',
                }}
            />

            <style jsx global>{`
                body {
                    cursor: none;
                }
                
                a, button, input, textarea, select {
                    cursor: none !important;
                }
                
                @media (max-width: 768px) {
                    .custom-cursor,
                    .cursor-glow {
                        display: none !important;
                    }
                    
                    body, a, button, input, textarea, select {
                        cursor: auto !important;
                    }
                }
            `}</style>
        </>
    );
}
