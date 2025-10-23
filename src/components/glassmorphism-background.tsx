'use client';

import { useTheme } from 'next-themes';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useContext } from 'react';
import { ScrollProgressContext } from '@/context/scroll-progress-context';

export function GlassmorphismBackground() {
  const { resolvedTheme } = useTheme();
  const { scrollYProgress } = useContext(ScrollProgressContext);

  const colors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];
  
  const background = useTransform(
    scrollYProgress ?? new MotionValue(0),
    [0, 0.25, 0.5, 0.75, 1],
    colors.map(color => `linear-gradient(-45deg, ${color}, #7c3aed, #a855f7, #60a5fa)`)
  );
  

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
          background: scrollYProgress ? background : colors[0],
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
