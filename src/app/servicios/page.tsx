
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Code, Smartphone, Palette, Cloud, BrainCircuit } from 'lucide-react';
import { Service } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const services: Omit<Service, 'description' | 'imageUrl' | 'imageHint'>[] = [
  {
    icon: Code,
    title: 'Desarrollo Web',
  },
  {
    icon: Smartphone,
    title: 'Desarrollo Móvil',
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
  },
  {
    icon: Cloud,
    title: 'Soluciones en la Nube',
  },
  {
    icon: BrainCircuit,
    title: 'IA',
  }
];

function ServiceSection({ service }: { service: Omit<Service, 'description' | 'imageUrl' | 'imageHint'> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -100]);
  
  const iconOpacity = useTransform(scrollYProgress, [0.7, 1], [0.05, 1]);
  const iconScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.2]);

  const ctaOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.9) {
        setIsCompleted(true);
      } else {
        setIsCompleted(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="relative h-[150vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <Link href="/contacto" passHref legacyBehavior>
          <motion.a 
            className="w-full h-full flex items-center justify-center"
            style={{ pointerEvents: isCompleted ? 'auto' : 'none' }}
            aria-label={`Saber más sobre ${service.title}`}
          >
            <motion.div 
              className="absolute w-2/3 h-2/3 flex items-center justify-center"
              style={{ opacity: iconOpacity, scale: iconScale }}
            >
              <service.icon className="w-full h-full text-foreground" />
            </motion.div>
            
            <motion.h2 
              style={{ 
                opacity: textOpacity,
                y: textY,
                textShadow: '0 0 15px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.3)'
              }}
              className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center px-4 text-foreground"
            >
              {service.title}
            </motion.h2>

             <motion.div
              style={{ opacity: ctaOpacity }}
              className="absolute flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-4xl md:text-6xl font-bold text-background mix-blend-difference">
                ¿Interesado?
              </h3>
              <p className="text-xl md:text-2xl text-background mix-blend-difference mt-2">
                Ponte en contacto
              </p>
            </motion.div>
          </motion.a>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {services.map((service) => (
        <ServiceSection key={service.title} service={service} />
      ))}
    </main>
  );
}
