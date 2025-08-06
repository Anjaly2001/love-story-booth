import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Church } from "lucide-react";
import weddingHall from "@/assets/wedding-hall.jpg";
import weddingBackground from "@/assets/wedding-background.jpg";

const WeddingVenue = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${weddingBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our Sacred Venue
          </h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            Where our love story becomes forever
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={weddingHall} 
                  alt="Decorated Wedding Hall" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Overlay with venue details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Church className="w-8 h-8 text-white" />
                    <h3 className="font-serif text-3xl font-bold">St. Mary's Cathedral</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Ceremony Details
                      </h4>
                      <p className="text-white/90">
                        A beautiful Gothic cathedral with stunning stained glass windows, 
                        ornate decorations, and seating for 200 guests.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Reception Hall
                      </h4>
                      <p className="text-white/90">
                        Elegant ballroom with crystal chandeliers, romantic lighting, 
                        and space for dining and dancing under the stars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingVenue;