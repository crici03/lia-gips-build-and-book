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
    </div>
  );
};

export default Home;