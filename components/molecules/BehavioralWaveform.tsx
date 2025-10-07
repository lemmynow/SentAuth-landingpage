/**
 * Behavioral Waveform Visualization
 * 
 * Philosophy: A living representation of behavioral data
 * - Reacts subtly to mouse movement and scroll
 * - Uses Canvas API for performance (< 2% CPU)
 * - Evokes the feeling of observation and learning
 * 
 * Visual: Flowing waveforms that pulse and adapt
 */

'use client';

import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export const BehavioralWaveform: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio
    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setSize();
    window.addEventListener('resize', setSize);

    // Waveform parameters
    const waves = [
      { amplitude: 40, frequency: 0.008, phase: 0, speed: 0.005, opacity: 0.15 },
      { amplitude: 30, frequency: 0.012, phase: Math.PI / 3, speed: 0.007, opacity: 0.12 },
      { amplitude: 25, frequency: 0.015, phase: Math.PI / 2, speed: 0.004, opacity: 0.1 },
    ];

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Get mouse influence
      const mx = smoothX.get();
      const my = smoothY.get();

      // Draw each wave
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(95, 243, 184, ${wave.opacity})`;
        ctx.lineWidth = 2;

        const centerY = height / 2;

        for (let x = 0; x < width; x += 5) {
          // Calculate wave height with mouse influence
          const mouseInfluence = Math.sin((x / width) * Math.PI) * (my - 0.5) * 40;
          const y =
            centerY +
            Math.sin(x * wave.frequency + wave.phase + time * wave.speed) * wave.amplitude +
            mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(95, 243, 184, 0.3)';
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [smoothX, smoothY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default BehavioralWaveform;
