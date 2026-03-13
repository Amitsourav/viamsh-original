'use client';

import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// ---------- Color themes per product variant ----------

const PRODUCT_THEMES = [
  { primary: '#6366F1', secondary: '#818CF8', accent: '#C7D2FE' },
  { primary: '#8B5CF6', secondary: '#A78BFA', accent: '#DDD6FE' },
  { primary: '#7C3AED', secondary: '#8B5CF6', accent: '#C4B5FD' },
];

// ---------- Product packet ----------

function ProductPacket({ activeIndex }: { activeIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const stripMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const theme = PRODUCT_THEMES[activeIndex] ?? PRODUCT_THEMES[0];
  const targetPrimary = useMemo(() => new THREE.Color(theme.primary), [theme.primary]);
  const targetSecondary = useMemo(() => new THREE.Color(theme.secondary), [theme.secondary]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.008;
      groupRef.current.scale.setScalar(breathe);
    }
    if (bodyMatRef.current) {
      bodyMatRef.current.color.lerp(targetPrimary, delta * 3);
      bodyMatRef.current.emissive.lerp(targetPrimary, delta * 3);
    }
    if (stripMatRef.current) {
      stripMatRef.current.color.lerp(targetSecondary, delta * 3);
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.4}>
      <group ref={groupRef}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.2, 3, 0.7]} />
          <meshStandardMaterial
            ref={bodyMatRef}
            color={theme.primary}
            metalness={0.08}
            roughness={0.45}
            emissive={theme.primary}
            emissiveIntensity={0.06}
          />
        </mesh>

        <mesh position={[0, 0, 0.351]}>
          <planeGeometry args={[1.8, 1.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.7} />
        </mesh>

        <mesh position={[0, 0.15, 0.36]}>
          <circleGeometry args={[0.35, 32]} />
          <meshStandardMaterial
            color={theme.primary}
            emissive={theme.primary}
            emissiveIntensity={0.1}
          />
        </mesh>

        <mesh position={[0, 0.15, 0.365]}>
          <ringGeometry args={[0.18, 0.28, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0, -0.25, 0.36]}>
          <planeGeometry args={[1.4, 0.03]} />
          <meshStandardMaterial color={theme.primary} />
        </mesh>

        <mesh position={[0, -0.4, 0.36]}>
          <planeGeometry args={[0.9, 0.06]} />
          <meshStandardMaterial color="#999999" />
        </mesh>
        <mesh position={[0, -0.52, 0.36]}>
          <planeGeometry args={[0.6, 0.06]} />
          <meshStandardMaterial color="#bbbbbb" />
        </mesh>

        <mesh position={[0, 1.15, 0.351]}>
          <planeGeometry args={[2.15, 0.5]} />
          <meshStandardMaterial ref={stripMatRef} color={theme.secondary} roughness={0.4} />
        </mesh>

        <mesh position={[0, 1.15, 0.36]}>
          <planeGeometry args={[0.8, 0.08]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>

        <mesh position={[0, -1.22, 0.351]}>
          <planeGeometry args={[2.15, 0.35]} />
          <meshStandardMaterial color="#4F46E5" metalness={0.3} roughness={0.3} />
        </mesh>

        <mesh position={[0, -1.22, 0.36]}>
          <planeGeometry args={[0.7, 0.06]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>

        <mesh position={[1.101, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.69, 2.8]} />
          <meshStandardMaterial
            color={theme.secondary}
            transparent
            opacity={0.3}
            roughness={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ---------- Glowing orbit ring ----------

function GlowRing({ activeIndex }: { activeIndex: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const theme = PRODUCT_THEMES[activeIndex] ?? PRODUCT_THEMES[0];
  const targetColor = useMemo(() => new THREE.Color(theme.accent), [theme.accent]);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }
    if (matRef.current) {
      matRef.current.color.lerp(targetColor, delta * 3);
      matRef.current.emissive.lerp(targetColor, delta * 3);
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.5, 0.018, 16, 128]} />
      <meshStandardMaterial
        ref={matRef}
        color={theme.accent}
        emissive={theme.accent}
        emissiveIntensity={0.9}
        transparent
        opacity={0.45}
        toneMapped={false}
      />
    </mesh>
  );
}

// ---------- Second tilted ring ----------

function SecondRing({ activeIndex }: { activeIndex: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const targetColor = useMemo(() => new THREE.Color('#818CF8'), []);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.15;
      ringRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (matRef.current) {
      matRef.current.color.lerp(targetColor, delta * 3);
      matRef.current.emissive.lerp(targetColor, delta * 3);
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 3, 0.6, 0]}>
      <torusGeometry args={[2.8, 0.012, 16, 128]} />
      <meshStandardMaterial
        ref={matRef}
        color="#818CF8"
        emissive="#818CF8"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
        toneMapped={false}
      />
    </mesh>
  );
}

// ---------- Sparkle particles ----------

function SparkleParticles({ activeIndex }: { activeIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const theme = PRODUCT_THEMES[activeIndex] ?? PRODUCT_THEMES[0];

  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => {
      const angle = (i / 25) * Math.PI * 2;
      const radius = 3 + (i % 4) * 0.3;
      const y = ((i % 9) - 4) * 0.35;
      const size = 0.02 + (i % 3) * 0.015;
      const isAccent = i % 3 === 0;
      return { angle, radius, y, size, isAccent };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(p.angle) * p.radius,
            p.y,
            Math.sin(p.angle) * p.radius,
          ]}
        >
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshStandardMaterial
            color={p.isAccent ? '#A78BFA' : theme.accent}
            emissive={p.isAccent ? '#A78BFA' : theme.accent}
            emissiveIntensity={1.2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ---------- Scene content ----------

function SceneContent({ activeIndex }: { activeIndex: number }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 8]} intensity={1.8} color="#ffffff" castShadow />
      <pointLight position={[-3, 3, 5]} intensity={0.7} color="#8B5CF6" distance={15} />
      <pointLight position={[3, -2, -3]} intensity={0.4} color="#6366F1" distance={12} />
      <spotLight position={[0, 5, 4]} angle={0.5} penumbra={0.5} intensity={1} color="#ffffff" />

      <ProductPacket activeIndex={activeIndex} />
      <GlowRing activeIndex={activeIndex} />
      <SecondRing activeIndex={activeIndex} />
      <SparkleParticles activeIndex={activeIndex} />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3.5}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />
    </>
  );
}

// ---------- Main component ----------

interface HeroScene3DProps {
  activeIndex: number;
}

export default function HeroScene3D({ activeIndex }: HeroScene3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <SceneContent activeIndex={activeIndex} />
      </Suspense>
    </Canvas>
  );
}
