import { Card, CardContent } from "@/components/ui/card";
import { Camera, Scissors, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Camera,
      title: "Expertise Technique",
      description: "Équipement professionnel et maîtrise des dernières technologies audiovisuelles",
    },
    {
      icon: Scissors,
      title: "Créativité",
      description: "Une approche artistique unique pour chaque projet, du concept à la réalisation",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Toujours à l'affût des nouvelles tendances et techniques de production",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider mb-6">
              À PROPOS
            </h2>
            <div className="space-y-4 font-inter text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                <strong className="font-semibold">lf creatif studio</strong> est spécialisé dans la création de contenus audiovisuels de haute qualité.
              </p>
              <p>
                Nous accompagnons nos clients du monde du <strong>sport</strong>, de la <strong>cuisine</strong> et du <strong>cinéma</strong> dans la réalisation de leurs projets vidéo, du tournage à la post-production.
              </p>
              <p>
                Notre approche combine expertise technique et sensibilité artistique pour créer des contenus qui captivent et engagent votre audience.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-accent p-3 rounded-lg flex-shrink-0">
                    <value.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl tracking-wider mb-2">
                      {value.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
