import { Code, Smartphone, Palette, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'We build modern, responsive, and high-performance web applications tailored to your business needs.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Crafting beautiful and performant iOS and Android apps that your users will love.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centric design to create intuitive and engaging digital experiences across all platforms.'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Leverage the power of the cloud with our scalable and secure infrastructure solutions.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            We offer a comprehensive suite of software development services.
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
