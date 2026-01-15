"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";

/* ================= TYPES ================= */

type PodModelProps = {
  url: string;
};

/* ================= MODEL ================= */

function PodMesh({ url }: PodModelProps) {
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

useGLTF.preload("/models/pod-v1.glb");
useGLTF.preload("/models/pod-v2.glb");

/* ================= CANVAS ================= */

export default function PodModelCanvas({ url }: PodModelProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
      {/* ===== PRE-RENDER INDICATOR (VISIBLE IMMEDIATELY) ===== */}
      {showOverlay && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="text-white text-xs tracking-widest uppercase animate-pulse">
            Initializing 3D Pod
          </div>
        </div>
      )}

      <Canvas
        camera={{
          position: isMobile ? [0, 1, 4] : [0, 1.2, 3.2],
          fov: isMobile ? 60 : 55,
        }}
        dpr={isMobile ? 1 : [1, 1.6]}
        onCreated={() => setShowOverlay(false)}
      >
        {/* ===== LIGHTING ===== */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1} />

        {/* ===== MODEL LOADING ===== */}
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
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={isMobile ? 0.6 : 0.8}
        />
      </Canvas>
    </div>
  );
}
