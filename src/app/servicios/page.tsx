
"use client";

import React from 'react';
import { servicesData } from '@/data/services-data';

export default function ServicesPage() {

  return (
    <main className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
        {servicesData.map((service, index) => (
            <section 
                key={service.title}
                className="h-screen w-full snap-start flex items-center justify-center relative overflow-hidden"
            >
                {/* Background Icon */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <service.icon className="h-[80vmin] w-[80vmin] text-foreground/5 opacity-50 blur-2xl" />
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
