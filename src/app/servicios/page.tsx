
"use client";

import React from 'react';
import { Code, Smartphone, Palette, Cloud, BrainCircuit } from 'lucide-react';
import { Service } from '@/types';

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
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-2/3 h-2/3 flex items-center justify-center text-foreground/5 -z-10">
        <service.icon className="w-full h-full" />
      </div>
      <h2 className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center px-4 text-foreground">
        {service.title}
      </h2>
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
