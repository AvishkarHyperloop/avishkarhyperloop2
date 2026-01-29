"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useProgress, Html } from "@react-three/drei";
import * as THREE from "three";
import { Zap, Magnet, Wind, Cpu, Loader2 } from "lucide-react";

/* ======================================================
   NEW: 3D MODEL LOADER COMPONENT
====================================================== */
function ModelLoader() {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-64 text-emerald-500 font-tech">
        {/* Animated Scanner Ring */}
        <div className="relative w-20 h-20 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <Loader2 size={24} className="animate-spin opacity-50" />
          </div>
        </div>

        {/* Diagnostic Text */}
        <div className="w-full space-y-2">
          <div className="flex justify-between text-[10px] tracking-[0.2em] uppercase">
            <span>Mesh_Sync</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[1px] w-full bg-emerald-950 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
            />
          </div>
          <p className="text-[8px] text-center opacity-40 animate-pulse tracking-widest mt-2">
            FETCHING_GEOMETRY_PROTOCOLS...
          </p>
        </div>
      </div>
    </Html>
  );
}

/* ======================================================
   TEXT DATA (Remains same)
====================================================== */
const TECH_DATA = [
  {
    id: "propulsion",
    title: "LINEAR INDUCTION DRIVE",
    subtitle: "CONTACTLESS HIGH-THRUST PROPULSION",
    description:
      "Garuda’s DSLIM propulsion system induces eddy currents in the aluminium rail to generate thrust without mechanical contact.",
    icon: Zap,
  },
  {
    id: "levitation",
    title: "MAGNETIC LEVITATION & GUIDANCE",
    subtitle: "ELECTROMAGNETIC SUSPENSION ARCHITECTURE",
    description:
      "EMS actuators generate lift and lateral stability, keeping the pod centred in the tube at all speeds.",
    icon: Magnet,
  },
  {
    id: "vacuum",
    title: "LOW-PRESSURE TUBE",
    subtitle: "NEAR-VACUUM TEST ENVIRONMENT",
    description:
      "The dedicated Hyperloop vacuum tube reduces aerodynamic drag by orders of magnitude, enabling realistic high-speed system validation.",
    icon: Wind,
  },
  {
    id: "ai",
    title: "AUTONOMOUS CONTROL SYSTEM",
    subtitle: "REAL-TIME DECISION ENGINE",
    description:
      "A distributed embedded control layer oversees propulsion, levitation, braking, and telemetry under a real-time OS.",
    icon: Cpu,
  },
];

/* ======================================================
   POD MODEL 
====================================================== */
function PodModel() {
  const { scene } = useGLTF("/models/pod-v2.glb", "/draco/");
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.6;
    ref.current.position.z = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
  });

  return <primitive ref={ref} object={scene} scale={0.25} />;
}

useGLTF.preload("/models/pod-v2.glb", "/draco/");

/* ======================================================
   TECH SLIDE (Remains same)
====================================================== */
function TechSlide({
  item,
  index,
  total,
  progress,
}: {
  item: typeof TECH_DATA[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  const fadeInPoint = start + segment * 0.2;
  const holdPoint = end - segment * 0.2;

  const opacity = useTransform(
    progress,
    [start, fadeInPoint, holdPoint, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, fadeInPoint, holdPoint, end],
    ["3rem", "0rem", "0rem", "-3rem"]
  );

  const Icon = item.icon;

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center will-change-[transform,opacity]"
    >
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            <Icon size={18} />
          </div>
          <span className="text-emerald-400 font-tech text-[10px] uppercase tracking-[0.3em]">
            {item.subtitle}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-tech font-bold text-white leading-tight mb-4 uppercase italic">
          {item.title}
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-emerald-500/40 pl-4 py-3 bg-black/50 backdrop-blur-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ======================================================
   MAIN EXPORT
====================================================== */
export function TechnologyParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${TECH_DATA.length * 150}vh` }} // Increased height for better scroll feel
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background HUD Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-10 w-32 h-32 border-l border-t border-emerald-500/30" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 border-r border-b border-emerald-500/30" />
        </div>

        <div className="relative max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10">

          {/* LEFT — Rotating Pod */}
          <div className="relative w-full md:w-2/3 aspect-square md:aspect-[4/3] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.15),transparent_70%)] blur-3xl opacity-60" />

            <Canvas
              camera={{ position: [0, 0.4, 3], fov: 20 }}
              dpr={1}
              gl={{ antialias: false, powerPreference: "default" }}
            >
              <ambientLight intensity={0.55} />
              <directionalLight position={[2, 3, 3]} intensity={1.0} />

              <React.Suspense fallback={<ModelLoader />}>
                <PodModel />
              </React.Suspense>
            </Canvas>
          </div>

          {/* RIGHT — Sliding Text */}
          <div className="relative w-full md:w-1/2 h-[320px] md:h-[400px]">
            {TECH_DATA.map((item, i) => (
              <TechSlide
                key={item.id}
                item={item}
                index={i}
                total={TECH_DATA.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}