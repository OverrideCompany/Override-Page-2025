import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import type { TeamMember } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers: TeamMember[] = [
  { id: 'team-1', name: 'Jane Doe', role: 'CEO y Fundadora', imageUrl: PlaceHolderImages.find(p => p.id === 'team-1')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-1')?.imageHint! },
  { id: 'team-2', name: 'John Smith', role: 'CTO', imageUrl: PlaceHolderImages.find(p => p.id === 'team-2')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-2')?.imageHint! },
  { id: 'team-3', name: 'Emily White', role: 'Diseñadora Principal', imageUrl: PlaceHolderImages.find(p => p.id === 'team-3')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-3')?.imageHint! },
  { id: 'team-4', name: 'Michael Brown', role: 'Desarrollador Principal', imageUrl: PlaceHolderImages.find(p => p.id === 'team-4')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-4')?.imageHint! },
];

export function AboutSection() {
  const aboutUsImage = PlaceHolderImages.find(p => p.id === 'about-us');
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Sobre Nosotros</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Nuestra misión es empoderar a las empresas con tecnología transformadora. Somos un equipo apasionado de desarrolladores, diseñadores y estrategas dedicados a crear software que impulsa el crecimiento y la innovación.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Nuestra visión es ser una fuerza líder en el panorama digital, conocidos por nuestro compromiso con la calidad, la integridad y el éxito del cliente.
            </p>
          </div>
          {aboutUsImage && (
            <div className="relative aspect-square">
                <Image src={aboutUsImage.imageUrl} alt="Sobre nosotros" fill className="object-cover rounded-lg" data-ai-hint={aboutUsImage.imageHint} />
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">Conoce a Nuestro Equipo</h3>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            Los talentosos individuos detrás de nuestro éxito.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-card">
              <CardContent className="pt-6">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
