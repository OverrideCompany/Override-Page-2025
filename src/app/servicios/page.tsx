
"use client";

import React, { useRef, useEffect, useContext } from 'react';
import { servicesData } from '@/data/services-data';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollProgressContext } from '@/context/scroll-progress-context';

function ServiceSection({ service }: { service: typeof servicesData[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setScrollYProgress } = useContext(ScrollProgressContext);

  useEffect(() => {
    if (isInView) {
        // @ts-ignore
      setScrollYProgress(service.title);
    }
  }, [isInView, service.title, setScrollYProgress]);

  return (
    <section 
      id={service.title}
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <service.icon className="h-[70vmin] w-[70vmin] text-white/10" />
      </div>
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
          {service.title}
        </h2>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const { scrollYProgress } = useContext(ScrollProgressContext);

  return (
    <main>
      <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <ul className="flex flex-col gap-4">
          {servicesData.map((service) => (
            <li key={`nav-${service.title}`}>
              <Link href={`#${service.title}`} aria-label={service.title}>
                <div 
                  className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300",
                    scrollYProgress === service.title ? 'bg-primary scale-110' : 'bg-black/10'
                  )}
                >
                  <service.icon className={cn(
                    "h-6 w-6 transition-colors duration-300",
                    scrollYProgress === service.title ? 'text-primary-foreground' : 'text-white/80'
                  )} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {servicesData.map((service) => (
        <ServiceSection key={service.title} service={service} />
      ))}
    </main>
  );
}
