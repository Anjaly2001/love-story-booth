import { MapPin, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import weddingBackground from "@/assets/wedding-background.jpg";

const WeddingLocationMap = () => {
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
            Wedding Location
          </h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            Join us at this beautiful venue for our special day
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              {/* Map Placeholder */}
              <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    St. Mary's Church
                  </h3>
                  <p className="text-muted-foreground">
                    123 Wedding Street, Love City, LC 12345
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-primary/30 rounded-full animate-ping" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-accent/30 rounded-full animate-pulse" />
              </div>

              {/* Wedding Details */}
              <div className="p-8 bg-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-lg">Wedding Date</h4>
                      <p className="text-muted-foreground">December 15, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-lg">Ceremony Time</h4>
                      <p className="text-muted-foreground">4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Parking is available on-site. The venue is wheelchair accessible.
                    Please arrive 30 minutes early for seating.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingLocationMap;