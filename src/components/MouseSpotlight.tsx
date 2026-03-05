'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the motion for the heavy trailing elements
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Velocity-based effects
  const velX = useVelocity(smoothX);
  const velY = useVelocity(smoothY);
  const velocity = useTransform([velX, velY], ([vX, vY]: any) => 
    Math.sqrt(Math.pow(Number(vX), 2) + Math.pow(Number(vY), 2))
  );

  // Scale the trailing ring based on movement speed
  const ringScale = useTransform(velocity, [0, 1000], [1, 2]);
  const ringOpacity = useTransform(velocity, [0, 500], [0.3, 0.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Background Spotlight Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(16, 185, 129, 0.08), transparent 80%)`,
        }}
      />
      
      {/* Secondary Ambient Glow */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(1000px circle at ${smoothX}px ${smoothY}px, rgba(20, 184, 166, 0.03), transparent 100%)`,
        }}
      />

      {/* Trailing Luxury Ring (Velocity-Aware) */}
      <motion.div
        className="absolute w-12 h-12 border border-emerald-500/20 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: ringOpacity,
        }}
      />

      {/* Inner Precision Ring */}
      <motion.div
        className="absolute w-6 h-6 border border-emerald-400/40 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="absolute w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Subtle Dust/Spark Particles Effect */}
      <CursorParticles x={mouseX} y={mouseY} />
    </div>
  );
}

function CursorParticles({ x, y }: { x: any, y: any }) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  
  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-15), // Keep last 15 particles
        { id: id++, x: x.get(), y: y.get() }
      ]);
    }, 100); // Emit every 100ms
    
    return () => clearInterval(interval);
  }, [x, y]);

  return (
    <>
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.4, scale: 1, x: p.x, y: p.y }}
          animate={{ opacity: 0, scale: 0, y: p.y + (Math.random() * 20 - 10) }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[2px] h-[2px] bg-emerald-500/40 rounded-full"
          style={{ translateX: "-50%", translateY: "-50%" }}
        />
      ))}
    </>
  );
}
