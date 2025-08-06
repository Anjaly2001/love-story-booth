import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import weddingInvitation from "@/assets/wedding-invitation.jpg";
import weddingBackground from "@/assets/wedding-background.jpg";

const WeddingInvitation = () => {
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our Wedding Invitation
          </h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            You are cordially invited to celebrate our union
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden shadow-elegant bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center relative">
                {/* Decorative stars */}
                <Star className="absolute top-0 left-4 w-4 h-4 text-accent/40 animate-pulse" />
                <Star className="absolute top-2 right-6 w-3 h-3 text-primary/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
                
                <img 
                  src={weddingInvitation} 
                  alt="Wedding Invitation" 
                  className="mx-auto rounded-xl shadow-heart-glow max-w-full h-auto mb-6"
                />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-accent animate-heart-beat" />
                    <p className="font-serif text-lg text-muted-foreground italic">
                      "Two hearts, one love, forever united"
                    </p>
                    <Heart className="w-4 h-4 text-accent animate-heart-beat" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Together with our families, we invite you to share in our joy as we exchange vows 
                      and begin our journey as husband and wife.
                    </p>
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

export default WeddingInvitation;