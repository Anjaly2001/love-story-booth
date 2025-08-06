import { Heart, ArrowLeft, Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OurStory = () => {
  const storyMilestones = [
    {
      id: 1,
      date: "June 15, 2022",
      title: "First Meeting",
      description: "We met at a coffee shop on a rainy evening. Little did we know this would be the beginning of our forever.",
      location: "Café Central, Mumbai",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      date: "September 10, 2022",
      title: "First Date",
      description: "Our first official date was a walk through the botanical gardens, talking for hours under the starlit sky.",
      location: "Lalbagh Botanical Garden",
      icon: Star,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      date: "February 14, 2023",
      title: "Became Official",
      description: "On Valentine's Day, we decided to make it official. The most romantic day became even more special.",
      location: "Marine Drive, Mumbai",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1518621012420-8ab3d29cefb7?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      date: "November 25, 2023",
      title: "The Proposal",
      description: "Under the sunset at our favorite beach, with a ring and a promise of forever, the question was popped!",
      location: "Goa Beach Resort",
      icon: Star,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      date: "December 15, 2024",
      title: "Our Wedding Day",
      description: "The day we've been dreaming of - surrounded by family and friends, we say 'I Do' and begin our new chapter.",
      location: "Grand Palace Hotel",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-12">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
              Our Love Story
            </h1>
            <p className="text-muted-foreground text-lg">
              Every love story is beautiful, but ours is our favorite
            </p>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          {storyMilestones.map((milestone, index) => (
            <div 
              key={milestone.id} 
              className={`flex flex-col md:flex-row gap-8 mb-16 animate-fade-in ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 shadow-elegant">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              </div>

              {/* Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-elegant hover:shadow-heart-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-romantic-gradient flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-primary">
                        {milestone.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {milestone.date}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {milestone.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {milestone.location}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Love Quote */}
        <div className="text-center mt-16 mb-8">
          <Card className="max-w-2xl mx-auto p-8 bg-romantic-gradient text-white shadow-heart-glow animate-romantic-pulse">
            <Heart className="mx-auto w-12 h-12 mb-6 animate-heart-beat" />
            <blockquote className="font-serif text-2xl md:text-3xl font-bold mb-4">
              "In all the world, there is no heart for me like yours. 
              In all the world, there is no love for you like mine."
            </blockquote>
            <p className="text-lg opacity-90">- Maya Angelou</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurStory;