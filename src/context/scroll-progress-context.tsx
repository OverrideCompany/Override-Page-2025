
'use client';

import { createContext, useState, ReactNode } from 'react';
import { type MotionValue } from 'framer-motion';

type ScrollProgressContextType = {
  scrollYProgress: string | null;
  setScrollYProgress: (progress: string) => void;
};

export const ScrollProgressContext = createContext<ScrollProgressContextType>({
  scrollYProgress: null,
  setScrollYProgress: () => {},
});

export const ScrollProgressProvider = ({ children }: { children: ReactNode }) => {
  const [scrollYProgress, setScrollYProgress] = useState<string | null>(null);

  return (
    <ScrollProgressContext.Provider value={{ scrollYProgress, setScrollYProgress }}>
      {children}
    </ScrollProgressContext.Provider>
  );
};
