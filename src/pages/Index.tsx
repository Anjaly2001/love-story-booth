import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image, BookOpen, Heart, Calendar } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import WeddingInvitation from "@/components/WeddingInvitation";
import WeddingVenue from "@/components/WeddingVenue";
import SaveTheDate from "@/components/SaveTheDate";
import WeddingLocationMap from "@/components/WeddingLocationMap";
import weddingBackground from "@/assets/wedding-background.jpg";

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
      
      {/* Wedding Invitation */}
      <WeddingInvitation />

      {/* Save The Date */}
      <SaveTheDate />

      {/* Wedding Venue */}
      <WeddingVenue />

      {/* Wedding Location Map */}
      <WeddingLocationMap />
      
      {/* Quick Navigation Cards */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${weddingBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Explore Our Journey
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
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