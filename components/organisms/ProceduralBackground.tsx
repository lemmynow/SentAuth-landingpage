/**
 * Procedural Background System
 * 
 * Creates a living, breathing background with:
 * - Layered gradients
 * - Subtle noise texture
 * - Ultra-low-opacity scan lines
 * - Temperature shift on scroll
 * 
 * Philosophy: The background should feel like a sentient system,
 * subtly observing and adapting to user behavior.
 */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ProceduralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Color temperature shift: cooler at top, warmer as scroll increases
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgb(11, 13, 18)', 'rgb(13, 14, 16)', 'rgb(15, 17, 23)']
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
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

    // Particle system for subtle behavioral "data points"
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > window.innerWidth) this.x = 0;
        if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight) this.y = 0;
        if (this.y < 0) this.y = window.innerHeight;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(95, 243, 184, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particle field (sparse, < 2% CPU)
    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 40));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Static gradient base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: backgroundColor,
        }}
      />

      {/* Layer 2: Radial gradient overlay (subtle warmth) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(95, 243, 184, 0.03) 0%, transparent 50%)',
        }}
      />

      {/* Layer 3: Particle field canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Layer 4: Scan line effect (ultra-subtle) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(95, 243, 184, 0.03) 2px, rgba(95, 243, 184, 0.03) 4px)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 5: Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Vignette edge darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 0%, rgba(11, 13, 18, 0.4) 100%)',
        }}
      />
    </div>
  );
};
