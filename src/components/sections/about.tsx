import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import type { TeamMember } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers: TeamMember[] = [
  { id: 'team-1', name: 'Jane Doe', role: 'CEO & Founder', imageUrl: PlaceHolderImages.find(p => p.id === 'team-1')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-1')?.imageHint! },
  { id: 'team-2', name: 'John Smith', role: 'CTO', imageUrl: PlaceHolderImages.find(p => p.id === 'team-2')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-2')?.imageHint! },
  { id: 'team-3', name: 'Emily White', role: 'Lead Designer', imageUrl: PlaceHolderImages.find(p => p.id === 'team-3')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-3')?.imageHint! },
  { id: 'team-4', name: 'Michael Brown', role: 'Lead Developer', imageUrl: PlaceHolderImages.find(p => p.id === 'team-4')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'team-4')?.imageHint! },
];

export function AboutSection() {
  const aboutUsImage = PlaceHolderImages.find(p => p.id === 'about-us');
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Override</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Our mission is to empower businesses with transformative technology. We are a passionate team of developers, designers, and strategists dedicated to building software that drives growth and innovation.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Our vision is to be a leading force in the digital landscape, known for our commitment to quality, integrity, and client success.
            </p>
          </div>
          {aboutUsImage && (
            <div className="relative aspect-square">
                <Image src={aboutUsImage.imageUrl} alt="About us" fill className="object-cover rounded-lg" data-ai-hint={aboutUsImage.imageHint} />
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">Meet Our Team</h3>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            The talented individuals behind our success.
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
