"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { PARTNERS_DATA } from "./PartnersData";

type Sponsor = typeof PARTNERS_DATA[0]["sponsors"][0];

export const PartnerCard = ({ sponsor, index }: { sponsor: Sponsor; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative"
        >
            <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-white/5 rounded-xl p-6 h-full transition-all duration-700 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden backdrop-blur-sm">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 via-transparent to-green-500/20 blur-xl" />
                    <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-green-500/10 to-transparent" />
                </div>

                {/* Scan Line Effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ y: "-100%" }}
                    animate={isHovered ? { y: "100%" } : { y: "-100%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                >
                    <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                </motion.div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500 rounded-br-xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Logo Section */}
                    <div className="relative mb-4">
                        <div className="relative w-full h-20 bg-white/5 rounded-lg flex items-center justify-center p-3 group-hover:bg-white/10 transition-all duration-500 backdrop-blur-sm border border-white/10 group-hover:border-green-500/30">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                            <div className="relative w-full h-full">
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    fill
                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        <motion.div
                            className="absolute -top-1.5 -right-1.5 opacity-0 group-hover:opacity-100"
                            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Terminal size={14} className="text-green-500" />
                        </motion.div>
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 flex flex-col justify-end">
                        <h3 className="text-base font-bold group-hover:text-green-400 transition-colors duration-300 uppercase tracking-tight mb-1.5 font-tech">
                            {sponsor.name}
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <p className="text-[8px] font-mono tracking-[0.15em] uppercase text-white/50 group-hover:text-green-400/70 transition-colors">
                                {sponsor.role}
                            </p>
                        </div>
                    </div>

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
