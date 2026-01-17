"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function PartnersFooter() {
    return (
        <footer className="relative z-10 py-32 border-t border-white/10 bg-gradient-to-b from-transparent via-black/20 to-black/40">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 border border-green-500/30 bg-green-500/5 rounded-full mb-3">
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-green-400">
                            Next Generation Partnership
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-tech">
                        <span className="text-white">Join the</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                            Alliance
                        </span>
                    </h3>

                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Building the 5th mode of transport requires a multidisciplinary ecosystem.
                        Connect with Avishkar Hyperloop for technical or strategic partnerships.
                    </p>

                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,197,94,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold uppercase text-xs tracking-[0.15em] rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] font-tech"
                        >
                            Inquire for v9.0
                        </motion.button>
                    </Link>

                </motion.div>

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40"
                >
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
                        Avishkar Hyperloop · IIT Madras
                    </p>
                    <div className="flex gap-6 font-mono text-[8px] uppercase tracking-widest text-white/40">
                        <span className="hover:text-green-400 transition-colors cursor-pointer">Propulsion</span>
                        <span className="hover:text-green-400 transition-colors cursor-pointer">Levitation</span>
                        <span className="hover:text-green-400 transition-colors cursor-pointer">Infrastructure</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
