'use client';

import { createContext, useState, ReactNode } from 'react';
import type { MotionValue } from 'framer-motion';

type ScrollProgressContextType = {
  scrollYProgress: MotionValue<number>;
  setScrollYProgress: (progress: MotionValue<number>) => void;
};

export const ScrollProgressContext = createContext<ScrollProgressContextType>({
  scrollYProgress: {
    get: () => 0,
    getVelocity: () => 0,
    set: () => {},
    onChange: () => () => {},
    clearListeners: () => {},
    destroy: () => {},
  } as unknown as MotionValue<number>,
  setScrollYProgress: () => {},
});

export const ScrollProgressProvider = ({ children }: { children: ReactNode }) => {
  const [scrollYProgress, setScrollYProgress] = useState<MotionValue<number>>({
    get: () => 0,
    getVelocity: () => 0,
    set: () => {},
    onChange: () => () => {},
    clearListeners: () => {},
    destroy: () => {},
  } as unknown as MotionValue<number>);

  return (
    <ScrollProgressContext.Provider value={{ scrollYProgress, setScrollYProgress }}>
      {children}
    </ScrollProgressContext.Provider>
  );
};
