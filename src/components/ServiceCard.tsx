import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  return (
    <Card className="h-full border-construction-primary/20 hover:border-construction-primary/40 transition-all duration-300 hover:shadow-lg group">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-construction-light rounded-full flex items-center justify-center mb-4 group-hover:bg-construction-primary transition-colors duration-300">
          <Icon className="h-8 w-8 text-construction-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-construction-dark">{title}</CardTitle>
        <CardDescription className="text-construction-dark/70">
          {description}
        </CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-construction-dark/80">
                <div className="w-1.5 h-1.5 bg-construction-primary rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default ServiceCard;