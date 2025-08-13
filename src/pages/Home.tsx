import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `var(--hero-gradient), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`
          }}
        />
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Logo Container - Organic Shape */}
            <div className="relative mb-8">
              <div 
                className="relative bg-white p-8 md:p-12"
                style={{
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 60%, 95% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 40%, 5% 20%)',
                  width: 'fit-content',
                  minWidth: '280px'
                }}
              >
                <img 
                  src="/lovable-uploads/f4173ebd-f9b0-470f-bc1e-53f1a4a00a33.png" 
                  alt="Lia Gips GmbH Logo" 
                  className="h-32 md:h-48 w-auto mx-auto"
                />
              </div>
            </div>
            
            {/* Company Name and Slogan */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Lia Gips GmbH
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Ihr Partner für präzise Bau- und Renovierungsarbeiten
              </p>
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                Bei der Lia Gips GmbH dreht sich alles um Qualität, Handwerk und Kundenzufriedenheit. 
                Mit Leidenschaft und Erfahrung bieten wir exzellente Dienstleistungen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate('/kontakt')}
                  className="bg-white text-construction-primary hover:bg-construction-light hover:text-construction-dark"
                >
                  Jetzt Termin vereinbaren
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/verputzarbeiten')}
                  className="border-white text-white bg-transparent hover:bg-white hover:text-construction-primary"
                >
                  Unsere Leistungen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;