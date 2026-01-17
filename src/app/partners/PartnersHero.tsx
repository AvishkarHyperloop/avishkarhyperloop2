"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Lock } from "lucide-react";

export function PartnersHero() {
    const { scrollYProgress } = useScroll();
    const opacityParallax = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
            <motion.div
                style={{ opacity: opacityParallax }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-7xl text-center relative z-10"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-full mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                >
                    <Sparkles size={12} className="text-green-400 animate-pulse" />
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-green-300 font-bold">
                        Strategic Engineering Alliance Network
                    </span>
                    <Lock size={10} className="text-green-500/50" />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-black tracking-tighter leading-[0.9] text-[clamp(3.5rem,12vw,9rem)] text-white uppercase font-tech mb-6 flex items-center justify-center gap-3 flex-wrap"
                >

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-300 animate-gradient">
                        PARTNERS
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-8 max-w-2xl mx-auto text-gray-300 text-sm md:text-base font-light leading-relaxed px-6 relative"
                >
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/50 via-green-500/30 to-transparent" />
                    <span className="pl-8 block">
                        Collaborating with global pioneers in simulation, infrastructure,
                        and hardware validation to build India&apos;s first operational Hyperloop system.
                    </span>
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-12 flex flex-wrap justify-center gap-6"
                >
                    {[
                        { label: "Active Partners", value: "50+" },
                        { label: "Global Network", value: "15+" },
                        { label: "Years Active", value: "8+" },
                    ].map((stat, idx) => (
                        <div key={idx} className="px-4 py-2 bg-black/40 border border-green-500/20 rounded-lg backdrop-blur-sm">
                            <div className="text-green-400 font-mono text-[9px] tracking-widest uppercase">{stat.label}</div>
                            <div className="text-lg font-bold text-white mt-0.5">{stat.value}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
