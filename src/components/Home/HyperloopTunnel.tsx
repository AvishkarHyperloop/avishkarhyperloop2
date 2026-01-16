"use client";

import React, { useEffect, useRef } from "react";

export default function HyperloopTunnel() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Mouse State
        let targetMx = 0;
        let targetMy = 0;
        let currentMx = 0;
        let currentMy = 0;

        // Particle Configuration
        const particleCount = 400;
        const speed = 25;
        const particles: { x: number; y: number; z: number; o: number }[] = [];

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: (Math.random() - 0.5) * width,
                y: (Math.random() - 0.5) * height,
                z: Math.random() * width,
                o: Math.random() // offset for varied lengths
            });
        }

        const draw = () => {
            // Lerp mouse position for smooth effect
            currentMx += (targetMx - currentMx) * 0.05;
            currentMy += (targetMy - currentMy) * 0.05;

            // Create trailing effect
            ctx.fillStyle = "rgba(3, 3, 3, 0.3)";
            ctx.fillRect(0, 0, width, height);

            // Dynamic Vanishing Point (Opposite to mouse movement for parallax feel)
            const cx = width / 2 + currentMx * 0.5;
            const cy = height / 2 + currentMy * 0.5;

            for (let i = 0; i < particleCount; i++) {
                let p = particles[i];

                // Move particle towards viewer
                p.z -= speed;

                // Reset if behind viewer
                if (p.z <= 0) {
                    p.x = (Math.random() - 0.5) * width;
                    p.y = (Math.random() - 0.5) * height;
                    p.z = width;
                }

                // Project 3D to 2D
                const k = 250 / p.z; // Perspective scale
                const x2d = cx + p.x * k;
                const y2d = cy + p.y * k;

                // Only draw if within bounds (optimization)
                if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
                    // Determine size and alpha based on depth
                    const size = (1 - p.z / width) * 3;
                    const alpha = (1 - p.z / width);

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`; // Green-500
                    ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position (-0.5 to 0.5)
            targetMx = (e.clientX / width - 0.5) * width;
            targetMy = (e.clientY / height - 0.5) * height;
        };

        const animationId = requestAnimationFrame(draw);
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none" />;
}
