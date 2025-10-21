import { Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import Link from 'next/link';

const footerNavs = [
  {
    label: "Producto",
    items: [
      {
        href: '/servicios',
        name: 'Servicios'
      },
      {
        href: '/portafolio',
        name: 'Portafolio'
      },
    ]
  },
  {
    label: "Empresa",
    items: [
      {
        href: '/nosotros',
        name: 'Nosotros'
      },
      {
        href: '/contacto',
        name: 'Contacto'
      },
    ]
  },
  {
    label: "Legal",
    items: [
      {
        href: '#',
        name: 'Términos'
      },
      {
        href: '#',
        name: 'Privacidad'
      }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="container mx-auto px-4">
        <div className="bg-background/50 backdrop-blur-lg border border-white/10 text-card-foreground rounded-xl shadow-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="w-40">
              <Logo />
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerNavs.map((nav) => (
                <div key={nav.label}>
                  <h4 className="font-semibold text-foreground mb-4">{nav.label}</h4>
                  <ul className="space-y-3">
                    {nav.items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              &copy; {new Date().getFullYear()} Override. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 order-1 md:order-2">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
