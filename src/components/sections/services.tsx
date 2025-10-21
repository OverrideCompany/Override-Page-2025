import { Code, Smartphone, Palette, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Construimos aplicaciones web modernas, responsivas y de alto rendimiento adaptadas a las necesidades de tu negocio.'
  },
  {
    icon: Smartphone,
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Creando aplicaciones para iOS y Android hermosas y de alto rendimiento que a tus usuarios les encantarán.'
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Diseño centrado en el usuario para crear experiencias digitales intuitivas y atractivas en todas las plataformas.'
  },
  {
    icon: Cloud,
    title: 'Soluciones en la Nube',
    description: 'Aprovecha el poder de la nube con nuestras soluciones de infraestructura escalables y seguras.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestros Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            Ofrecemos un conjunto completo de servicios de desarrollo de software.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
