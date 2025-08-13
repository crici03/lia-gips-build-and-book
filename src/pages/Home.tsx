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
            {/* Logo Container - Organic Shape */}
            <div className="relative mb-12">
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
            
            {/* Main Text - Inspired by Orhan Layout */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-wide">
                <span className="text-construction-primary">LIA GIPS.</span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                BAULEISTUNGEN
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white/90 mb-12 leading-tight">
                GLASKLAR.
              </h3>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Um die Bedürfnisse rund um Ihre Bauprojekte optimal erfüllen zu können, bieten wir eine Reihe von hochwertigen Dienstleistungen an.
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