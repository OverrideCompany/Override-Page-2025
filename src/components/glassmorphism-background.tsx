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
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <motion.div 
        className="glassmorphism-bg absolute top-1/2 left-1/2 w-[105%] h-[105%] -z-10"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'background',
          background: 'linear-gradient(-45deg, #4f46e5, #7c3aed, #a855f7, #60a5fa)',
          backgroundSize: '400% 400%',
          filter: 'blur(150px)',
          animation: 'gradient-animation 15s ease infinite',
          opacity: resolvedTheme === 'dark' ? 1 : 0.7,
        }}
      >
      </motion.div>
    </>
  );
}
