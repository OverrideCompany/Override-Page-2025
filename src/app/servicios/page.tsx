
"use client";

import React from 'react';
import { servicesData } from '@/data/services-data';

export default function ServicesPage() {

  return (
    <main>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Nuestros Servicios</h1>
        <p className="mt-6 max-w-3xl mx-auto text-foreground/80 text-xl">
          Creamos soluciones digitales que impulsan el crecimiento y la innovación.
        </p>
      </div>
      {servicesData.map((service, index) => (
          <section 
              key={service.title}
              className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
          >
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <service.icon className="h-[80vmin] w-[80vmin] text-foreground/10 opacity-50 blur-2xl" />
              </div>

              {/* Foreground Title */}
              <div className="text-center">
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                      {service.title}
                  </h2>
              </div>
          </section>
      ))}
    </main>
  );
}
