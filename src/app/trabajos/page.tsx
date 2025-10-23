
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Code, Users } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovación Constante',
    description: 'Buscamos mentes curiosas que desafíen el status quo y amen aprender.',
  },
  {
    icon: Code,
    title: 'Excelencia Técnica',
    description: 'Nos apasiona el código limpio, las buenas prácticas y construir software robusto.',
  },
  {
    icon: Users,
    title: 'Colaboración Radical',
    description: 'Creemos que los mejores productos se construyen en equipo, con confianza y comunicación abierta.',
  }
];

export default function JobsPage() {
  return (
    <main>
      <section id="jobs" className="py-16 md:py-24 bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Únete a la Revolución del Software
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80">
              En Override, no solo creamos software; construimos el futuro. Estamos buscando a los mejores talentos para unirse a nuestra misión. Si te apasiona la tecnología y quieres generar un impacto real, este es tu lugar.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-card/50 backdrop-blur-lg border border-white/10 text-card-foreground rounded-xl shadow-lg p-8 text-center flex flex-col items-center">
                <value.icon className="h-12 w-12 mb-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contacto">Ver Posiciones Abiertas</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              (Actualmente te redirigiremos a nuestra página de contacto)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
