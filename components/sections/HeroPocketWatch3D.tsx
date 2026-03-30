"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Group } from "three";
import { useSpring, animated } from "@react-spring/three";
import { usePocketWatchInteraction } from "@/components/context/PocketWatchContext";


function Model({ isHovered }: { isHovered: boolean }) {
  const { scene, nodes, materials, animations } = useGLTF(
    "/models/pocketwatch/Pocket Watch.gltf"
  );
  const lidRef = useRef<Group>(null);

  useEffect(() => {
    if (nodes && materials && animations) {
      // 3D model is loaded
    }
    // You might need to inspect the GLTF structure to find the correct node name for the lid.
    // For now, let's assume there's a node named "Lid" or similar.
    // You can console.log(nodes) to inspect the model's structure.
    console.log("Model nodes:", nodes);
    // Example: const lid = scene.getObjectByName("Lid");
    // if (lid) lidRef.current = lid as Group;
  }, [nodes, materials, animations, setIsLoading]);

  // Animation for the lid
  const { rotation } = useSpring({
    rotation: isHovered ? [0, -Math.PI / 2, 0] : [0, 0, 0], // Opens to the left
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <animated.group rotation={rotation as any}>
      <primitive object={scene} scale={[5, 5, 5]} />
    </animated.group>
  );
}

export function HeroPocketWatch3D() {
  const { isHoveringPocketWatch, setIsHoveringPocketWatch } =
    usePocketWatchInteraction();

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHoveringPocketWatch(true)}
      onMouseLeave={() => setIsHoveringPocketWatch(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 2], fov: 50 }}
        style={{ pointerEvents: "none" }}
        dpr={[1, 1.5]} // Cap device pixel ratio for performance
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Environment preset="city" />
          <Model isHovered={isHoveringPocketWatch} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
