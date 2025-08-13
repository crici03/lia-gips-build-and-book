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
            {/* Company Slogan - Large and Centered */}
            <div className="mb-16 mt-32">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
                Ihr Partner für präzise
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
                Bau- und Renovierungsarbeiten
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Bei der Lia Gips GmbH dreht sich alles um Qualität, Handwerk und Kundenzufriedenheit. 
                Mit Leidenschaft und Erfahrung bieten wir exzellente Dienstleistungen.
              </p>
              
              <Button 
                onClick={() => navigate('/kontakt')}
                className="bg-construction-primary hover:bg-construction-dark text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Kontaktiere uns
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;