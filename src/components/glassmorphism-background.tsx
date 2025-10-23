'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function GlassmorphismBackground() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <style jsx global>{`
        @keyframes gradient-animation {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
          }
        }
      `}</style>
      <motion.div 
        className="glassmorphism-bg absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
          filter: 'blur(150px)',
          animation: 'gradient-animation 30s ease infinite',
          opacity: resolvedTheme === 'dark' ? 0.7 : 1,
        }}
      >
      </motion.div>
    </>
  );
}
