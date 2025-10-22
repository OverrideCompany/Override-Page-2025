import { Globe, Zap, Wind, Mountain, Sun, Star } from 'lucide-react';
import { GlassmorphismBackground } from '../glassmorphism-background';

const clients = [
  { name: 'QuantumLeap', icon: Globe },
  { name: 'StellarSync', icon: Zap },
  { name: 'NovaForge', icon: Wind },
  { name: 'ApexIndustries', icon: Mountain },
  { name: 'ZenithCorp', icon: Sun },
  { name: 'Pinnacle', icon: Star },
];

export function TrustedBy() {
  return (
    <section id="clients" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative max-w-5xl mx-auto">
          <GlassmorphismBackground />
          <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Empresas que confían en nosotros</h2>
              <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
                Impulsando la innovación en empresas líderes de la industria.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors grayscale hover:grayscale-0">
                  <client.icon className="h-8 w-8" />
                  <span className="font-semibold text-lg">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}