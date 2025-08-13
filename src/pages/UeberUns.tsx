import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Award, Users, Mail, MapPin, Phone } from 'lucide-react';

const UeberUns = () => {
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

  const team = [
    {
      name: "Arsim Gashi",
      position: "Geschäftsführer",
      email: "arsim.gashi@liagips.ch"
    },
    {
      name: "Bekim Gashi", 
      position: "Mitarbeiter",
      email: "bekim.gashi@liagips.ch"
    },
    {
      name: "Blerim Gashi",
      position: "Mitarbeiter", 
      email: "blerim.gashi@liagips.ch"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-construction-dark mb-4">
              Über uns
            </h1>
            <p className="text-xl text-construction-dark/70 max-w-3xl mx-auto">
              Lernen Sie das Team der Lia Gips GmbH kennen und erfahren Sie mehr über unsere Philosophie
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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

      {/* Team Section */}
      <section className="py-24 bg-section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-construction-dark/70">
              Lernen Sie die Menschen hinter Lia Gips GmbH kennen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-construction-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-construction-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-construction-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-construction-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-construction-dark/70">
                    <Mail className="h-4 w-4" />
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-sm hover:text-construction-primary transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-construction-dark mb-8">
              Firmeninformationen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-construction-primary/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-construction-primary" />
                  </div>
                  <h3 className="font-semibold text-construction-dark mb-2">Adresse</h3>
                  <p className="text-construction-dark/70">
                    Hardstrasse 1<br />
                    4800 Zofingen
                  </p>
                </CardContent>
              </Card>

              <Card className="border-construction-primary/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-construction-primary" />
                  </div>
                  <h3 className="font-semibold text-construction-dark mb-2">Telefon</h3>
                  <a 
                    href="tel:0767008022" 
                    className="text-construction-primary hover:text-construction-dark transition-colors"
                  >
                    076 700 80 22
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UeberUns;