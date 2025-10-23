
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

/**
 * The Logo component.
 * It displays the Override logo and automatically inverts its colors
 * for the light theme to ensure visibility.
 */
export function Logo() {
  const { resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure component is mounted on the client to safely use the theme.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Link href="/" className="flex items-center justify-center">
      <Image 
        src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos/Overridelogo.svg" 
        alt="Override Logo" 
        width={140} 
        height={56} 
        className={cn(
          "h-8 w-auto transition-all",
          // Invert the color of the SVG logo in light mode for better contrast
          hasMounted && resolvedTheme === 'light' ? 'invert' : ''
        )} 
      />
    </Link>
  );
}
