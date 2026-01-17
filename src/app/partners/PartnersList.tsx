"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { PARTNERS_DATA } from "./PartnersData";
import { PartnerCard } from "./PartnerCard";

export function PartnersList() {
    return (
        <div className="relative z-10 space-y-32 pb-32">
            {PARTNERS_DATA.map((edition, idx) => (
                <motion.section
                    key={edition.version}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto px-6"
                >
                    {/* Version Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 flex flex-col md:flex-row items-start md:items-center gap-6"
                    >
                        <div className="flex flex-col">
                            <motion.span
                                className="font-mono text-green-500/70 text-[10px] mb-2 tracking-[0.2em] uppercase"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Generation Cycle 0{PARTNERS_DATA.length - idx}
                            </motion.span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase font-tech relative">
                                <span className="relative">
                                    V{edition.version}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 via-green-400 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </span>
                            </h2>
                        </div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-green-500/50 via-green-500/20 to-transparent hidden md:block" />
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileInView={{ rotate: 360 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="hidden md:block"
                        >
                            <Cpu className="text-white/10" size={40} />
                        </motion.div>
                    </motion.div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {edition.sponsors.map((sponsor, sponsorIdx) => (
                            <PartnerCard
                                key={`${edition.version}-${sponsor.name}`}
                                sponsor={sponsor}
                                index={sponsorIdx}
                            />
                        ))}
                    </div>
                </motion.section>
            ))}
        </div>
    );
}
