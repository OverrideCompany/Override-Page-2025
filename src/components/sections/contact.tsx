import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <a href="mailto:contact@override.dev" className="text-foreground/80 hover:text-foreground transition-colors">contact@override.dev</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <a href="tel:+11234567890" className="text-foreground/80 hover:text-foreground transition-colors">(123) 456-7890</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Office</h4>
                <p className="text-foreground/80">123 Dev Lane, Silicon Valley, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
