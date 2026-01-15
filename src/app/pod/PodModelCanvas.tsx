"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";

function PodMesh({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.75} position={[0, -0.5, 0]} />;
}

export default function PodModelCanvas({ url }: { url: string }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 1.2, 3.2], fov: 55 }}
      dpr={1}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1} />

      <Suspense
        fallback={
          <Html center>
            <div className="text-white text-xs tracking-widest uppercase">
              Loading Model…
            </div>
          </Html>
        }
      >
        <PodMesh url={url} />
      </Suspense>

      {!isMobile && (
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      )}
    </Canvas>
  );
}
