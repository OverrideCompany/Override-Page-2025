'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { GlassmorphismBackground } from '../glassmorphism-background';

export function TrustedBy() {
  return (
    <section id="cta" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <GlassmorphismBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative text-center flex flex-col items-center gap-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Somos los mejores haciendo software</h2>
          <Button asChild size="lg">
            <Link href="/contacto">Ponte en Contacto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
