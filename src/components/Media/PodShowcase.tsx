"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, ScrollControls, useScroll, Image as ImageImpl, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Images for the floating gallery
const images = [
    "/media/image1.jpg",
    "/media/image2.jpg",
    "/media/image3.jpg",
    "/media/image4.jpg",
    "/media/image5.jpeg",
    "/media/image6.jpg",
    "/media/image11.jpg",
    "/media/image12.jpg",
];

function PodModel({ scale = [1, 1, 1] }: { scale?: number[] }) {
    const { scene } = useGLTF('/models/pod-v2.glb');
    // No auto-rotation, handled by parent
    return <primitive object={scene} scale={scale} />;
}

function SceneContent() {
    const scroll = useScroll();
    const group = useRef<THREE.Group>(null);
    const { width } = useThree((state) => state.viewport);

    // Responsive sizing
    const isMobile = width < 7;
    const radius = isMobile ? 2.5 : 4.5;
    // Adjusted scales: Pod slightly bigger, Images smaller
    const podScale = isMobile ? [0.6, 0.6, 0.6] : [0.9, 0.9, 0.9];
    const imgScale = isMobile ? [1.5, 1, 1] : [2.5, 1.5, 1];

    useFrame((state, delta) => {
        if (group.current) {
            // Rotate the entire group based on scroll offset (360 degrees over scroll)
            const targetRotation = scroll.offset * Math.PI * 2;

            group.current.rotation.y = THREE.MathUtils.damp(
                group.current.rotation.y,
                targetRotation,
                4,
                delta
            );
        }
    });

    return (
        <group ref={group}>
            <PodModel scale={podScale} />

            {images.map((img, i) => {
                const angle = (i / images.length) * Math.PI * 2;
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;

                return (
                    <ImageImpl
                        key={i}
                        url={img}
                        position={[x, 0, z]}
                        scale={imgScale}
                        rotation={[0, angle, 0]} // Face outward/tangent? Or face center?
                        // If we want them to look at the pod (center), we use rotation={[0, angle, 0]} which aligns with radius vector if setup right.
                        // Actually, default plane faces +Z. 
                        // Position x=sin, z=cos.
                        // Rotation y=angle makes it face "outwards" from center usually.
                        // Let's try facing center by adding PI.
                        // But usually "gallery" means you see them as you rotate.
                        // Let's stick to facing the center so they "surround" the pod.
                        side={THREE.DoubleSide}
                        transparent
                    />
                );
            })}
        </group>
    );
}

export default function PodShowcase() {
    return (
        <section className="h-[300vh] w-full bg-[#050505] relative z-0">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Overlay Text */}
                <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
                    <span className="text-green-500 font-tech tracking-[0.5em] text-xs uppercase block mb-2">Technical Showcase</span>
                    <h2 className="text-4xl md:text-5xl font-tech font-bold text-white/90">THE ARCHITECTURE</h2>
                </div>

                <Canvas camera={{ position: [0, 1.5, 8], fov: 45 }} gl={{ antialias: true }}>
                    <color attach="background" args={['#050505']} />
                    <fog attach="fog" args={['#050505', 5, 20]} />

                    <ambientLight intensity={1} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} />
                    <pointLight position={[-10, 5, -10]} intensity={1} />

                    <Environment preset="city" />

                    <ScrollControls pages={3} damping={0.2}>
                        <SceneContent />
                    </ScrollControls>
                </Canvas>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] font-tech tracking-[0.3em] pointer-events-none animate-pulse">
                    SCROLL TO EXPLORE
                </div>
            </div>
        </section>
    )
}

useGLTF.preload('/models/pod-v2.glb');
