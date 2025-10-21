'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { projectsData } from '@/lib/projects-data';
import { cn } from '@/lib/utils';

type ShapeType = 'star' | 'black-hole' | 'nova';

type Shape = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: ShapeType;
  animationDelay: string;
  isExploding: boolean;
};

const colors = projectsData.map(p => p.color);

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const scrollYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const numShapes = 250; // Aumentamos el número de estrellas

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      if (containerRef.current) {
        containerRef.current.style.setProperty('--scroll-y', `${scrollYRef.current}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const newShapes = Array.from({ length: numShapes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 200, 
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      type: 'star' as ShapeType,
      animationDelay: `${Math.random() * 5}s`,
      isExploding: false,
    }));
    setShapes(newShapes);

    // Intervalo para eventos cósmicos
    const eventInterval = setInterval(() => {
      setShapes(prevShapes => {
        const newShapes = [...prevShapes];
        const randomIndex = Math.floor(Math.random() * newShapes.length);
        const randomEvent = Math.random();

        // Resetea el estado anterior si lo hubiera
        const currentlySpecial = newShapes.findIndex(s => s.type !== 'star' || s.isExploding);
        if (currentlySpecial !== -1) {
            newShapes[currentlySpecial].type = 'star';
            newShapes[currentlySpecial].isExploding = false;
        }

        if (randomEvent < 0.1) { // 10% de probabilidad de agujero negro
          newShapes[randomIndex].type = 'black-hole';
        } else if (randomEvent < 0.2) { // 10% de probabilidad de supernova
          newShapes[randomIndex].isExploding = true;
        }
        
        return newShapes;
      });
    }, 5000); // Cada 5 segundos ocurre un evento

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(eventInterval);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-color]'));
    if (sections.length === 0) return;

    let observer: IntersectionObserver;

    const buildObserver = () => {
      if (observer) observer.disconnect();
      
      observer = new IntersectionObserver(
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
        { threshold: 0.5, rootMargin: '0px' }
      );

      sections.forEach((section) => observer.observe(section));
    };

    buildObserver();

    return () => observer?.disconnect();
  }, []);

  const memoizedShapes = useMemo(() => {
    return shapes.map((shape) => {
        const isStar = shape.type === 'star' && !shape.isExploding;
        return (
            <div
                key={shape.id}
                className={cn(
                  "absolute rounded-full transition-all duration-1000 ease-in-out",
                  shape.type === 'black-hole' && 'black-hole',
                  shape.isExploding && 'nova-explosion'
                )}
                style={{
                    left: `${shape.x}vw`,
                    top: `${shape.y}vh`,
                    width: isStar ? `${shape.size}px` : (shape.type === 'black-hole' ? '20px' : '1px'),
                    height: isStar ? `${shape.size}px` : (shape.type === 'black-hole' ? '20px' : '1px'),
                    backgroundColor: isStar ? activeColor : 'transparent',
                    opacity: shape.opacity,
                    transform: `translateY(calc(var(--scroll-y, 0) * -0.5px))`,
                    '--nova-color': activeColor,
                    '--hole-color': activeColor,
                    animationDelay: shape.animationDelay,
                    willChange: 'transform, background-color, opacity, width, height'
                } as React.CSSProperties}
            />
        );
    });
  }, [shapes, activeColor]);

  return (
    <>
    <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nova {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(20); opacity: 0; }
        }
        .black-hole {
          border-radius: 50%;
          border: 2px solid var(--hole-color);
          animation: spin 4s linear infinite;
          background-color: black !important;
        }
        .nova-explosion {
          border-radius: 50%;
          box-shadow: 0 0 10px var(--nova-color), 0 0 20px var(--nova-color);
          animation: nova 1.5s ease-out forwards;
          background-color: var(--nova-color) !important;
        }
    `}</style>
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-black"
      style={{ willChange: 'transform' }}
    >
      {memoizedShapes}
    </div>
    </>
  );
}
