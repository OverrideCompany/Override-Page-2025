'use client';
import React, { useState, useEffect, useMemo, useRef, useContext } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { ScrollProgressContext } from '@/context/scroll-progress-context';

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

const whiteColor = '#FFFFFF';

export function FloatingShapes() {
  const { resolvedTheme } = useTheme();
  const [shapes, setShapes] = useState<Shape[]>([]);
  const scrollYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  const { scrollYProgress } = useContext(ScrollProgressContext);

  const backgroundColor = scrollYProgress 
    ? useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ['#2a8af6', '#a855f7', '#e92a67', '#f7b733', '#2a8af6']
      ) 
    : '#2a8af6';

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const numShapes = 250;

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

    const eventInterval = setInterval(() => {
      setShapes(prevShapes => {
        const newShapes = [...prevShapes];
        const randomIndex = Math.floor(Math.random() * newShapes.length);
        const randomEvent = Math.random();

        const currentlySpecial = newShapes.findIndex(s => s.type !== 'star' || s.isExploding);
        if (currentlySpecial !== -1) {
            newShapes[currentlySpecial].type = 'star';
            newShapes[currentlySpecial].isExploding = false;
        }

        if (randomEvent < 0.1) {
          newShapes[randomIndex].type = 'black-hole';
        } else if (randomEvent < 0.2) {
          newShapes[randomIndex].isExploding = true;
        }
        
        return newShapes;
      });
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(eventInterval);
    };
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
                    backgroundColor: isStar ? whiteColor : 'transparent',
                    opacity: shape.opacity,
                    transform: `translateY(calc(var(--scroll-y, 0) * -0.5px))`,
                    '--nova-color': whiteColor,
                    '--hole-color': whiteColor,
                    animationDelay: shape.animationDelay,
                    willChange: 'transform, background-color, opacity, width, height'
                } as React.CSSProperties}
            />
        );
    });
  }, [shapes]);

  if (!hasMounted) {
    return null;
  }

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
      className="fixed inset-0 w-full h-full -z-10 transition-colors duration-500"
    >
      <motion.div 
        className={cn(
            "absolute inset-0 transition-opacity duration-1000"
        )}
        style={{
          background: backgroundColor,
          filter: 'blur(40px) brightness(1.5)',
          opacity: resolvedTheme === 'light' ? 0.4 : 0,
        }}
      />
      
      <div className={cn(
        "absolute inset-0 bg-black transition-opacity duration-1000",
        resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
      )}>
        <div
          className="w-full h-full"
          style={{ willChange: 'transform' }}
        >
          {memoizedShapes}
        </div>
      </div>
    </div>
    </>
  );
}
