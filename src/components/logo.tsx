import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors px-2">
      Override
    </Link>
  );
}
