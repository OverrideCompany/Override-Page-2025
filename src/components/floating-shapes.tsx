'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { projectsData } from '@/lib/projects-data';

type Shape = {
  id: number;
  x: number;
  y: number;
  size: number;
  blur: number;
  opacity: number;
  speed: number;
};

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [activeColor, setActiveColor] = useState(projectsData[0].color);
  const scrollYRef = useRef(0);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const numShapes = 150;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollYRef.current = currentScrollY;
      
      const delta = currentScrollY - lastScrollY.current;
      scrollVelocity.current = delta * 0.1; // Multiplicador para controlar la intensidad del estiramiento
      lastScrollY.current = currentScrollY;

      if (containerRef.current) {
        const stretch = 1 + Math.abs(scrollVelocity.current) * 0.5;
        const translateY = -currentScrollY;
        containerRef.current.style.setProperty('--scroll-y', `${translateY}px`);
        containerRef.current.style.setProperty('--stretch', `${stretch}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const newShapes = Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 200, // Expandir la distribución vertical para cubrir más espacio
      size: Math.random() * 1.5 + 0.5,
      blur: Math.random() * 1,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setShapes(newShapes);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-color]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute('data-color');
            if (color) {
              setActiveColor(color);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const memoizedShapes = useMemo(() => {
    return shapes.map((shape) => (
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
          filter: `blur(${shape.blur}px)`,
          willChange: 'transform, background-color',
          // El movimiento se controla en el contenedor padre, pero el paralaje individual se aplica aquí
          transform: `translateY(calc(var(--scroll-y, 0px) * ${shape.speed})) scaleY(var(--stretch, 1))`
        }}
      />
    ));
  }, [shapes, activeColor]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden -z-10"
      style={{ willChange: 'transform' }}
    >
      {memoizedShapes}
    </div>
  );
}
