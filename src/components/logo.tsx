import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary/80 transition-colors">
      Override
    </Link>
  );
}
