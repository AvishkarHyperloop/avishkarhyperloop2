"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import {
  Layers, Wind, Zap, Construction, Cpu, Thermometer,
  ArrowDown, Database, Globe, Activity, ShieldCheck, Gauge
} from "lucide-react";

/* ================= THE NEW "ELITE" IMAGE COMPONENT ================= */

const GlowImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
      className="group relative w-full h-full overflow-hidden rounded-lg bg-black border border-white/10"
    >
      {/* Animated Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
      
      {/* Cyber Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" />

      {/* Floating Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-6 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110"
      />
      
      {/* Technical Data Overlay */}
      <div className="absolute bottom-3 left-3 z-20">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] text-green-400 tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
            SECURE_DATA_LINK: 0x{index}F4A
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= PREVIOUS CONFIGS ================= */

const GENTLE_STAGGER = { visible: { transition: { staggerChildren: 0.1 } } };
const GLITCH_VARIANTS = {
  hidden: { opacity: 0, skew: -10, x: -20 },
  visible: { opacity: 1, skew: 0, x: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function SubsystemsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full min-h-screen bg-[#020202] text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">
      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green-500 z-[100] origin-left" style={{ scaleX }} />

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-t from-green-500/10 via-transparent to-transparent" />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 grayscale"
        >
          <img src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2600" className="w-full h-full object-cover" alt="" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.p variants={GLITCH_VARIANTS} initial="hidden" animate="visible" className="text-green-500 font-mono tracking-[1em] text-[10px] md:text-xs mb-6 uppercase">
            // IIT MADRAS // HYPERLOOP REDEFINED
          </motion.p>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-black text-[14vw] md:text-[9vw] leading-[0.85] tracking-tighter italic uppercase drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]"
          >
            Sub <span className="text-transparent stroke-text">Systems</span>
          </motion.h1>
          <p className="mt-8 font-mono text-gray-500 text-xs md:text-sm tracking-widest max-w-2xl mx-auto">
            AVISHKAR-POD-V5: STABLE / TRANSONIC / VACUUM-READY
          </p>
        </div>
      </section>

      {/* ================= ARCHITECTURE GRID ================= */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-green-500 text-xs">01</span>
          <div className="h-px flex-1 bg-white/10" />
          <h2 className="font-mono text-xs tracking-[0.5em] uppercase text-white/50">Module Overview</h2>
        </div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={GENTLE_STAGGER}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <SubsystemTile icon={<Zap />} title="Propulsion" desc="Dual-mode LIM" />
          <SubsystemTile icon={<Wind />} title="Levitation" desc="Active EMS Control" />
          <SubsystemTile icon={<Thermometer />} title="Thermal" desc="Vacuum Rejection" />
          <SubsystemTile icon={<Cpu />} title="Control" desc="RTOS Low-Latency" />
          <SubsystemTile icon={<Database />} title="Telemetry" desc="Sensors & Data" />
          <SubsystemTile icon={<Layers />} title="Mechanical" desc="Monocoque Chassis" />
          <SubsystemTile icon={<Construction />} title="Infra" desc="Guideway Systems" />
          <SubsystemTile icon={<Globe />} title="SER" desc="Business Ops" />
        </motion.div>
      </section>

      <DataStrip />

      {/* ================= SYSTEM SECTIONS ================= */}
      <SystemSection 
        title="Propulsion" icon={<Zap />}
        content="Our propulsion system leverages a unique Dual-Mode Linear Induction Motor (LIM). It allows for massive thrust during launch phases using synchronous boosting, transitioning smoothly into an energy-efficient cruise mode via passive T-track interaction."
        images={[
          "/propulsion/Screenshot 2026-01-08 140318.png",
          "/propulsion/Screenshot 2026-01-08 140326.png",
          "/propulsion/Screenshot 2026-01-08 140337.png",
        ]}
      />

      <SystemSection 
        title="Levitation" icon={<Wind />} reverse
        content="Zero-friction travel achieved through Low-speed and High-speed Electromagnetic Suspension (LEMS/HEMS). Precision control loops maintain a millimeter-scale air gap using real-time ANSYS-calibrated feedback."
        images={[
          "/lems/Screenshot 2026-01-08 140514.png",
          "/lems/Screenshot 2026-01-08 140519.png",
          "/lems/Screenshot 2026-01-08 140528.png",
        ]}
      />

      <SystemSection 
        title="Electrical" icon={<Cpu />}
        content="A bifurcated power architecture separating High-Voltage propulsion from Low-Voltage control systems. Features liquid-cooled battery packs and an ultra-fast hardware shutdown for mission-critical safety."
        images={[
          "/electrical/Screenshot 2026-01-08 140640.png",
          "/electrical/Screenshot 2026-01-08 140650.png",
          "/electrical/Screenshot 2026-01-08 140658.png",
        ]}
      />

      <SystemSection 
        title="Thermal" icon={<Thermometer />} reverse
        content="Heat management in a vacuum presents extreme challenges. Avishkar's Thermal system uses advanced Phase Change Materials (PCM) and evaporative cooling to dump heat without air-flow."
        images={[
          "/thermal/Screenshot 2026-01-08 140750.png",
          "/thermal/Screenshot 2026-01-08 140757.png",
        ]}
      />

      {/* ================= FOOTER ================= */}
      <footer className="py-24 border-t border-white/5 bg-black px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-50">
          <p className="font-mono text-[10px] tracking-widest">AVISHKAR HYPERLOOP // IIT MADRAS</p>
          <div className="h-px w-24 bg-white/20 my-4 md:my-0" />
          <p className="font-mono text-[10px] tracking-widest uppercase">Systems Engineering Division 2026</p>
        </div>
      </footer>

      <style jsx global>{`.stroke-text { -webkit-text-stroke: 1px rgba(74,222,128,0.4); }`}</style>
    </div>
  );
}

/* ================= REFINED COMPONENTS ================= */

function SubsystemTile({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ y: -8, backgroundColor: "rgba(74, 222, 128, 0.05)" }}
      className="relative p-8 border border-white/5 bg-[#050505] transition-all group overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
        {React.cloneElement(icon, { size: 60 })}
      </div>
      <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="font-black italic text-2xl uppercase tracking-tighter mb-2">{title}</h3>
      <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{desc}</p>
    </motion.div>
  );
}

function SystemSection({ title, icon, content, images, reverse }: any) {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
        
        {/* TEXT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-2/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-green-500 text-black rounded-full shadow-[0_0_20px_rgba(74,222,128,0.5)]">
              {React.cloneElement(icon, { size: 28 })}
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">{title}</h2>
          </div>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-8 italic">
            {content}
          </p>
          <div className="flex gap-4">
             <div className="h-0.5 w-12 bg-green-500 mt-3" />
             <span className="font-mono text-[10px] uppercase text-green-500 tracking-[0.3em]">System_Verified_001</span>
          </div>
        </motion.div>

        {/* THE CRAZY IMAGE STACK */}
        <div className="lg:w-3/5 w-full">
          <div className="grid grid-cols-2 gap-6 h-[500px]">
            {images.map((img: string, i: number) => (
              <div 
                key={i} 
                className={`${i === 0 ? 'col-span-2 row-span-2 h-[300px]' : 'col-span-1 h-[180px]'}`}
              >
                <GlowImage src={img} alt={title} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DataStrip() {
  return (
    <div className="w-full bg-green-500 py-4 overflow-hidden flex whitespace-nowrap border-y-4 border-black">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-20 items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-black font-black italic text-xl uppercase tracking-tighter">Velocity Target: 250m/s</span>
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="text-black font-black italic text-xl uppercase tracking-tighter">System Stability: Nominal</span>
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="text-black font-black italic text-xl uppercase tracking-tighter">Vacuum Index: 0.01%</span>
            <div className="w-2 h-2 rounded-full bg-black" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Metric({ label, value, icon }: any) {
  return (
    <div className="flex flex-col items-center md:items-start group">
      <div className="flex items-center gap-2 text-green-500 mb-2 font-mono text-[10px] tracking-widest uppercase">
        {icon} {label}
      </div>
      <div className="text-5xl font-black italic tracking-tighter text-white group-hover:text-green-500 transition-colors duration-300">
        {value}
      </div>
    </div>
  );
}