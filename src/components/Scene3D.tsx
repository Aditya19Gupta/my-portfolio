"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed, type }: { position: [number, number, number], color: string, speed: number, type: 'box' | 'sphere' | 'torus' }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speed;
            meshRef.current.rotation.y += delta * speed * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.2 : 1}
            >
                {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
                {type === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
                {type === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
                <meshStandardMaterial
                    color={color}
                    metalness={0.6}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.5 : 0.1}
                />
            </mesh>
        </Float>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />

                {/* Explicitly disable fade and set speed to 0 to prevent twinkling/disappearing */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade={false} speed={0} />

                <group position={[0, 0, 0]}>
                    {/* Left side shapes */}
                    <FloatingShape position={[-7, 2, -2]} color="#4f46e5" speed={0.5} type="box" />
                    <FloatingShape position={[-6, -3, -1]} color="#ec4899" speed={0.6} type="torus" />
                    <FloatingShape position={[-8, 0, -3]} color="#3b82f6" speed={0.4} type="sphere" />

                    {/* Right side shapes */}
                    <FloatingShape position={[7, -2, -3]} color="#9333ea" speed={0.4} type="sphere" />
                    <FloatingShape position={[6, 3, -4]} color="#3b82f6" speed={0.3} type="box" />
                    <FloatingShape position={[8, 1, -2]} color="#6366f1" speed={0.2} type="torus" />

                    {/* Center background shapes */}
                    <FloatingShape position={[0, 5, -10]} color="#8b5cf6" speed={0.2} type="sphere" />
                    <FloatingShape position={[0, -5, -10]} color="#d946ef" speed={0.3} type="box" />
                </group>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
