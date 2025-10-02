import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ChefHat, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Sport",
      description: "Capturer l'intensité et l'émotion du mouvement",
      details: "Sportifs professionnels, kinésithérapeutes, ostéopathes, masseurs - nous créons des contenus dynamiques qui valorisent votre expertise.",
    },
    {
      icon: ChefHat,
      title: "Cuisine",
      description: "Sublimer l'art culinaire en images",
      details: "Vidéos recettes, portraits de chefs, tutoriels culinaires - chaque plat devient une œuvre visuelle appétissante.",
    },
    {
      icon: Film,
      title: "Court-métrage",
      description: "Raconter des histoires qui marquent",
      details: "De l'écriture à la post-production, nous donnons vie à vos projets cinématographiques avec créativité et professionnalisme.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider mb-4">
            NOS SERVICES
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions audiovisuelles adaptées à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-accent rounded-lg group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-bebas text-3xl tracking-wider">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-inter text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
