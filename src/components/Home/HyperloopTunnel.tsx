"use client";

import React, { useEffect, useRef } from "react";

export default function HyperloopTunnel() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", {
            alpha: true,
            desynchronized: true, // Hint for lower latency
        });
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationId = 0;
        let isVisible = true;

        // Mouse State
        let targetMx = 0;
        let targetMy = 0;
        let currentMx = 0;
        let currentMy = 0;

        // Particle Configuration
        const particleCount = 400;
        const speed = 25;

        // Float32Array for better memory layout: [x, y, z, offset]
        const particles = new Float32Array(particleCount * 4);

        // Init function
        const initParticles = (w: number, h: number) => {
            for (let i = 0; i < particleCount; i++) {
                const i4 = i * 4;
                particles[i4] = (Math.random() - 0.5) * w;     // x
                particles[i4 + 1] = (Math.random() - 0.5) * h; // y
                particles[i4 + 2] = Math.random() * w;         // z
                particles[i4 + 3] = Math.random();             // offset
            }
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles(width, height);
        };

        // Initial setup
        handleResize();

        const draw = () => {
            if (!isVisible) return; // Stop drawing if not visible

            // Lerp mouse
            currentMx += (targetMx - currentMx) * 0.05;
            currentMy += (targetMy - currentMy) * 0.05;

            // Clear with trail effect
            ctx.fillStyle = "rgba(3, 3, 3, 0.3)";
            ctx.fillRect(0, 0, width, height);

            const cx = width / 2 + currentMx * 0.5;
            const cy = height / 2 + currentMy * 0.5;

            // Batch drawing? 
            // Since color (alpha) changes per particle, we can't fully batch without advanced packing.
            // But we can avoid object creation.

            for (let i = 0; i < particleCount; i++) {
                const i4 = i * 4;
                let x = particles[i4];
                let y = particles[i4 + 1];
                let z = particles[i4 + 2];

                // Move
                z -= speed;

                // Reset
                if (z <= 0) {
                    x = particles[i4] = (Math.random() - 0.5) * width;
                    y = particles[i4 + 1] = (Math.random() - 0.5) * height;
                    z = particles[i4 + 2] = width;
                } else {
                    particles[i4 + 2] = z;
                }

                // Project
                const k = 250 / z;
                const x2d = cx + x * k;
                const y2d = cy + y * k;

                if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
                    const size = (1 - z / width) * 3;
                    const alpha = (1 - z / width);

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
                    ctx.arc(x2d, y2d, size, 0, 6.283); // constants are faster
                    ctx.fill();
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        // Events
        const handleMouseMove = (e: MouseEvent) => {
            targetMx = (e.clientX / width - 0.5) * width;
            targetMy = (e.clientY / height - 0.5) * height;
        };

        window.addEventListener("resize", handleResize, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Internal Intersection Observer to start/stop loop
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    // Restart loop if it was stopped
                    cancelAnimationFrame(animationId);
                    draw();
                } else {
                    cancelAnimationFrame(animationId);
                }
            },
            { threshold: 0 }
        );

        observer.observe(container);

        // Initial start
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-40 mix-blend-screen"
            />
        </div>
    );
}

