'use client';

import { createContext, useState, ReactNode } from 'react';
import { motion, useMotionValue, type MotionValue } from 'framer-motion';

type ScrollProgressContextType = {
  scrollYProgress: MotionValue<number> | null;
  setScrollYProgress: (progress: MotionValue<number>) => void;
};

export const ScrollProgressContext = createContext<ScrollProgressContextType>({
  scrollYProgress: null,
  setScrollYProgress: () => {},
});

export const ScrollProgressProvider = ({ children }: { children: ReactNode }) => {
  const [scrollYProgress, setScrollYProgress] = useState<MotionValue<number> | null>(null);

  return (
    <ScrollProgressContext.Provider value={{ scrollYProgress, setScrollYProgress }}>
      {children}
    </ScrollProgressContext.Provider>
  );
};
