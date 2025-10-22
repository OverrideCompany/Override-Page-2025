"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Link href="/" className="flex items-center justify-center">
      <Image 
        src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos/Overridelogo.svg" 
        alt="Override Logo" 
        width={120} 
        height={48} 
        className={cn(
          "h-10 md:h-8 w-auto transition-all",
          hasMounted && resolvedTheme === 'light' ? 'invert' : ''
        )} 
      />
    </Link>
  );
}
