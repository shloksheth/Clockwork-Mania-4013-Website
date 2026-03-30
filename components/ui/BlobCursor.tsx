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
        dpr={window.devicePixelRatio}
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
              blend={1.0}
              intensity={15}
              force={6}
              distortion={6.0}
              radius={currentRadius}
              curl={5}
              swirl={5}
              velocityDissipation={0.95}
              densityDissipation={0.95}
              pressure={0.8}
              rainbow={false}
            />
            <Noise opacity={0.15} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}