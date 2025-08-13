import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Verputzarbeiten", path: "/verputzarbeiten" },
    { name: "Trockenbau", path: "/trockenbau" },
    { name: "Renovationen & Umbauten", path: "/renovationen" },
    { name: "Fassadenarbeiten", path: "/fassadenarbeiten" },
    { name: "Neubauten", path: "/neubauten" },
    { name: "Abbruch & Rückbau", path: "/abbruch" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-8 mt-4">
        <div className="bg-construction-primary text-white shadow-lg rounded-lg px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Enlarged LG only */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f4173ebd-f9b0-470f-bc1e-53f1a4a00a33.png" 
                alt="LG Logo" 
                className="h-20 w-auto"
              />
            </Link>

            {/* Simple Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="relative group">
                <button className="text-white hover:text-white/80 font-medium">
                  Leistungen
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-construction-dark hover:bg-construction-light/50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/ueber-uns"
                className={cn(
                  "text-white hover:text-white/80 font-medium transition-colors",
                  isActive("/ueber-uns") ? "text-white/90" : ""
                )}
              >
                Über uns
              </Link>
              
              <Link 
                to="/kontakt"
                className={cn(
                  "text-white hover:text-white/80 font-medium transition-colors",
                  isActive("/kontakt") ? "text-white/90" : ""
                )}
              >
                Kontakt
              </Link>
            </nav>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="lg:hidden text-white hover:bg-white/10"
              size="sm"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;