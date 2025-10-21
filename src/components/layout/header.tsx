"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

const navItems = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center space-x-2 h-16 rounded-full bg-background/60 p-2 shadow-lg backdrop-blur-md">
        <div className="bg-card p-2 rounded-full">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-card rounded-full p-2">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-background/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center bg-card rounded-full p-2">
           <Button variant="ghost" size="icon" className="rounded-full">
                <Moon className="h-5 w-5" />
                <span className="sr-only">Cambiar tema</span>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 bg-background/90 backdrop-blur-md">
              <div className="flex items-center p-4 border-b">
                <Logo />
              </div>
              <nav className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link href={item.href} className="text-lg font-medium text-foreground hover:text-primary">
                      {item.label}
                    </Link>                  
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
