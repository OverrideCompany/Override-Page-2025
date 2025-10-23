import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
    {
      icon: Mail,
      label: 'Correo Electrónico',
      value: 'contact@override.dev',
      href: 'mailto:contact@override.dev',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '(123) 456-7890',
      href: 'tel:+11234567890',
    },
    {
      icon: MapPin,
      label: 'Oficina',
      value: '123 Dev Lane, Silicon Valley, CA',
      href: '#',
    },
  ];

export default function ContactPage() {
  return (
    <main>
      <section id="contact" className="py-16 md:py-24 bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Ponte en Contacto</h1>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
              Nos encantaría saber de ti. Elige tu método de contacto preferido.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method) => (
                <Link href={method.href} key={method.label} className="block group">
                    <div className="bg-card/50 backdrop-blur-lg border border-white/10 text-card-foreground rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                        <method.icon className="h-20 w-20 mb-6 text-primary" />
                        <p className="text-xl font-semibold text-foreground">{method.label}</p>
                        <p className="mt-2 text-foreground/80">{method.value}</p>
                    </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
