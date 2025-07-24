import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, User, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Termin angefragt",
      description: "Wir werden uns zeitnah bei Ihnen melden, um den Termin zu bestätigen.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border-construction-primary/20 shadow-lg">
        <CardHeader className="text-center bg-gradient-to-r from-construction-light to-construction-primary/10">
          <CardTitle className="text-2xl font-bold text-construction-dark flex items-center justify-center gap-2">
            <CalendarDays className="h-6 w-6" />
            Termin vereinbaren
          </CardTitle>
          <CardDescription className="text-construction-dark/80">
            Lassen Sie uns Ihr Projekt besprechen. Wir freuen uns auf Ihre Anfrage!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-construction-dark font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ihr vollständiger Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-construction-primary/30 focus:border-construction-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-construction-dark font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Telefon *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="border-construction-primary/30 focus:border-construction-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-construction-dark font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-construction-primary/30 focus:border-construction-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-construction-dark font-medium">
                Gewünschte Leistung *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                <SelectTrigger className="border-construction-primary/30 focus:border-construction-primary">
                  <SelectValue placeholder="Wählen Sie eine Leistung" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verputzarbeiten">Verputzarbeiten</SelectItem>
                  <SelectItem value="trockenbau">Trockenbau</SelectItem>
                  <SelectItem value="fassadenarbeiten">Fassadenarbeiten</SelectItem>
                  <SelectItem value="renovation">Renovation & Umbau</SelectItem>
                  <SelectItem value="neubau">Neubau</SelectItem>
                  <SelectItem value="abbruch">Abbruch & Rückbau</SelectItem>
                  <SelectItem value="beratung">Beratung</SelectItem>
                  <SelectItem value="sonstiges">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-construction-dark font-medium flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Wunschtermin *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="border-construction-primary/30 focus:border-construction-primary"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-construction-dark font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Uhrzeit
                </Label>
                <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger className="border-construction-primary/30 focus:border-construction-primary">
                    <SelectValue placeholder="Gewünschte Uhrzeit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08:00">08:00</SelectItem>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                    <SelectItem value="13:00">13:00</SelectItem>
                    <SelectItem value="14:00">14:00</SelectItem>
                    <SelectItem value="15:00">15:00</SelectItem>
                    <SelectItem value="16:00">16:00</SelectItem>
                    <SelectItem value="17:00">17:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-construction-dark font-medium">
                Nachricht / Projektbeschreibung
              </Label>
              <Textarea
                id="message"
                placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="border-construction-primary/30 focus:border-construction-primary min-h-[100px]"
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
            >
              Termin anfragen
            </Button>
          </form>

          <div className="text-sm text-muted-foreground text-center pt-4 border-t border-construction-primary/20">
            * Pflichtfelder | Wir behandeln Ihre Daten vertraulich und melden uns zeitnah bei Ihnen.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentForm;