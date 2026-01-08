"use client";

import React, { useEffect } from "react";
import Image from "next/image";
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

/* ================= PAGE ================= */

export default function SubsystemsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pt-20">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2600&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black" />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6">
          <span className="text-green-500 font-tech tracking-[0.6em] text-xs uppercase block mb-6">
            Avishkar Hyperloop · IIT Madras
          </span>

          <h1 className="text-6xl md:text-8xl font-tech font-bold leading-[0.95] mb-6">
            SUBSYSTEMS
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Integrated engineering subsystems operating inside a near-vacuum,
            transonic transportation platform.
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/20">
          <ArrowDown />
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SubsystemTile icon={<Globe />} title="Business & SER" />
          <SubsystemTile icon={<Cpu />} title="Electrical & Control" />
          <SubsystemTile icon={<Database />} title="GUI & Telemetry" />
          <SubsystemTile icon={<Construction />} title="Infrastructure" />
          <SubsystemTile icon={<Wind />} title="Levitation" />
          <SubsystemTile icon={<Layers />} title="Mechanical" />
          <SubsystemTile icon={<Zap />} title="Propulsion" />
          <SubsystemTile icon={<Thermometer />} title="Thermal" />
        </div>
      </section>

      <DataStrip />

      {/* ================= PROPULSION ================= */}
      <SystemSection
        icon={<Zap />}
        title="Propulsion"
        role="Next-generation dual-mode linear propulsion delivering high-thrust launch and ultra-efficient cruise."
        tech={[
          "DC-excited Linear Synchronous Booster Motor",
          "Linear Induction Cruising Motor",
          "Single onboard motor architecture",
          "Pneumatic actuator-based alignment",
          "Battery-powered inverter drive",
        ]}
        kpis={[
          "Controlled high-thrust launch",
          "Seamless booster → cruise transition",
          "Minimal drag losses in vacuum",
          "Reduced onboard mass",
        ]}
      />

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="mb-12">
          <div className="max-w-3xl text-gray-300 text-sm space-y-4">
            <p>
              The propulsion system uses a smart dual-mode strategy. During the
              boosting phase, DC excitation enables synchronous interaction with
              3-phase guideway coils, producing high thrust and rapid acceleration.
            </p>
            <p>
              At cruising speed, pneumatic actuators precisely align the motor
              with a passive aluminum T-track. The same motor transitions to
              linear induction operation, energized by 3-phase AC.
            </p>
            <p className="text-green-400 font-tech tracking-widest">
              " LAUNCH HARD · CRUISE SMART "
            </p>
          </div>
        </div>
        <ImageGrid 
          images={[
            "/propulsion/Screenshot 2026-01-08 140318.png",
            "/propulsion/Screenshot 2026-01-08 140326.png",
            "/propulsion/Screenshot 2026-01-08 140337.png",
            "/propulsion/Screenshot 2026-01-08 140343.png",
            "/propulsion/Screenshot 2026-01-08 140354.png",
            "/propulsion/Screenshot 2026-01-08 140403.png",
            "/propulsion/Screenshot 2026-01-08 140414.png",
          ]}
        />
      </section>

      {/* ================= ELECTRICAL & CONTROL ================= */}
      <SystemSection
        icon={<Cpu />}
        title="Electrical & Sense Control"
        role="Power distribution, protection, sensing, and real-time control across all pod subsystems."
        tech={[
          "High-voltage battery pack with BMS",
          "Liquid-cooled battery thermal plates",
          "Low-voltage auxiliary power system",
          "DC-DC conversion to multiple rails",
          "Hardwired shutdown supervision",
        ]}
        kpis={[
          "Safe HV shutdown on fault",
          "Stable multi-rail power delivery",
          "Deterministic control loops",
          "Live telemetry streaming",
        ]}
      />

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="mb-10">
          <InfoCard
            title="Sense & Control Architecture"
            items={[
              "Electrical sensing: voltages, currents, temperatures",
              "Mechanical & thermal sensing: gaps, coolant, structures",
              "Cabin sensing: pressure, gas levels, humidity",
              "Local ECUs for propulsion, levitation, thermal, cabin",
              "Main Control Unit running pod state machine",
              "Real-time field bus + Ethernet star topology",
              "Wireless telemetry to track-side base station",
            ]}
          />
        </div>
        <ImageGrid 
          images={[
            "/electrical/Screenshot 2026-01-08 140640.png",
            "/electrical/Screenshot 2026-01-08 140650.png",
            "/electrical/Screenshot 2026-01-08 140658.png",
            "/electrical/Screenshot 2026-01-08 140706.png",
          ]}
        />
      </section>

      {/* ================= THERMAL ================= */}
      <SystemSection
        icon={<Thermometer />}
        title="Thermal"
        role="Vacuum-compatible thermal architecture ensuring safe operation of motors, batteries, and electronics."
        tech={[
          "Direct coil-level LIM cooling",
          "Electrically insulated thermal interfaces",
          "Conduction-based battery cooling",
          "Centralized heat rejection using PCMs",
          "Low-pressure boiling heat transfer",
        ]}
        kpis={[
          "Motor coils within limits",
          "Battery packs in safe window",
          "Compact vacuum heat rejection",
          "Experimentally validated designs",
        ]}
      />

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <ImageGrid 
          images={[
            "/thermal/Screenshot 2026-01-08 140750.png",
            "/thermal/Screenshot 2026-01-08 140757.png",
          ]}
        />
      </section>

      {/* ================= LEVITATION ================= */}
      <SystemSection
        icon={<Wind />}
        title="Levitation"
        role="Hybrid electromagnetic suspension system providing stable, contactless lift and guidance."
        tech={[
          "LEMS for low-speed operation",
          "HEMS for high-speed levitation",
          "Active gap sensing and control",
          "Mechanical fallback wheels",
          "ANSYS-validated EM models",
        ]}
        kpis={[
          "Stable mm-scale air gap",
          "Smooth LEMS → HEMS transition",
          "Numerical & experimental validation",
          "Fail-safe touchdown capability",
        ]}
      />

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <ImageGrid 
          images={[
            "/lems/Screenshot 2026-01-08 140514.png",
            "/lems/Screenshot 2026-01-08 140519.png",
            "/lems/Screenshot 2026-01-08 140528.png",
            "/lems/Screenshot 2026-01-08 140534.png",
          ]}
        />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-20 text-center text-sm text-gray-500 border-t border-white/5">
        Avishkar Hyperloop · Systems Architecture
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SubsystemTile({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 transition-all">
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg border border-white/20 text-green-400">
        {icon}
      </div>
      <h3 className="font-tech font-bold">{title}</h3>
    </div>
  );
}

function DataStrip() {
  return (
    <section className="py-12 bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
    <div>
      <div className="text-green-400 font-tech text-2xl font-bold">{value}</div>
      <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}

function SystemSection({
  icon,
  title,
  role,
  tech,
  kpis,
}: {
  icon: React.ReactNode;
  title: string;
  role: string;
  tech: string[];
  kpis: string[];
}) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/20 text-green-400">
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-tech font-bold">{title}</h2>
      </div>

      <p className="text-gray-400 max-w-3xl mb-10">{role}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard title="Core Technologies" items={tech} />
        <InfoCard title="Acceptance KPIs" items={kpis} />
      </div>
    </section>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h4 className="font-tech font-bold text-green-400 mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {items.map((i) => (
          <li key={i}>— {i}</li>
        ))}
      </ul>
    </div>
  );
}

function AnimatedBlock({ label }: { label: string }) {
  return (
    <div className="relative h-[320px] rounded-2xl border border-white/10 bg-black flex items-center justify-center text-gray-500 text-sm">
      {label}
    </div>
  );
}

function VideoCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black h-[200px] flex items-center justify-center text-gray-500 text-xs text-center px-4">
      {title}
    </div>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-black">
        <Image
          src={images[0]}
          alt="Subsystem image"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src={src}
              alt={`Subsystem image ${idx + 1}`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    );
  }

  if (images.length <= 4) {
    return (
      <div className="grid grid-cols-2 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src={src}
              alt={`Subsystem image ${idx + 1}`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    );
  }

  // For more than 4 images, use a responsive grid
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-black"
        >
          <Image
            src={src}
            alt={`Subsystem image ${idx + 1}`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
