import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
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
    <header className="bg-construction-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f4173ebd-f9b0-470f-bc1e-53f1a4a00a33.png" 
              alt="Lia Gips GmbH Logo" 
              className="h-12 w-auto"
            />
            <span className="font-bold text-xl">Lia Gips GmbH</span>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 data-[state=open]:bg-white/10">
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          isActive(service.path) ? "bg-accent text-accent-foreground" : ""
                        )}
                      >
                        <div className="text-sm font-medium leading-none">{service.name}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/ueber-uns"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    isActive("/ueber-uns") ? "bg-white/20" : ""
                  )}
                >
                  Über uns
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/kontakt"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    isActive("/kontakt") ? "bg-white/20" : ""
                  )}
                >
                  Kontakt
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
    </header>
  );
};

export default Navigation;