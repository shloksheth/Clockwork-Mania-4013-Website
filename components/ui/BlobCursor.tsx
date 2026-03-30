"use client";

import React, { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion';

export function BlobCursor({ navHeight }: { navHeight: number }) {
  const [enabled, setEnabled] = useState(false);
  const pointerDown = useRef(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRadius, setCurrentRadius] = useState(0.1875); // Default radius

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const updateMq = () => setEnabled(mq.matches);
    updateMq();
    mq.addEventListener("change", updateMq);

    const handleMouseDown = () => {
      pointerDown.current = true;
    };
    const handleMouseUp = () => {
      pointerDown.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Adjust radius based on proximity to nav bar
      if (e.clientY < navHeight) {
        setCurrentRadius(0.05); // Larger near nav
      } else {
        setCurrentRadius(0.25); // Larger default size
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mq.removeEventListener("change", updateMq);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  },
  [
    navHeight
  ]
);

  if (!enabled) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
      }}
    >
      <Canvas
        dpr={[1, 1.5]} // Cap DPR to reduce VRAM usage on high-DPI screens
        linear
        flat
        camera={{ position: [0, 0, 1] }}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <Suspense fallback={null}>
          <EffectComposer>
            <Fluid
              fluidColor="#FFD700" // Reverted to original less metallic gold fluid color
              backgroundColor="transparent"
              showBackground={false}
              blend={0.8} // Slightly reduced blend
              intensity={12} // Reduced intensity
              force={5} // Reduced force
              distortion={5.0} // Reduced distortion
              radius={currentRadius * 0.8} // Reduce radius further
              curl={7} // Slightly increased curl for less liquidy feel initially, might adjust later
              swirl={7} // Slightly increased swirl
              velocityDissipation={0.98} // Increased dissipation for shorter trails
              densityDissipation={0.98} // Increased dissipation for shorter trails
              pressure={0.7} // Slightly reduced pressure
              rainbow={false}
            />
            {/* <Noise opacity={0.15} /> */}
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}