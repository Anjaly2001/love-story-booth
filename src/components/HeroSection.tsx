import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-rings.jpg";

interface HeroSectionProps {
  brideName: string;
  groomName: string;
  weddingDate?: string;
  isEngaged?: boolean;
}

const HeroSection = ({ brideName, groomName, weddingDate, isEngaged = false }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-romantic-gradient overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-primary/20 w-6 h-6 animate-float" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-32 right-20 text-accent/30 w-4 h-4 animate-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-32 left-20 text-love-pink/40 w-5 h-5 animate-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-20 right-16 text-primary/25 w-7 h-7 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={heroImage} 
              alt="Wedding rings" 
              className="mx-auto rounded-2xl shadow-elegant max-w-md w-full animate-romantic-pulse"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary">{brideName}</span>
            <Heart className="inline-block mx-4 text-accent animate-heart-beat w-12 h-12 md:w-16 md:h-16" />
            <span className="text-primary">{groomName}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-sans animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {isEngaged ? "Our Love Story Continues..." : "Forever Begins Here"}
          </p>

          {/* Wedding Date */}
          {weddingDate && (
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg text-muted-foreground mb-2">
                {isEngaged ? "Getting married on" : "Married on"}
              </p>
              <p className="font-serif text-3xl md:text-4xl text-accent font-semibold">
                {weddingDate}
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
              View Our Gallery
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;