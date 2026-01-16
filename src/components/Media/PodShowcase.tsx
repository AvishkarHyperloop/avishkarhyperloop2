"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Image as ImageImpl, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Images for the floating gallery
const images = [
    "/media/image1.jpg",
    "/media/image2.jpg",
    "/media/image3.jpg",

    "/media/image5.jpeg",
    "/media/image6.jpg",
    "/media/image11.JPG",
    "/media/image12.JPG",
];

function PodModel({ scale = [1, 1, 1] }: { scale?: number[] }) {
    const { scene } = useGLTF('/models/pod-v2.glb');
    return <primitive object={scene} scale={scale} />;
}

function SceneContent({ progress }: { progress: React.MutableRefObject<number> }) {
    const group = useRef<THREE.Group>(null);
    const { width } = useThree((state) => state.viewport);

    // Responsive sizing
    const isMobile = width < 7;
    const radius = isMobile ? 2.5 : 4.5;
    // Adjusted scales: Pod slightly bigger, Images smaller
    const podScale = isMobile ? [0.6, 0.6, 0.6] : [0.9, 0.9, 0.9];
    const imgScale: [number, number] = isMobile ? [1.5, 1] : [2.5, 1.5];

    useFrame((state, delta) => {
        if (group.current) {
            // Rotate the entire group based on scroll offset (360 degrees over scroll)
            const targetRotation = progress.current * Math.PI * 2;

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
                        rotation={[0, angle, 0]}
                        side={THREE.DoubleSide}
                        transparent
                    />
                );
            })}
        </group>
    );
}

export default function PodShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    // Use a mutable ref to store progress to avoid re-rendering layout just for passing value,
    // though passing ref is standard pattern for bridging React/Canvas freq updates.
    const progress = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const { top, height } = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on how much of the section has been scrolled
            // When top == 0 (section starts being sticky), progress = 0
            // When top == -(height - windowHeight), progress = 1
            const scrollDistance = height - windowHeight;
            if (scrollDistance <= 0) return;

            let p = -top / scrollDistance;
            // Clamp between 0 and 1
            p = Math.max(0, Math.min(1, p));
            progress.current = p;
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="h-[300vh] w-full bg-[#050505] relative z-0">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Overlay Text */}
                <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
                    <span className="text-green-500 font-tech tracking-[0.5em] text-xs uppercase block mb-2">Technical Showcase</span>
                    <h2 className="text-4xl md:text-5xl font-tech font-bold text-white/90">THE ARCHITECTURE</h2>
                </div>

                <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 8], fov: 45 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
                    <color attach="background" args={['#050505']} />
                    <fog attach="fog" args={['#050505', 5, 20]} />

                    <ambientLight intensity={1} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} />
                    <pointLight position={[-10, 5, -10]} intensity={1} />

                    <Environment preset="city" />

                    <SceneContent progress={progress} />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableDamping
                        dampingFactor={0.05}
                        rotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2 + 0.2} // Limit vertical rotation slightly
                        minPolarAngle={Math.PI / 2 - 0.2}
                    />
                </Canvas>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] font-tech tracking-[0.3em] pointer-events-none animate-pulse">
                    SCROLL TO EXPLORE • DRAG TO ROTATE
                </div>
            </div>
        </section>
    )
}

useGLTF.preload('/models/pod-v2.glb');
