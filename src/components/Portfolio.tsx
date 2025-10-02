import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const projects = [
    {
      title: "Projet Sport 1",
      category: "Sport",
      description: "Vidéo promotionnelle pour un centre de kinésithérapie",
      video: video1,
    },
    {
      title: "Projet Cuisine 1",
      category: "Cuisine",
      description: "Série de recettes pour un chef étoilé",
      video: video2,
    },
    {
      title: "Court-métrage 1",
      category: "Film",
      description: "Court-métrage fiction réalisé en 2024",
      video: video3,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider mb-4">
            PORTFOLIO
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de nos réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              onClick={() => setSelectedVideo(project.video)}
              className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-accent relative overflow-hidden">
                <video
                  src={project.video}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:to-black/50 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-inter text-xs uppercase tracking-wider mb-2 opacity-80">
                  {project.category}
                </p>
                <h3 className="font-bebas text-2xl tracking-wider mb-1">
                  {project.title}
                </h3>
                <p className="font-inter text-sm opacity-90">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
