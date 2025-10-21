import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-24 text-center md:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Creando Excelencia Digital
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Override es una empresa de desarrollo de software de primer nivel que transforma tus ideas en soluciones digitales potentes, escalables y fáciles de usar.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link href="/portafolio">Nuestro Trabajo</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacto">Ponte en Contacto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
