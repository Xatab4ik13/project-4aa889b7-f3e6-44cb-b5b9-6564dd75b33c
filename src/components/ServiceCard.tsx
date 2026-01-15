import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-lg card-hover border border-border">
      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
