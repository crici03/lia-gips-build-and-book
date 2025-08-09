import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppointmentForm from '@/components/AppointmentForm';
import ServiceCard from '@/components/ServiceCard';
import { 
  Building2, 
  Hammer, 
  Shield, 
  Paintbrush, 
  Home, 
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Award,
  Users
} from 'lucide-react';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Verputzarbeiten",
      description: "Perfekte Oberflächen für Innen- und Außenbereiche mit verschiedenen Putzsystemen",
      icon: Paintbrush,
      features: [
        "Kalkputz für gesundes Raumklima",
        "Kalkzementputz für Fassaden",
        "Zementputz für Langlebigkeit",
        "Gipsputz für Innenbereiche",
        "Lehmbau für natürliches Wohnen"
      ]
    },
    {
      title: "Trockenbau",
      description: "Vielfältige Lösungen für moderne Raumgestaltung und funktionale Bauweisen",
      icon: Building2,
      features: [
        "Leichtbauwände",
        "Schallschutzwände", 
        "Akustikdecken",
        "Brandschutzlösungen",
        "Wärmedämmende Konstruktionen"
      ]
    },
    {
      title: "Renovationen & Umbauten",
      description: "Wir machen aus Alt Neu – mit Fachkompetenz und Liebe zum Detail",
      icon: Home,
      features: [
        "Komplette Renovierungen",
        "Modernisierung bestehender Bausubstanz",
        "Energetische Sanierung",
        "Barrierefreier Umbau",
        "Denkmalschutz-konforme Arbeiten"
      ]
    },
    {
      title: "Fassadenarbeiten", 
      description: "Professionelle Fassadenisolierung für Energieeffizienz und optimales Raumklima",
      icon: Shield,
      features: [
        "Wärmedämmverbundsysteme",
        "Fassadendämmung",
        "Außenputzsysteme",
        "Fassadenrenovierung",
        "Energetische Optimierung"
      ]
    },
    {
      title: "Neubauten",
      description: "Ihr Projekt in besten Händen – von der Planung bis zur Fertigstellung",
      icon: Hammer,
      features: [
        "Einfamilienhäuser",
        "Mehrfamilienhäuser", 
        "Industrieanlagen",
        "Hochbau-Projekte",
        "Gewerbebau"
      ]
    },
    {
      title: "Abbruch & Rückbau",
      description: "Fachgerechter und nachhaltiger Rückbau mit ordnungsgemäßer Entsorgung",
      icon: Wrench,
      features: [
        "Selektiver Rückbau",
        "Materialtrennnung",
        "Umweltgerechte Entsorgung",
        "Schadstoffsanierung",
        "Schnelle Ausführung"
      ]
    }
  ];

  const advantages = [
    {
      icon: CheckCircle,
      title: "Verlässlichkeit",
      description: "Wir halten Termine ein und arbeiten stets präzise"
    },
    {
      icon: Star,
      title: "Kundenzufriedenheit", 
      description: "Ihr Wunsch ist unser Ziel. Wir hören zu und setzen Ihre Vorstellungen um"
    },
    {
      icon: Award,
      title: "Erfahrung",
      description: "Mit jahrelanger Erfahrung sind wir Ihr zuverlässiger Partner im Bauwesen"
    },
    {
      icon: Users,
      title: "Qualität",
      description: "Höchste Standards bei Präzision, Schnelligkeit und Sauberkeit"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Hidden */}
      <header className="hidden">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f4173ebd-f9b0-470f-bc1e-53f1a4a00a33.png" 
              alt="Lia Gips GmbH Logo" 
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-construction-dark hover:text-construction-primary transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-construction-dark hover:text-construction-primary transition-colors"
            >
              Über uns
            </button>
            <button 
              onClick={() => scrollToSection('appointment')}
              className="text-sm font-medium text-construction-dark hover:text-construction-primary transition-colors"
            >
              Termin
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-construction-dark hover:text-construction-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>
          <Button 
            variant="hero" 
            onClick={() => scrollToSection('appointment')}
            className="hidden md:inline-flex"
          >
            Termin vereinbaren
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `var(--hero-gradient), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`
          }}
        />
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Logo - smaller and positioned left */}
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/f4173ebd-f9b0-470f-bc1e-53f1a4a00a33.png" 
                alt="Lia Gips GmbH Logo" 
                className="h-32 w-auto"
              />
            </div>
            
            {/* Text content - left aligned on larger screens */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ihr Partner für präzise <br />
                <span className="text-construction-light">Bau- und Renovierungsarbeiten</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 lg:max-w-none max-w-3xl mx-auto lg:mx-0">
                Bei der Lia Gips GmbH dreht sich alles um Qualität, Handwerk und Kundenzufriedenheit. 
                Mit Leidenschaft und Erfahrung bieten wir exzellente Dienstleistungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('appointment')}
              className="bg-white text-construction-primary hover:bg-construction-light hover:text-construction-dark"
            >
              Jetzt Termin vereinbaren
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="border-white text-white bg-transparent hover:bg-white hover:text-construction-primary"
            >
              Unsere Leistungen
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-section-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-lg text-construction-dark/70 max-w-2xl mx-auto">
              Von Verputzarbeiten bis hin zu kompletten Neubauten – wir bieten Ihnen 
              umfassende Lösungen für alle Ihre Bauprojekte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-6">
                Präzision und Schnelligkeit – Unsere Bauweise in Perfektion
              </h2>
              <p className="text-lg text-construction-dark/80 mb-6">
                Bei uns wird jedes Detail auf der Baustelle bis auf den Millimeter genau umgesetzt. 
                Wir legen höchsten Wert auf präzise Arbeit, um beste Ergebnisse zu erzielen 
                und alle Anforderungen exakt zu erfüllen.
              </p>
              <p className="text-lg text-construction-dark/80 mb-8">
                Neben der Präzision ist uns auch die Geschwindigkeit wichtig. Trotz unserer 
                hohen Ansprüche an Genauigkeit, garantieren wir schnelle Ausführungen, 
                um Projekte termingerecht abzuschließen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-construction-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="h-5 w-5 text-construction-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-construction-dark mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-construction-dark/70">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="border-construction-primary/20 bg-construction-light/30">
                <CardHeader>
                  <CardTitle className="text-construction-dark">Sauberkeit auf der Baustelle</CardTitle>
                  <CardDescription className="text-construction-dark/70">
                    Ein unverzichtbarer Bestandteil unserer Bauweise
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-construction-dark/80">
                    Eine saubere Baustelle ist nicht nur ein optisches Zeichen für Professionalität, 
                    sondern trägt maßgeblich zur Reduzierung von Risiken bei.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-construction-primary" />
                      <span className="text-sm text-construction-dark/80">Erhöhte Sicherheit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-construction-primary" />
                      <span className="text-sm text-construction-dark/80">Verbesserte Effizienz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-construction-primary" />
                      <span className="text-sm text-construction-dark/80">Umweltschutz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-construction-primary" />
                      <span className="text-sm text-construction-dark/80">Nachhaltigkeit</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-24 bg-section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
              Lassen Sie uns gemeinsam Ihre Projekte verwirklichen
            </h2>
            <p className="text-lg text-construction-dark/70 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
            </p>
          </div>
          
          <AppointmentForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
              Kontakt
            </h2>
            <p className="text-lg text-construction-dark/70">
              Wir sind für Sie da – zögern Sie nicht, uns zu kontaktieren!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-construction-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-construction-primary" />
                </div>
                <h3 className="font-semibold text-construction-dark mb-2">Telefon</h3>
                <a 
                  href="tel:0768020911" 
                  className="text-construction-primary hover:text-construction-dark transition-colors"
                >
                  076 802 09 11
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-construction-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-construction-primary" />
                </div>
                <h3 className="font-semibold text-construction-dark mb-2">E-Mail</h3>
                <a 
                  href="mailto:info@lia-gips.ch" 
                  className="text-construction-primary hover:text-construction-dark transition-colors"
                >
                  info@lia-gips.ch
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-construction-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-construction-primary" />
                </div>
                <h3 className="font-semibold text-construction-dark mb-2">Öffnungszeiten</h3>
                <div className="text-sm text-construction-dark/70">
                  <div>Mo-Fr: 07:00-17:00</div>
                  <div>Sa: Nach Vereinbarung</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-construction-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-construction-primary" />
                </div>
                <h3 className="font-semibold text-construction-dark mb-2">Geschäftsführer</h3>
                <p className="text-construction-dark/70">Arsim Gashi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-dark text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/f4173ebd-f9b0-470f-bc1e-53f1a4a00a33.png" 
                alt="Lia Gips GmbH Logo" 
                className="h-16 w-auto mb-4 filter contrast-100"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-white/80 text-sm">
                Ihr Partner für präzise Bau- und Renovierungsarbeiten. 
                Qualität, Handwerk und Kundenzufriedenheit seit Jahren.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Leistungen</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Verputzarbeiten</li>
                <li>Trockenbau</li>
                <li>Fassadenarbeiten</li>
                <li>Renovationen</li>
                <li>Neubauten</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:0768020911" className="hover:text-white transition-colors">
                    076 802 09 11
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@lia-gips.ch" className="hover:text-white transition-colors">
                    info@lia-gips.ch
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 Lia Gips GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;