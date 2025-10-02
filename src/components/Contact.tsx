import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider mb-4">
            CONTACT
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Parlons de votre projet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-bebas text-3xl tracking-wider mb-6">
                DISCUTONS DE VOTRE PROJET
              </h3>
              <p className="font-inter text-muted-foreground mb-8">
                Que vous ayez besoin d'une vidéo promotionnelle, d'un reportage ou d'un court-métrage, nous sommes là pour donner vie à vos idées.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-inter text-sm text-muted-foreground">Email</p>
                  <p className="font-inter font-medium">contact@lfcreatifstudio.fr</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-inter text-sm text-muted-foreground">Téléphone</p>
                  <p className="font-inter font-medium">+33 X XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-inter text-sm text-muted-foreground">Localisation</p>
                  <p className="font-inter font-medium">France</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
            <div>
              <Label htmlFor="name" className="font-inter">Nom</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email" className="font-inter">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="font-inter">Téléphone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message" className="font-inter">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="mt-2"
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-inter uppercase tracking-wider">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
