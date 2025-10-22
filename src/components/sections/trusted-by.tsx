import Link from 'next/link';
import { Button } from '../ui/button';
import { GlassmorphismBackground } from '../glassmorphism-background';

export function TrustedBy() {
  return (
    <section id="cta" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative max-w-5xl mx-auto">
          <GlassmorphismBackground />
          <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-8 md:p-12">
            <div className="text-center flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Somos los mejores haciendo software</h2>
              <Button asChild size="lg">
                <Link href="/contacto">Ponte en Contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
