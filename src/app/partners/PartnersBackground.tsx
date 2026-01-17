"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function PartnersBackground() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <>
            {/* ================= BACKGROUND SYSTEM ================= */}
            <div className="fixed inset-0 pointer-events-none z-0">

                {/* Animated Grid System */}
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-60"
                />

                {/* Perspective Grid Overlay */}
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] [perspective:2000px] [rotateX:60deg] origin-top opacity-30"
                />

                {/* Animated Scan Lines */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-[2px] h-32 bg-gradient-to-b from-transparent via-green-500 to-transparent"
                            initial={{
                                x: `${(i * 12.5) % 100}%`,
                                y: "-10%",
                            }}
                            animate={{
                                y: "110%",
                            }}
                            transition={{
                                duration: 8 + i * 0.5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.8,
                            }}
                            style={{
                                opacity: 0.3,
                            }}
                        />
                    ))}
                </div>

                {/* Dynamic Radial Glows */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-green-500/8 blur-[200px] rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            {/* ================= PROGRESS INDICATOR ================= */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-600 via-green-400 to-green-600 z-50 origin-left shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                style={{ scaleX }}
            />
        </>
    );
}
