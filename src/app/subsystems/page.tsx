"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Layers,
  Wind,
  Zap,
  Construction,
  Cpu,
  Thermometer,
  Terminal,
  Activity,
  Monitor,
} from "lucide-react";

/* ================= COMPONENT: ELITE HUD IMAGE ================= */
const GlowImage = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) => {
  if (!src || src === "") {
    return (
      <div className="w-full h-full bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center p-4">
        <Activity className="text-white/10 mb-2 animate-pulse" />
        <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.3em]">
          Schematic_Visual_Pending
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-full overflow-hidden rounded-sm bg-black border border-white/10"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-60" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover p-2 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
      />
      <div className="absolute top-2 right-2 z-20 font-mono text-[8px] text-green-500/50">
        FRM_TRK_{index}
      </div>
    </motion.div>
  );
};

export default function SubsystemsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden relative">
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />
        <motion.div
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-green-500/20"
        />
      </div>

      <div className="relative z-10">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-green-500 z-[100] origin-left shadow-[0_0_20px_#22c55e]"
          style={{ scaleX }}
        />

        {/* ================= HERO ================= */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-white/5 bg-black/40 backdrop-blur-[2px] px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-[1px] w-8 sm:w-12 bg-green-500" />
              <span className="text-green-500 font-mono tracking-[0.6em] text-[9px] uppercase">
                Garuda v6.0 Engineering
              </span>
              <div className="h-[1px] w-8 sm:w-12 bg-green-500" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-black italic uppercase leading-none tracking-tighter text-[14vw] sm:text-[11vw] md:text-[10vw] "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">SUB </span><span className="text-transparent stroke-text">SYSTEMS</span>
            </motion.h1>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <HeroMetric label="Vacuum Level" value="0.001 ATM" />
              <HeroMetric label="Peak Thrust" value="4500 N" />
              <HeroMetric label="Levitation" value="Active EMS" />
              <HeroMetric label="Onboard AI" value="NVIDIA Orin" />
            </div>
          </div>
        </section>

        {/* ================= ARCH REGISTRY ================= */}
        <section className="relative py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col mb-12 space-y-2 text-center md:text-left">
            <h2 className="font-mono text-xs tracking-[0.5em] uppercase text-green-500">
              01 // Architectural_Registry
            </h2>
            <p className="text-gray-400 font-light max-w-xl">
              Strict breakdown of the 7 primary engineering domains enabling sub-vacuum transit.
            </p>
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

        {/* ================= ALL SYSTEM SECTIONS ================= */}

        <SystemSection
          title="Propulsion"
          icon={<Zap />}
          content="The Propulsion system features a Double-Sided Linear Induction Motor (DS-LIM) tailored for high-speed operation in a vacuum. Unlike traditional motors, it requires no physical contact, utilizing magnetic flux to generate thrust against an aluminum reaction rail."
          images={[
            "/propulsion/Screenshot 2026-01-08 140318.png",
            "/propulsion/Screenshot 2026-01-08 140326.png",
            "/propulsion/Screenshot 2026-01-08 140337.png",
          ]}
          specs={["Thrust: 4.5kN", "Motor Type: DS-LIM", "Speed: 360km/h"]}
        />

        <SystemSection
          title="Levitation"
          icon={<Wind />}
          reverse
          content="Frictionless motion is achieved through Electromagnetic Suspension (EMS). The system uses U-shaped electromagnets that wrap around the I-beam track, creating an attractive force that lifts the pod."
          images={[
            "/lems/Screenshot 2026-01-08 140514.png",
            "/lems/Screenshot 2026-01-08 140519.png",
            "/lems/Screenshot 2026-01-08 140528.png",
          ]}
          specs={["Air Gap: 12mm", "Control Loop: 1kHz", "Sensors: Laser/Eddy"]}
        />

        <SystemSection
          title="Electrical"
          icon={<Cpu />}
          content="The Electrical subsystem acts as the nervous system of the pod. It manages high-voltage (400V) power for propulsion and low-voltage (24V) for logic and sensors. The battery pack is designed with localized cooling."
          images={[
            "/electrical/Screenshot 2026-01-08 140640.png",
            "/electrical/Screenshot 2026-01-08 140650.png",
            "/electrical/Screenshot 2026-01-08 140658.png",
          ]}
          specs={["Voltage: 400V DC", "BMS: Dual-Redundant", "Safety: HV-Isolation"]}
        />

        <SystemSection
          title="Mechanical"
          icon={<Layers />}
          reverse
          content="The Mechanical structure is built around a Carbon Fiber Reinforced Polymer (CFRP) monocoque. This provides the highest strength-to-weight ratio, crucial for sub-vacuum stability."
          images={[]}
          specs={["Chassis: CFRP T700", "FOS: 2.5", "Design: Monocoque"]}
        />

        <SystemSection
          title="GUI"
          icon={<Monitor />}
          content="The Graphical User Interface (GUI) and Mission Control software provide the critical link between the pod and ground operators. The dashboard visualizes over 200 real-time telemetry streams."
          images={[]}
          specs={["Refresh Rate: 60fps", "Data Link: 5.8GHz", "OS: Linux RT"]}
        />

        <SystemSection
          title="Thermal"
          icon={<Thermometer />}
          reverse
          content="In a vacuum, convection cooling is impossible. The Thermal subsystem utilizes Phase Change Materials (PCM) which act as a heat sink, absorbing excess heat during operation."
          images={[
            "/thermal/Screenshot 2026-01-08 140750.png",
            "/thermal/Screenshot 2026-01-08 140757.png",
          ]}
          specs={["Cooling: Passive PCM", "Max Load: 15kW", "Duration: 20min Run"]}
        />

        <SystemSection
          title="Infrastructure"
          icon={<Construction />}
          content="The Infrastructure team designs the physical guideway and vacuum tube environment. This includes precision-aligned I-beams and specialized expansion joints for the tube pylons."
          images={[]}
          specs={[
            "Beam Type: AA6061",
            "Tube Material: Low-Carbon Steel",
            "Alignment: <2mm Tolerance",
          ]}
        />

        {/* ================= FOOTER ================= */}
        <footer className="py-20 border-t border-white/5 bg-black px-4 text-center">
          <Terminal size={28} className="mx-auto text-green-500 animate-pulse mb-4" />
          <p className="font-mono text-[10px] tracking-[0.6em] text-white/40 uppercase">
            Avishkar Hyperloop // IIT Madras
          </p>
          <p className="font-mono text-[8px] text-gray-700 tracking-[0.4em] mt-2">
            SYST_CORE_V5.0 // 2026 EDITION
          </p>
        </footer>
      </div>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </div>
  );
}

/* ================= HELPERS ================= */

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
        {label}
      </span>
      <span className="text-xl font-black italic">{value}</span>
    </div>
  );
}

function SubsystemTile({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 md:p-8 border border-white/5 bg-black/60 backdrop-blur-md"
    >
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="font-black italic uppercase">{title}</h3>
      <p className="font-mono text-[10px] text-green-500/60 uppercase">
        {desc}
      </p>
    </motion.div>
  );
}

function SystemSection({
  title,
  icon,
  content,
  images,
  reverse,
  specs,
}: any) {
  return (
    <section className="py-20 md:py-40 px-4 md:px-6 max-w-7xl mx-auto">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-12 md:gap-24`}
      >
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 md:p-4 bg-green-500 text-black">
              {React.cloneElement(icon, { size: 24 })}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase">
              {title}
            </h2>
          </div>

          <p className="text-gray-400 mb-8">{content}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {specs.map((s: string, i: number) => (
              <div key={i}>
                <span className="text-green-500 font-mono text-[9px] uppercase">
                  Spec_{i + 1}
                </span>
                <p className="text-xs font-bold italic">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {images && images.length > 0 && (
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:h-[450px]">
              {images.map((img: string, i: number) => (
                <div
                  key={i}
                  className={`${
                    i === 0
                      ? "col-span-2 md:h-[260px]"
                      : "md:h-[170px]"
                  } h-[160px]`}
                >
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
    <div className="w-full bg-green-500 py-3 overflow-hidden border-y border-black">
      <motion.div
        animate={{ x: [0, -800] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-16 items-center whitespace-nowrap text-black font-black italic text-sm uppercase"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i}>
            Velocity 250m/s • Vacuum 0.001ATM • SYNC_NOMINAL
          </span>
        ))}
      </motion.div>
    </div>
  );
}
