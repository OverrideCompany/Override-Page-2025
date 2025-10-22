"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Productos', href: '/portafolio' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center md:justify-center">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-4 left-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full bg-background/50 shadow-lg backdrop-blur-xl border border-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0 bg-background/90 backdrop-blur-md">
            <div className="flex items-center p-4 border-b">
              <Logo />
            </div>
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link 
                    href={item.href} 
                    className={cn(
                      "text-lg font-medium",
                      pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>                  
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Logo "drop" */}
        <div className="flex items-center justify-center bg-background/50 p-1.5 rounded-full shadow-lg backdrop-blur-xl border border-white/10 h-14 w-14">
          <Logo />
        </div>

        {/* Main Navigation Capsule */}
        <div className="flex items-center space-x-1 h-14 rounded-full bg-background/50 p-1 shadow-lg backdrop-blur-xl border border-white/10">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors px-3 py-1.5 rounded-full",
                  pathname === item.href 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Theme toggle "drop" */}
        <div className="block bg-background/50 p-1.5 rounded-full shadow-lg backdrop-blur-xl border border-white/10">
           <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Moon className="h-4 w-4" />
                <span className="sr-only">Cambiar tema</span>
            </Button>
        </div>
      </div>
    </header>
  );
}
