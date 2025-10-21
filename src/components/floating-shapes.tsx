'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { projectsData } from '@/lib/projects-data';

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

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [activeColor, setActiveColor] = useState(projectsData[0].color);

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
    const sections = Array.from(document.querySelectorAll('section[data-color]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const color = entry.target.getAttribute('data-color');
          if (color) {
            setActiveColor(color);
          }
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const memoizedShapes = useMemo(() => {
    return shapes.map(shape => {
      return (
        <div
          key={shape.id}
          className="absolute rounded-full transition-colors duration-1000 ease-in-out"
          style={{
            left: `${shape.x}vw`,
            top: `${shape.y}vh`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: activeColor,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
            filter: `blur(${shape.blur}px)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            willChange: 'background-color'
          }}
        />
      );
    });
  }, [shapes, activeColor]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {memoizedShapes}
    </div>
  );
}
