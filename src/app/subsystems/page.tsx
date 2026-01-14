"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Layers, Wind, Zap, Construction, Cpu, Thermometer,
  Database, Terminal, Activity, Monitor
} from "lucide-react";

/* ================= COMPONENT: ELITE HUD IMAGE ================= */
const GlowImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  if (!src || src === "") return (
    <div className="w-full h-full bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center p-4">
      <Activity className="text-white/10 mb-2 animate-pulse" />
      <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.3em]">Schematic_Visual_Pending</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-full overflow-hidden rounded-sm bg-black border border-white/10"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-60" />
      <Image src={src} alt={alt} fill className="object-cover p-2 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" />
      <div className="absolute top-2 right-2 z-20 font-mono text-[8px] text-green-500/50">FRM_TRK_{index}</div>
    </motion.div>
  );
};

export default function SubsystemsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);
  if (!mounted) return null;

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">
      
      {/* GRID HUD */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-radial-at-c from-green-500/5 via-transparent to-transparent" />
      </div>
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green-500 z-[100] origin-left shadow-[0_0_20px_#22c55e]" style={{ scaleX }} />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-green-500" />
            <span className="text-green-500 font-mono tracking-[0.8em] text-[10px] uppercase">Garuda v5.0 Engineering</span>
            <div className="h-[1px] w-12 bg-green-500" />
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="font-black text-[12vw] md:text-[10vw] leading-none tracking-tighter italic uppercase text-glow"
          >
            SUB <span className="text-transparent stroke-text">SYSTEMS</span>
          </motion.h1>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <HeroMetric label="Vacuum Level" value="0.001 ATM" />
            <HeroMetric label="Peak Thrust" value="4500 N" />
            <HeroMetric label="Levitation" value="Active EMS" />
            <HeroMetric label="Onboard AI" value="NVIDIA Orin" />
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL REGISTRY */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 space-y-2 text-center md:text-left">
          <h2 className="font-mono text-xs tracking-[0.5em] uppercase text-green-500">01 // Architectural_Registry</h2>
          <p className="text-gray-500 font-light max-w-xl">Strict breakdown of the 7 primary engineering domains enabling sub-vacuum transit.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SubsystemTile icon={<Zap />} title="Propulsion" desc="Dual-Mode LIM" />
          <SubsystemTile icon={<Wind />} title="Levitation" desc="Active EMS" />
          <SubsystemTile icon={<Layers />} title="Mechanical" desc="CFRP Monocoque" />
          <SubsystemTile icon={<Cpu />} title="Electrical" desc="400V HVDC Bus" />
          <SubsystemTile icon={<Monitor />} title="GUI" desc="Mission Control" />
          <SubsystemTile icon={<Thermometer />} title="Thermal" desc="Passive PCM" />
          <SubsystemTile icon={<Construction />} title="Infrastructure" desc="Vacuum Guideway" />
        </div>
      </section>

      <DataStrip />

      {/* --- DETAILED SECTIONS --- */}

      <SystemSection 
        title="Propulsion" icon={<Zap />}
        content="The Propulsion system features a Double-Sided Linear Induction Motor (DS-LIM) tailored for high-speed operation in a vacuum. Unlike traditional motors, it requires no physical contact, utilizing magnetic flux to generate thrust against an aluminum reaction rail. The system integrates a custom Variable Frequency Drive (VFD) that modulates current at 500Hz, ensuring smooth acceleration from 0 to 250m/s."
        images={["/propulsion/Screenshot 2026-01-08 140318.png", "/propulsion/Screenshot 2026-01-08 140326.png", "/propulsion/Screenshot 2026-01-08 140337.png"]}
        specs={["Thrust: 4.5kN", "Motor Type: DS-LIM", "Speed: 360km/h"]}
      />

      

      <SystemSection 
        title="Levitation" icon={<Wind />} reverse
        content="Frictionless motion is achieved through Electromagnetic Suspension (EMS). The system uses U-shaped electromagnets that wrap around the I-beam track, creating an attractive force that lifts the pod. A real-time controller processes data from eddy-current sensors to maintain a constant 12mm gap with sub-millimeter precision, effectively canceling out mechanical vibrations."
        images={["/lems/Screenshot 2026-01-08 140514.png", "/lems/Screenshot 2026-01-08 140519.png", "/lems/Screenshot 2026-01-08 140528.png"]}
        specs={["Air Gap: 12mm", "Control Loop: 1kHz", "Sensors: Laser/Eddy"]}
      />

      <SystemSection 
        title="Electrical" icon={<Cpu />}
        content="The Electrical subsystem acts as the nervous system of the pod. It manages high-voltage (400V) power for propulsion and low-voltage (24V) for logic and sensors. The battery pack is designed with localized cooling and an intelligent Battery Management System (BMS) that monitors over 100 parameters per second, including cell temperature, state of charge, and current fluctuations."
        images={["/electrical/Screenshot 2026-01-08 140640.png", "/electrical/Screenshot 2026-01-08 140650.png", "/electrical/Screenshot 2026-01-08 140658.png"]}
        specs={["Voltage: 400V DC", "BMS: Dual-Redundant", "Safety: HV-Isolation"]}
      />

      <SystemSection 
        title="Mechanical" icon={<Layers />} reverse
        content="The Mechanical structure is built around a Carbon Fiber Reinforced Polymer (CFRP) monocoque. This provides the highest strength-to-weight ratio, crucial for sub-vacuum stability. The pod is designed to resist deformation under 1-atmosphere internal pressure, featuring aerospace-grade bulkheads and a modular internal frame for housing electronic components."
        images={[]} // No images as requested for missing ones
        specs={["Chassis: CFRP T700", "FOS: 2.5", "Design: Monocoque"]}
      />

      

      <SystemSection 
        title="GUI" icon={<Monitor />}
        content="The Graphical User Interface (GUI) and Mission Control software provide the critical link between the pod and ground operators. Built with high-performance frameworks, the dashboard visualizes over 200 real-time telemetry streams. It includes emergency override triggers, predictive fault analysis, and a 3D digital twin of the pod showing live structural and thermal loads."
        images={[]} 
        specs={["Refresh Rate: 60fps", "Data Link: 5.8GHz", "OS: Linux RT"]}
      />

      <SystemSection 
        title="Thermal" icon={<Thermometer />} reverse
        content="In a vacuum, convection cooling is impossible. The Thermal subsystem utilizes Phase Change Materials (PCM) which act as a heat sink. During operation, excess heat from the motor and batteries is absorbed by the PCM (melting it). This passive system ensures the electronics stay within safe operating limits without the need for heavy liquid pumps or air-cooling fins."
        images={["/thermal/Screenshot 2026-01-08 140750.png", "/thermal/Screenshot 2026-01-08 140757.png"]}
        specs={["Cooling: Passive PCM", "Max Load: 15kW", "Duration: 20min Run"]}
      />

      

      <SystemSection 
        title="Infrastructure" icon={<Construction />}
        content="The Infrastructure team designs the physical guideway and vacuum tube environment. This includes precision-aligned I-beams for levitation and a seamless reaction rail for propulsion. The infrastructure must maintain structural integrity under thermal expansion and atmospheric pressure, utilizing specialized expansion joints and high-strength concrete supports for the tube pylons."
        images={[]} 
        specs={["Beam Type: AA6061", "Tube Material: Low-Carbon Steel", "Alignment: <2mm Tolerance"]}
      />

      {/* FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-black px-6 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <Terminal size={32} className="mx-auto text-green-500 animate-pulse" />
          <div className="space-y-2">
            <p className="font-mono text-[10px] tracking-[1em] text-white/40 uppercase">Avishkar Hyperloop // IIT Madras</p>
            <p className="font-mono text-[8px] text-gray-700 tracking-[0.5em]">SYST_CORE_V5.0 // 2026 EDITION</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 1.5px rgba(74,222,128,0.5); }
        .text-glow {
          color: #fff;
          text-shadow: 0 0 20px rgba(34,197,94,0.4), 0 0 40px rgba(34,197,94,0.2);
          animation: breathe 4s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% { text-shadow: 0 0 20px rgba(34,197,94,0.4); }
          50% { text-shadow: 0 0 40px rgba(34,197,94,0.7), 0 0 60px rgba(34,197,94,0.3); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #22c55e; }
      `}</style>
    </div>
  );
}

/* ================= HELPER UI COMPONENTS ================= */

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center group">
      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest group-hover:text-green-500 transition-colors">{label}</span>
      <span className="text-2xl font-black italic tracking-tighter text-white">{value}</span>
    </div>
  );
}

function SubsystemTile({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ y: -5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
      className="p-8 border border-white/5 bg-[#080808] transition-all group relative overflow-hidden"
    >
      <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="font-black italic text-xl uppercase tracking-tighter mb-1">{title}</h3>
      <p className="font-mono text-[10px] text-green-500/60 uppercase tracking-widest">{desc}</p>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

function SystemSection({ title, icon, content, images, reverse, specs }: any) {
  return (
    <section className="py-40 px-6 max-w-7xl mx-auto">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-start`}>
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              {React.cloneElement(icon, { size: 28 })}
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">{title}</h2>
          </div>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">{content}</p>
          
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {specs.map((s: string, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-green-500 font-mono text-[9px] uppercase tracking-widest">Spec_{i+1}</span>
                <span className="text-white font-bold text-xs uppercase italic">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {images && images.length > 0 && (
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 h-[450px]">
              {images.map((img: string, i: number) => (
                <div key={i} className={`${i === 0 ? 'col-span-2 h-[260px]' : 'col-span-1 h-[170px]'}`}>
                  <GlowImage src={img} alt={title} index={i} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function DataStrip() {
  return (
    <div className="w-full bg-green-500 py-3 overflow-hidden flex whitespace-nowrap border-y border-black relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-20 items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 text-black font-black italic text-sm uppercase">
            <span>Velocity: 250m/s</span>
            <div className="w-1.5 h-1.5 rounded-full bg-black/30" />
            <span>Vacuum: 0.001 ATM</span>
            <div className="w-1.5 h-1.5 rounded-full bg-black/30" />
            <span>Safety: SYNC_NOMINAL</span>
            <div className="w-1.5 h-1.5 rounded-full bg-black/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}