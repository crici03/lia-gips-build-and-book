import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/a80b558f-8139-48a1-ba6e-ea1be000dc9f.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container relative z-10 px-4">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
            {/* Company Text - Large and Centered */}
            <div className="mb-16 mt-32">
              <h1 className="text-5xl md:text-8xl font-bold text-construction-primary mb-8 leading-tight">
                LIA GIPS GMBH
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-construction-primary mb-12 leading-tight">
                DIESE GIPSEREI IST EINZIGARTIG
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-construction-primary/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-construction-primary mb-4">Kontakt</h2>
          <p className="text-center text-gray-600 mb-12">Wir sind für Sie da – zögern Sie nicht, uns zu kontaktieren!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-white rounded-lg p-10 shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-construction-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-construction-primary mb-2">Telefon</h3>
              <p className="text-construction-primary font-medium">076 802 09 11</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-10 shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-construction-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-construction-primary mb-2">E-Mail</h3>
              <p className="text-construction-primary font-medium">info@lia-gips.ch</p>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-lg p-10 shadow-lg text-center">
              <div className="w-16 h-16 bg-construction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-construction-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-construction-primary mb-2">Öffnungszeiten</h3>
              <p className="text-construction-primary font-medium">Mo-Fr: 07:00-17:00</p>
              <p className="text-construction-primary font-medium">Sa: Nach Vereinbarung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Lia Gips GmbH</h3>
              <p className="text-white/90 leading-relaxed">
                Ihr Partner für präzise Bau- und Renovierungsarbeiten. Qualität, 
                Handwerk und Kundenzufriedenheit seit Jahren.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Leistungen</h3>
              <ul className="space-y-2 text-white/90">
                <li>Verputzarbeiten</li>
                <li>Trockenbau</li>
                <li>Fassadenarbeiten</li>
                <li>Renovationen</li>
                <li>Neubauten</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  076 802 09 11
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@lia-gips.ch
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">© 2025 Lia Gips GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;