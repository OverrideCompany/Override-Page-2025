
"use client";

import React from 'react';
import { Code, Smartphone, Palette, Cloud, BrainCircuit } from 'lucide-react';
import { Service } from '@/types';
import { motion } from 'framer-motion';
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
  return (
    <section className="h-screen w-full">
      <Link 
        href="/contacto"
        aria-label={`Saber más sobre ${service.title}`}
        className="group relative w-full h-full flex items-center justify-center overflow-hidden"
      >
          <motion.div 
            className="absolute w-2/3 h-2/3 flex items-center justify-center text-foreground/5 opacity-5 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
          >
            <service.icon className="w-full h-full" />
          </motion.div>
          
          <h2 className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center px-4 text-foreground group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
            {service.title}
          </h2>

           <div
            className="absolute flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-background mix-blend-difference">
              ¿Interesado?
            </h3>
            <p className="text-xl md:text-2xl text-background mix-blend-difference mt-2">
              Ponte en contacto
            </p>
          </div>
      </Link>
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
