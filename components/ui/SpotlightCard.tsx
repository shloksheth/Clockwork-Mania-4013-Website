"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  lift?: number;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(201, 151, 58, 0.08)",
  lift = 6,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const reduce = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-[inherit] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={
        reduce ? {} : { y: -lift, transition: { duration: 0.25, ease: "easeOut" } }
      }
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] border border-[rgba(201,151,58,0.35)] transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative z-[3] h-full rounded-[inherit]">{children}</div>
    </motion.div>
  );
}
