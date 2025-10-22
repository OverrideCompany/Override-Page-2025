import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos/Overridelogo.svg" alt="Override Logo" width={120} height={48} className="h-10 md:h-8 w-auto" />
    </Link>
  );
}
