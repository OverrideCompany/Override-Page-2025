
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Briefcase, AppWindow, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const navItems = [
  { label: 'Servicios', href: '/servicios', icon: Briefcase },
  { label: 'Productos', href: '/productos', icon: AppWindow },
  { label: 'Nosotros', href: '/nosotros', icon: Users },
  { label: 'Contacto', href: '/contacto', icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center">
        <div className="flex items-center space-x-4">
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
                    pathname.startsWith(item.href)
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
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full h-8 w-8">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Cambiar tema</span>
              </Button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 h-16">
        <div className="bg-background/80 backdrop-blur-lg border border-white/10 rounded-full h-full flex items-center justify-around">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} className={cn(
              "flex flex-col items-center justify-center h-full w-full rounded-full transition-colors",
              pathname.startsWith(item.href) ? "text-primary" : "text-foreground/70 hover:text-foreground"
            )}>
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
           <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full h-10 w-10 flex-shrink-0">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Cambiar tema</span>
            </Button>
        </div>
      </div>
    </>
  );
}
