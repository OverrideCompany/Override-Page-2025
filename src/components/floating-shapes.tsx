'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

type Shape = {
  id: number;
  x: number;
  y: number;
  size: number;
  blur: number;
  opacity: number;
  rotation: number;
  speed: number;
};

export function FloatingShapes({ color }: { color: string }) {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const numShapes = 20;

  useEffect(() => {
    const newShapes = Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      blur: Math.random() * 50 + 20,
      opacity: Math.random() * 0.3 + 0.1,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setShapes(newShapes);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const memoizedShapes = useMemo(() => {
    return shapes.map(shape => {
      const translateY = scrollY * shape.speed;
      return (
        <div
          key={shape.id}
          className="absolute rounded-full transition-transform duration-300 ease-out"
          style={{
            left: `${shape.x}vw`,
            top: `${shape.y}vh`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: color,
            opacity: shape.opacity,
            transform: `translate(-50%, -50%) translateY(${translateY}px) rotate(${shape.rotation}deg)`,
            filter: `blur(${shape.blur}px)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />
      );
    });
  }, [shapes, scrollY, color]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {memoizedShapes}
    </div>
  );
}
