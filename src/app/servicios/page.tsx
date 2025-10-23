
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/services-data';
import { Service } from '@/types';

function ServiceSection({ service, index }: { service: Service, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`relative aspect-square rounded-2xl overflow-hidden shadow-2xl ${isEven ? 'md:order-2' : ''}`}>
            <Image 
              src={service.imageUrl} 
              alt={service.title} 
              fill 
              className="object-cover"
              data-ai-hint={service.imageHint}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className={`text-center md:text-left ${isEven ? 'md:order-1' : ''}`}>
            <motion.div 
              className="inline-block p-4 bg-primary/10 border border-primary/20 rounded-full mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <service.icon className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{service.title}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{service.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
       <div className="text-center pt-32 pb-16 md:pt-48 md:pb-24">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Nuestros Servicios</h1>
            <p className="mt-6 max-w-2xl mx-auto text-foreground/80 text-xl">
              Transformamos ideas en soluciones digitales de alto impacto.
            </p>
        </div>
      {servicesData.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}
    </main>
  );
}
