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
  const [scrollY, setScrollY] = useState(0);

  const numShapes = 50; // Aumentamos la cantidad para un efecto más denso

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newShapes = Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // Puntos más pequeños
      blur: Math.random() * 3 + 2, // Más blur para el efecto difuminado
      opacity: Math.random() * 0.4 + 0.1, // Un poco más sutiles
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
      const translateY = -scrollY * shape.speed;
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
            transform: `translateY(${translateY}px) rotate(${shape.rotation}deg)`,
            filter: `blur(${shape.blur}px)`,
            willChange: 'transform, color'
          }}
        />
      );
    });
  }, [shapes, activeColor, scrollY]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {memoizedShapes}
    </div>
  );
}
