"use client";
import React, { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
    // Use refs for direct DOM manipulation (fastest)
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);

    // State in refs to avoid re-renders
    const mouse = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const rafId = useRef<number>(0);

    useEffect(() => {
        // Initial position off-screen
        mouse.current = { x: -100, y: -100 };
        ringPos.current = { x: -100, y: -100 };

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Direct update for the dot (instant)
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Optimize check: use classList or simple tag checks
            const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') !== null || target.closest('button') !== null;

            if (cursorRingRef.current) {
                if (isLink) {
                    cursorRingRef.current.classList.add('scale-150', 'bg-white/10');
                    cursorRingRef.current.classList.remove('scale-100');
                } else {
                    cursorRingRef.current.classList.remove('scale-150', 'bg-white/10');
                    cursorRingRef.current.classList.add('scale-100');
                }
            }
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseover', onMouseOver, { passive: true });

        // Animation Loop for Ring (Lerp > Spring for performance)
        const loop = () => {
            // Lerp factor (0.15 = smooth lag)
            const dx = mouse.current.x - ringPos.current.x;
            const dy = mouse.current.y - ringPos.current.y;

            ringPos.current.x += dx * 0.15;
            ringPos.current.y += dy * 0.15;

            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafId.current = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            {/* Small dot - standard cursor position */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
                style={{ transform: 'translate3d(-100px, -100px, 0)' }}
            />
            {/* Large circle - lags behind slightly */}
            <div
                ref={cursorRingRef}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference will-change-transform transition-transform duration-200 ease-out scale-100"
                style={{ transform: 'translate3d(-100px, -100px, 0)' }}
            />
        </>
    );
}

