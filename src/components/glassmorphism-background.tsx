'use client';

import { useContext } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ScrollProgressContext } from '@/context/scroll-progress-context';
import { useTheme } from 'next-themes';

export function GlassmorphismBackground() {
  const { scrollYProgress } = useContext(ScrollProgressContext);
  const { resolvedTheme } = useTheme();
  const tempMotionValue = useMotionValue(0);

  const safeScrollYProgress = scrollYProgress || tempMotionValue;

  const rotate = useTransform(safeScrollYProgress, [0, 1], [0, 360]);
  const gradientColor1 = useTransform(safeScrollYProgress, [0, 0.5, 1], ['#4f46e5', '#a855f7', '#4f46e5']);
  const gradientColor2 = useTransform(safeScrollYProgress, [0, 0.5, 1], ['#7c3aed', '#e92a67', '#7c3aed']);
  const gradientColor3 = useTransform(safeScrollYProgress, [0, 0.5, 1], ['#a855f7', '#f7b733', '#a855f7']);
  const gradientColor4 = useTransform(safeScrollYProgress, [0, 0.5, 1], ['#60a5fa', '#2a8af6', '#60a5fa']);

  const background = useTransform(
    [gradientColor1, gradientColor2, gradientColor3, gradientColor4],
    ([c1, c2, c3, c4]) => `linear-gradient(-45deg, ${c1}, ${c2}, ${c3}, ${c4})`
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
          willChange: 'background, transform',
          background: resolvedTheme === 'light' ? background : 'linear-gradient(-45deg, #4f46e5, #7c3aed, #a855f7, #60a5fa)',
          backgroundSize: '400% 400%',
          rotate,
          filter: 'blur(150px)',
          animation: 'gradient-animation 15s ease infinite',
          opacity: resolvedTheme === 'dark' ? 1 : 0.7,
        }}
      >
      </motion.div>
    </>
  );
}
