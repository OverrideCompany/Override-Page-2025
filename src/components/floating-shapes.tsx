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
};

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [activeColor, setActiveColor] = useState(projectsData[0].color);
  const scrollYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const numShapes = 150;

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      // We are just updating the scrollY value, the transform will be handled by CSS
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const newShapes = Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 200, 
      size: Math.random() * 1.5 + 0.5,
      blur: Math.random() * 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setShapes(newShapes);

    const updatePositions = () => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--scroll-y', `${scrollYRef.current}px`);
      }
      requestAnimationFrame(updatePositions);
    };
    
    const animationFrameId = requestAnimationFrame(updatePositions);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
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
          transform: `translateY(calc(var(--scroll-y, 0) * -0.5px))`
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
