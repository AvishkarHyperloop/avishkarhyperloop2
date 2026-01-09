"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layers,
  Wind,
  Zap,
  Construction,
  Cpu,
  Thermometer,
  ArrowDown,
  Database,
  Globe,
} from "lucide-react";

/* ================= MOTION CONFIG ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ================= PAGE ================= */

export default function SubsystemsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pt-24 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2600&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/40 to-black" />
        </div>
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  transition={{ duration: 0.9 }}
  className="
    relative z-10
    w-full
    flex flex-col items-center justify-center
    px-8
    text-center
  "
>
  <span className="block text-green-400 font-tech tracking-[0.6em] uppercase text-sm mb-10">
    Avishkar Hyperloop · Systems Engineering
  </span>

  <h1 className="
    font-tech font-extrabold
    text-[clamp(4rem,12vw,9rem)]
    leading-[0.88]
    tracking-tight
    text-center
  ">
    SUBSYSTEMS
  </h1>

  <p className="
    mt-10
    max-w-3xl
    mx-auto
    text-gray-300
    text-xl
    leading-relaxed
  ">
    Deep-engineered subsystems enabling stable, safe, and efficient
    operation of a near-vacuum Hyperloop pod at transonic speeds.
  </p>
</motion.div>


        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ArrowDown size={30} />
        </motion.div>
      </section>

      {/* ================= OVERVIEW GRID ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-32 px-8 max-w-7xl mx-auto"
      >
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          <SubsystemTile icon={<Zap size={30} />} title="Propulsion" />
          <SubsystemTile icon={<Wind size={30} />} title="Levitation" />
          <SubsystemTile icon={<Thermometer size={30} />} title="Thermal" />
          <SubsystemTile icon={<Cpu size={30} />} title="Electrical & Control" />
          <SubsystemTile icon={<Database size={30} />} title="Sense & Telemetry" />
          <SubsystemTile icon={<Layers size={30} />} title="Mechanical" />
          <SubsystemTile icon={<Construction size={30} />} title="Infrastructure" />
          <SubsystemTile icon={<Globe size={30} />} title="Business & SER" />
        </motion.div>
      </motion.section>

      <DataStrip />

      {/* ================= PROPULSION ================= */}
      <SystemHeader icon={<Zap size={32} />} title="Propulsion Subsystem" />

      <TechBlock title="Dual-Mode Linear Propulsion Architecture">
        <p>
          The propulsion system implements a dual-mode strategy combining
          synchronous boosting and induction-based cruising using a single
          onboard motor architecture.
        </p>
        <p>
          During launch, DC excitation enables synchronous interaction with
          3-phase guideway coils, delivering high thrust and rapid acceleration.
        </p>
        <p>
          At cruise speed, pneumatic actuators align the motor with a passive
          aluminum T-track, transitioning the same motor to linear induction
          operation powered by 3-phase AC.
        </p>
        <p className="text-green-400 font-tech tracking-widest text-xl">
          “ LAUNCH HARD · CRUISE SMART ”
        </p>
      </TechBlock>

      <ImageGrid images={[
        "/propulsion/Screenshot 2026-01-08 140318.png",
        "/propulsion/Screenshot 2026-01-08 140326.png",
        "/propulsion/Screenshot 2026-01-08 140337.png",
        "/propulsion/Screenshot 2026-01-08 140343.png",
        "/propulsion/Screenshot 2026-01-08 140354.png",
        "/propulsion/Screenshot 2026-01-08 140403.png",
        "/propulsion/Screenshot 2026-01-08 140414.png",
      ]} />

      {/* ================= LEVITATION ================= */}
      <SystemHeader icon={<Wind size={32} />} title="Levitation Subsystem" />

      <TechBlock title="Electromagnetic Suspension Architecture">
        <ul>
          <li>LEMS – Low-speed Electromagnetic Suspension</li>
          <li>HEMS – High-speed Electromagnetic Suspension</li>
          <li>ANSYS-validated electromagnetic models</li>
          <li>Active gap sensing with closed-loop control</li>
          <li>Mechanical fallback wheels for fail-safe touchdown</li>
        </ul>
      </TechBlock>

      <ImageGrid images={[
        "/lems/Screenshot 2026-01-08 140514.png",
        "/lems/Screenshot 2026-01-08 140519.png",
        "/lems/Screenshot 2026-01-08 140528.png",
        "/lems/Screenshot 2026-01-08 140534.png",
      ]} />

      {/* ================= ELECTRICAL ================= */}
      <SystemHeader icon={<Cpu size={32} />} title="Electrical Subsystem" />

      <TechBlock title="High-Voltage Power">
        <p>
          A high-voltage battery pack supplies energy to the propulsion inverter
          driving the Linear Induction Motor. An integrated battery management
          system monitors voltages, currents, and temperatures and can trigger
          safe shutdowns.
        </p>
        <p>
          Liquid-cooled thermal plates and temperature sensors maintain cells
          within a safe operating window during high-power operation.
        </p>
      </TechBlock>

      <TechBlock title="Low-Voltage Distribution & Safety">
        <p>
          A separate low-voltage pack powers levitation, control electronics,
          sensors, and auxiliary systems via DC-DC converters generating
          protected multi-rail outputs.
        </p>
        <p>
          A dedicated shutdown circuit can isolate high voltage, disable
          propulsion and levitation, and enforce a predefined safe state.
        </p>
      </TechBlock>

      <ImageGrid images={[
        "/electrical/Screenshot 2026-01-08 140640.png",
        "/electrical/Screenshot 2026-01-08 140650.png",
        "/electrical/Screenshot 2026-01-08 140658.png",
        "/electrical/Screenshot 2026-01-08 140706.png",
      ]} />

      {/* ================= THERMAL ================= */}
      <SystemHeader icon={<Thermometer size={32} />} title="Thermal Subsystem" />

      <TechBlock title="Vacuum-Compatible Thermal Architecture">
        <p>
          Conventional air cooling is ineffective in vacuum. The thermal
          subsystem is engineered for compact, efficient heat management under
          near-vacuum conditions.
        </p>
        <p>
          Direct coil-level cooling extracts localized heat from the Linear
          Induction Motor using electrically insulated, thermally conductive
          interfaces.
        </p>
        <p>
          Centralized heat rejection employs PCMs and low-pressure boiling,
          resulting in patented thermal technologies.
        </p>
      </TechBlock>

      <ImageGrid images={[
        "/thermal/Screenshot 2026-01-08 140750.png",
        "/thermal/Screenshot 2026-01-08 140757.png",
      ]} />

      {/* ================= FOOTER ================= */}
      <footer className="py-24 text-center text-xs tracking-[0.4em] text-gray-500 border-t border-white/5">
        AVISHKAR HYPERLOOP · SYSTEMS ENGINEERING DIVISION
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SubsystemTile({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/40 transition-all"
    >
      <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg border border-white/20 text-green-400">
        {icon}
      </div>
      <h3 className="font-tech text-xl uppercase tracking-widest">
        {title}
      </h3>
    </motion.div>
  );
}

function DataStrip() {
  return (
    <section className="py-16 bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <Metric label="Tube Pressure" value="~1000 Pa" />
        <Metric label="Target Speed" value="250 m/s" />
        <Metric label="Levitation Gap" value="mm-scale" />
        <Metric label="Safety Latency" value="< 50 ms" />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <motion.div variants={fadeUp}>
      <div className="text-green-400 font-tech text-4xl font-bold">{value}</div>
      <div className="text-gray-400 text-xs uppercase tracking-[0.3em] mt-3">
        {label}
      </div>
    </motion.div>
  );
}

function SystemHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg border border-white/20 text-green-400">
          {icon}
        </div>
        <h2 className="font-tech font-extrabold text-6xl tracking-tight">
          {title}
        </h2>
      </div>
    </motion.section>
  );
}

function TechBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="px-8 max-w-7xl mx-auto pb-20"
    >
      <div className="border-l-4 border-green-500/60 pl-10">
        <h4 className="text-green-400 font-tech uppercase tracking-[0.45em] text-sm mb-8">
          {title}
        </h4>
        <div className="text-gray-300 text-xl leading-relaxed space-y-7">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  return (
    <section className="px-8 max-w-7xl mx-auto pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="relative h-[340px] md:h-[380px] rounded-xl overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src={src}
              alt="Subsystem visual"
              fill
              className="object-contain p-6"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
