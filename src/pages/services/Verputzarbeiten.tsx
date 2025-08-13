import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Paintbrush, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Verputzarbeiten = () => {
  const navigate = useNavigate();

  const features = [
    "Kalkputz für gesundes Raumklima",
    "Kalkzementputz für Fassaden",
    "Zementputz für Langlebigkeit",
    "Gipsputz für Innenbereiche",
    "Lehmbau für natürliches Wohnen"
  ];

  const advantages = [
    {
      title: "Gesundes Raumklima",
      description: "Kalkputz reguliert natürlich die Luftfeuchtigkeit und wirkt antibakteriell",
      icon: CheckCircle
    },
    {
      title: "Langlebigkeit",
      description: "Hochwertige Materialien und fachgerechte Verarbeitung für dauerhafte Ergebnisse",
      icon: Star
    },
    {
      title: "Individuelle Lösungen",
      description: "Verschiedene Putzsysteme je nach Anforderung und Einsatzbereich",
      icon: Paintbrush
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Paintbrush className="h-10 w-10 text-construction-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-construction-dark mb-4">
              Verputzarbeiten
            </h1>
            <p className="text-xl text-construction-dark/70 max-w-3xl mx-auto">
              Perfekte Oberflächen für Innen- und Außenbereiche mit verschiedenen Putzsystemen
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-construction-dark mb-6">
                Qualitative Verputzarbeiten für jeden Bedarf
              </h2>
              <p className="text-lg text-construction-dark/80 mb-6">
                Verputzarbeiten sind das Fundament für schöne und langlebige Oberflächen. 
                Wir bieten Ihnen verschiedene Putzsysteme, die je nach Einsatzbereich und 
                Ihren individuellen Wünschen optimal angepasst werden.
              </p>
              <p className="text-lg text-construction-dark/80 mb-8">
                Von traditionellem Kalkputz für ein gesundes Raumklima bis hin zu modernen 
                Zementputzen für höchste Beanspruchung – wir haben die passende Lösung 
                für Ihr Projekt.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-construction-dark">
                  Unsere Leistungen im Detail:
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-construction-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-construction-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={() => navigate('/kontakt')}
                className="bg-construction-primary hover:bg-construction-dark text-white"
              >
                Jetzt Beratung anfragen
              </Button>
            </div>
            
            <div className="grid gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-construction-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-construction-light rounded-lg flex items-center justify-center">
                        <advantage.icon className="h-6 w-6 text-construction-primary" />
                      </div>
                      <CardTitle className="text-construction-dark">{advantage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-construction-dark/70">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-24 bg-section-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-construction-dark mb-8 text-center">
              Verschiedene Putzsysteme für verschiedene Ansprüche
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-construction-primary/20">
                <CardHeader>
                  <CardTitle className="text-construction-dark">Kalkputz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-construction-dark/80 mb-4">
                    Ideal für Innenbereiche. Kalkputz reguliert natürlich die Luftfeuchtigkeit 
                    und schafft ein gesundes Raumklima. Zudem wirkt er antibakteriell und 
                    schimmelhemmend.
                  </p>
                  <ul className="space-y-2 text-sm text-construction-dark/70">
                    <li>• Feuchtigkeitsregulierend</li>
                    <li>• Antibakteriell</li>
                    <li>• Natürlicher Rohstoff</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-construction-primary/20">
                <CardHeader>
                  <CardTitle className="text-construction-dark">Zementputz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-construction-dark/80 mb-4">
                    Besonders robust und langlebig. Ideal für Außenbereiche und Räume 
                    mit hoher Beanspruchung wie Keller oder Garagen.
                  </p>
                  <ul className="space-y-2 text-sm text-construction-dark/70">
                    <li>• Sehr robust</li>
                    <li>• Wetterbeständig</li>
                    <li>• Hohe Druckfestigkeit</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-construction-primary/20">
                <CardHeader>
                  <CardTitle className="text-construction-dark">Gipsputz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-construction-dark/80 mb-4">
                    Schnell trocknend und leicht zu verarbeiten. Perfekt für Trockenbereiche 
                    im Innenbereich, wo eine glatte Oberfläche gewünscht ist.
                  </p>
                  <ul className="space-y-2 text-sm text-construction-dark/70">
                    <li>• Schnelle Trocknung</li>
                    <li>• Glatte Oberfläche</li>
                    <li>• Einfache Bearbeitung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-construction-primary/20">
                <CardHeader>
                  <CardTitle className="text-construction-dark">Lehmbau</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-construction-dark/80 mb-4">
                    Ökologisch und nachhaltig. Lehm ist ein natürlicher Baustoff, der 
                    für ein angenehmes Raumklima sorgt und vollständig recyclebar ist.
                  </p>
                  <ul className="space-y-2 text-sm text-construction-dark/70">
                    <li>• 100% natürlich</li>
                    <li>• Recyclebar</li>
                    <li>• Klimaregulierend</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verputzarbeiten;