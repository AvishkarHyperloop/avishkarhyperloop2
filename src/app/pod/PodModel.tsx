"use client";

import React, { useEffect, useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";

/* ================= TYPES ================= */

type PodModelProps = {
  url: string;
  inView?: boolean;
};

/* ================= MODEL ================= */

function PodMesh({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      scale={0.75}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / 10, 0]}
    />
  );
}

/* ================= CANVAS ================= */

export default function PodModelCanvas({ url, inView = true }: PodModelProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);
  const controls = useRef<any>(null);

  /* ===== DEVICE CHECK (RUNS ONCE) ===== */
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
      {/* ===== LOADING OVERLAY ===== */}
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="text-white text-xs tracking-widest uppercase animate-pulse">
            Initializing 3D Pod
          </div>
        </div>
      )}

      {/* 
         Frameloop 'never' pauses the loop. 
         We only run it when in layout view to save MASSIVE GPU resources 
      */}
      <Canvas
        frameloop={inView ? "always" : "never"}
        camera={{
          position: isMobile ? [0, 1, 4] : [0, 1.2, 3.2],
          fov: isMobile ? 60 : 55,
        }}
        dpr={1} // Strict 1x DPR to fix scroll lag on all devices
        gl={{ antialias: false, powerPreference: "default", alpha: true }} // Disabling AA is huge for performance
        onCreated={() => {
          // delay overlay removal to avoid jank
          setTimeout(() => setReady(true), 150);
        }}
      >
        {/* ===== LIGHTING ===== */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1} />

        {/* ===== MODEL ===== */}
        <Suspense
          fallback={
            <Html center>
              <div className="text-white text-[10px] tracking-widest uppercase">
                Loading Model…
              </div>
            </Html>
          }
        >
          <PodMesh url={url} />
        </Suspense>

        {/* ===== CONTROLS ===== */}
        <OrbitControls
          ref={controls}
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={isMobile ? 0.5 : 0.7}
        />
      </Canvas>
    </div>
  );
}

