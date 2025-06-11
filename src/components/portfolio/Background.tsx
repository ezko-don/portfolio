"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce particle count on mobile
  const particleCount = isMobile ? 5 : 12;

  // Reduce animation complexity on mobile
  const animationConfig = isMobile
    ? { duration: 12, ease: "linear" }
    : { duration: 8, ease: "easeInOut" };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black" />

      {/* Animated gradient orbs - reduced blur on mobile */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-500/20 dark:from-pink-500/30 dark:to-purple-600/30 rounded-full -z-10 ${isMobile ? 'blur-xl' : 'blur-3xl'
          }`}
        animate={isMobile ? {
          x: [0, 50, 0],
          y: [0, -25, 0],
        } : {
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          ...animationConfig,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ willChange: 'transform' }}
      />

      <motion.div
        className={`absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300/15 to-pink-400/15 dark:from-purple-400/25 dark:to-pink-500/25 rounded-full ${isMobile ? 'blur-lg' : 'blur-3xl'
          }`}
        animate={isMobile ? {
          x: [0, -40, 0],
          y: [0, 30, 0],
        } : {
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: animationConfig.duration + 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: animationConfig.ease,
        }}
        style={{ willChange: 'transform' }}
      />

      {!isMobile && (
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ willChange: 'transform' }}
        />
      )}

      {/* Reduced floating particles */}
      {Array.from({ length: particleCount }).map((_, i) => {
        // Fixed positions based on index
        const fixedPositions = [
          { left: 10.13, top: 14.16 },
          { left: 61.43, top: 27.81 },
          { left: 13.22, top: 71.97 },
          { left: 82.86, top: 37.04 },
          { left: 78.48, top: 46.21 },
          { left: 8.27, top: 18.71 },
          { left: 20.37, top: 87.36 },
          { left: 12.16, top: 4.71 },
          { left: 84.30, top: 33.08 },
          { left: 8.45, top: 9.65 },
          { left: 3.66, top: 86.01 },
          { left: 58.52, top: 8.79 }
        ];

        const position = fixedPositions[i % fixedPositions.length];

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              willChange: "transform, opacity"
            }}
            animate={{
              y: [0, isMobile ? -50 : -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + (i % 2) * 2, // Deterministic duration based on index
              repeat: Infinity,
              delay: i * 0.5, // Deterministic delay based on index
              ease: "linear",
            }}
          />
        );
      })}

      {/* Simplified grid pattern overlay - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      )}

      {/* Simplified radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/20 dark:to-black/15" />

      {/* Remove noise texture on mobile for better performance */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </div>
  );
} 