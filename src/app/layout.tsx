
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingShapes } from '@/components/floating-shapes';
import { ThemeProvider } from 'next-themes';
import { ScrollProgressProvider } from '@/context/scroll-progress-context';

export const metadata: Metadata = {
  title: 'Override Rediseño',
  description: 'Un rediseño de sitio web elegante y minimalista para Override, una empresa de desarrollo de software.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-dvh md:pb-0 pb-20">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgressProvider>
            <FloatingShapes />
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <Toaster />
          </ScrollProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
