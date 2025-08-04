import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image, BookOpen, Heart, Calendar } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  // Sample data - in real app, this would come from database/props
  const coupleData = {
    brideName: "Priya",
    groomName: "Arjun",
    weddingDate: "2024-12-15", // Format: YYYY-MM-DD
    isEngaged: true
  };

  return (
    <div className="min-h-screen">
      <HeroSection 
        brideName={coupleData.brideName}
        groomName={coupleData.groomName}
        weddingDate={coupleData.weddingDate}
        isEngaged={coupleData.isEngaged}
      />
      
      {coupleData.isEngaged && (
        <CountdownTimer weddingDate={coupleData.weddingDate} />
      )}
      
      {/* Quick Navigation Cards */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Explore Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the moments that made our love story complete
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-elegant hover:shadow-heart-glow transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-romantic-gradient flex items-center justify-center group-hover:animate-heart-beat">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Wedding Gallery
                </h3>
                <p className="text-muted-foreground mb-6">
                  Browse through our beautiful wedding photos and download your favorites
                </p>
                <Link to="/gallery">
                  <Button className="gap-2 bg-romantic-gradient hover:shadow-heart-glow">
                    <Image className="w-4 h-4" />
                    View Gallery
                  </Button>
                </Link>
              </div>
            </Card>
            
            <Card className="group p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-elegant hover:shadow-heart-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-romantic-gradient flex items-center justify-center group-hover:animate-heart-beat">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Our Love Story
                </h3>
                <p className="text-muted-foreground mb-6">
                  Read about how we met, fell in love, and decided to spend forever together
                </p>
                <Link to="/our-story">
                  <Button className="gap-2 bg-romantic-gradient hover:shadow-heart-glow">
                    <BookOpen className="w-4 h-4" />
                    Read Story
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;