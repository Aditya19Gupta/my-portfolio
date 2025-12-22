"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorGlowRef = useRef<HTMLDivElement>(null);
    
    // Track position and velocity
    const prevPosRef = useRef<{ x: number; y: number; time: number } | null>(null);
    const velocityRef = useRef<number>(0);
    const angleRef = useRef<number>(0);
    const smoothAngleRef = useRef<number>(0);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorGlow = cursorGlowRef.current;

        if (!cursor || !cursorGlow) return;

        // Animation frame for smooth updates
        let rafId: number;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;

        const moveCursor = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;

            const now = performance.now();
            const prevPos = prevPosRef.current;

            if (prevPos) {
                // Calculate distance and time delta
                const dx = targetX - prevPos.x;
                const dy = targetY - prevPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const dt = now - prevPos.time;

                // Calculate velocity (pixels per millisecond, then convert to pixels per second)
                const velocity = dt > 0 ? (distance / dt) * 1000 : 0;

                // Smooth velocity using exponential moving average
                velocityRef.current = velocityRef.current * 0.7 + velocity * 0.3;

                // Calculate angle of movement in radians
                if (distance > 0) {
                    angleRef.current = Math.atan2(dy, dx);
                }
            }

            // Update previous position
            prevPosRef.current = {
                x: targetX,
                y: targetY,
                time: now,
            };

            // Use requestAnimationFrame for smooth animation
            if (!rafId) {
                const animate = () => {
                    // Smooth interpolation for position (easing)
                    currentX += (targetX - currentX) * 0.15;
                    currentY += (targetY - currentY) * 0.15;

                    // Decay velocity when not moving (smooth return to circular shape)
                    velocityRef.current *= 0.92;

                    // Calculate cursor shape based on velocity
                    const velocity = velocityRef.current;
                    
                    // Smooth angle transition (handle wrap-around for continuous rotation)
                    const targetAngle = angleRef.current;
                    const currentAngle = smoothAngleRef.current;
                    
                    // Normalize angles to [-π, π] and find shortest rotation path
                    let angleDiff = targetAngle - currentAngle;
                    if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
                    if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
                    
                    // Smooth interpolation of angle
                    smoothAngleRef.current = currentAngle + angleDiff * 0.3;
                    const angle = smoothAngleRef.current;

                    // Velocity thresholds
                    const minVelocity = 50; // pixels per second (slow movement)
                    const maxVelocity = 1000; // pixels per second (fast movement)
                    
                    // Normalize velocity (0 to 1)
                    const normalizedVelocity = Math.min(Math.max((velocity - minVelocity) / (maxVelocity - minVelocity), 0), 1);
                    
                    // Calculate scale factors
                    // Fast movement: stretch along movement direction
                    // Slow movement: keep circular (scaleX = scaleY = 1)
                    const maxStretch = 2.8; // Maximum stretch factor
                    const minWidth = 0.5; // Minimum width when stretched
                    
                    // Stretch length based on velocity (along movement direction)
                    const stretchLength = 1 + (normalizedVelocity * (maxStretch - 1));
                    // Compress perpendicular width when stretched for better effect
                    const stretchWidth = 1 - (normalizedVelocity * (1 - minWidth));
                    
                    // Scale factors: length along movement, width perpendicular
                    const scaleX = stretchLength;
                    const scaleY = stretchWidth;
                    
                    // Apply transform with rotation based on movement angle
                    // CSS transforms apply right-to-left, so to get: translate → rotate → scale,
                    // we write: translate(...) scale(...) rotate(...)
                    // This ensures rotation happens first (aligns axes), then scale (stretches along rotated axes)
                    // Center the cursor (offset by half width/height = 25px)
                    const offsetX = currentX - 25;
                    const offsetY = currentY - 25;
                    const angleDeg = angle * (180 / Math.PI);
                    const transform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleX}, ${scaleY}) rotate(${angleDeg}deg)`;

                    cursor.style.transform = transform;

                    // Glow follows with slight delay for trail effect
                    // Also scale glow based on velocity for more dynamic effect
                    const glowX = currentX + (targetX - currentX) * 0.3;
                    const glowY = currentY + (targetY - currentY) * 0.3;
                    const glowScale = 0.8 + (normalizedVelocity * 0.4); // Scale glow based on velocity
                    cursorGlow.style.transform = `translate(${glowX - 30}px, ${glowY - 30}px) scale(${glowScale})`;

                    // Continue animation if there's still movement or velocity to decay
                    const isMoving = Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1;
                    const hasVelocity = velocityRef.current > 1;
                    
                    if (isMoving || hasVelocity) {
                        rafId = requestAnimationFrame(animate);
                    } else {
                        rafId = 0;
                    }
                };
                
                rafId = requestAnimationFrame(animate);
            }
        };

        const handleMouseEnter = () => {
            if (cursor && cursorGlow) {
                cursor.style.opacity = '1';
                cursorGlow.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            if (cursor && cursorGlow) {
                cursor.style.opacity = '0';
                cursorGlow.style.opacity = '0';
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
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
                    left: '0',
                    top: '0',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.1)',
                    filter: 'blur(40px)',
                    transformOrigin: 'center center',
                    willChange: 'transform',
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
                    left: '0',
                    top: '0',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    filter: 'blur(10px)',
                    transformOrigin: 'center center',
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
