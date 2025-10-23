"use client";

import React, { useRef } from 'react';
import { Code, Smartphone, Palette, Cloud, BrainCircuit } from 'lucide-react';
import { Service } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <service.icon className="absolute w-2/3 h-2/3 text-foreground/5 opacity-50" />
      <motion.h2 
        style={{ 
          y, 
          opacity,
          textShadow: '0 0 5px currentColor, 0 0 15px currentColor, 0 0 25px currentColor'
        }}
        className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center px-4"
      >
        {service.title}
      </motion.h2>
    </section>
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
