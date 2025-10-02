import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Studio background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider text-white">
            LF CREATIF STUDIO
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 font-light tracking-wide">
            Tournage & Montage Vidéo Professionnel
          </p>
          <p className="font-inter text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Spécialisés dans le sport, la cuisine et le court-métrage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              variant="secondary"
              className="font-inter uppercase tracking-wider"
            >
              Voir nos réalisations
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="font-inter uppercase tracking-wider border-white text-white hover:bg-white hover:text-black"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
