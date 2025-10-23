
import { Code, Smartphone, Palette, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/types';
import { PlaceHolderImages } from '@/data/placeholder-images';


const services: Service[] = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Construimos aplicaciones web modernas, responsivas y de alto rendimiento adaptadas a las necesidades de tu negocio. Desde landings hasta complejas plataformas SaaS, nuestro equipo utiliza las últimas tecnologías para entregar productos robustos y escalables.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-web')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-web')?.imageHint!,
  },
  {
    icon: Smartphone,
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Creando aplicaciones para iOS y Android hermosas y de alto rendimiento que a tus usuarios les encantarán. Nos enfocamos en una experiencia de usuario fluida, rendimiento nativo y una integración perfecta con tus sistemas existentes.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-mobile')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-mobile')?.imageHint!,
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Diseño centrado en el usuario para crear experiencias digitales intuitivas y atractivas en todas las plataformas. Investigamos, creamos prototipos y probamos para asegurarnos de que cada interacción sea significativa y fácil de usar.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-uiux')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-uiux')?.imageHint!,
  },
  {
    icon: Cloud,
    title: 'Soluciones en la Nube',
    description: 'Aprovecha el poder de la nube con nuestras soluciones de infraestructura escalables y seguras. Te ayudamos a migrar, optimizar y gestionar tu arquitectura en la nube para garantizar alta disponibilidad y eficiencia de costos.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-cloud')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-cloud')?.imageHint!,
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {services.map((service) => (
              <div key={service.title} className="flex justify-center">
                <div className="flex flex-col items-center text-center max-w-2xl">
                    <div className="mb-4 flex items-center gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full p-3">
                            <service.icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{service.title}</h2>
                    </div>
                  <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                  <Button variant="outline" className="mt-6">Saber más</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
