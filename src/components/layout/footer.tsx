import { Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <p className="text-sm text-primary-foreground/70 text-center md:text-left">
            © {new Date().getFullYear()} Override. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Twitter" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
