import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AppointmentForm from '@/components/AppointmentForm';
import { Phone, Mail, MapPin, Clock, Users } from 'lucide-react';

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-construction-dark mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-construction-dark/70 max-w-3xl mx-auto">
              Wir sind für Sie da – zögern Sie nicht, uns zu kontaktieren!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-construction-primary/20">
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
                  <MapPin className="h-6 w-6 text-construction-primary" />
                </div>
                <h3 className="font-semibold text-construction-dark mb-2">Adresse</h3>
                <div className="text-construction-dark/70">
                  <div>Hardstrasse 1</div>
                  <div>4800 Zofingen</div>
                </div>
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
          </div>

          <Card className="text-center border-construction-primary/20 max-w-md mx-auto mb-16">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-construction-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-construction-primary" />
              </div>
              <h3 className="font-semibold text-construction-dark mb-2">Geschäftsführer</h3>
              <p className="text-construction-dark/70">Arsim Gashi</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-24 bg-section-bg">
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
    </div>
  );
};

export default Kontakt;