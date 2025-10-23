
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
    {
      icon: Mail,
      label: 'Correo Electrónico',
      value: 'hello@override.com.mx',
      href: 'mailto:hello@override.com.mx',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '452 200 7824',
      href: 'tel:4522007824',
    },
    {
      icon: MapPin,
      label: 'Oficina',
      value: 'Uruapan, MICH.',
      href: '#',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@overridellc',
      href: 'https://instagram.com/overridellc',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'overridellc',
      href: 'https://facebook.com/overridellc',
    }
  ];

export default function ContactPage() {
  return (
    <main>
      <section id="contact" className="py-16 md:py-24 bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method) => (
                <Link href={method.href} key={method.label} className="block group" target="_blank" rel="noopener noreferrer">
                    <div className="bg-card/50 backdrop-blur-lg border border-white/10 text-card-foreground rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                        <method.icon className="h-16 w-16 mb-6 text-primary" />
                        <p className="text-lg font-semibold text-foreground">{method.label}</p>
                        <p className="mt-1 text-foreground/80 text-sm">{method.value}</p>
                    </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
