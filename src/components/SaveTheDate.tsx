import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import saveTheDate from "@/assets/save-the-date.jpg";
import weddingBackground from "@/assets/wedding-background.jpg";

const SaveTheDate = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = saveTheDate;
    link.download = 'save-the-date.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            Save The Date
          </h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            Mark your calendars for our special day
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-elegant bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="text-center md:text-left space-y-6">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <Calendar className="w-8 h-8 text-primary" />
                      <h3 className="font-serif text-3xl font-bold text-primary">
                        December 15, 2024
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground">
                        Please join us as we celebrate the beginning of our forever
                      </p>
                      
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-4 h-4 text-accent" />
                          <span className="font-semibold">Ceremony</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          4:00 PM at St. Mary's Cathedral
                        </p>
                      </div>
                      
                      <div className="bg-accent/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-4 h-4 text-primary" />
                          <span className="font-semibold">Reception</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          6:00 PM at the Grand Ballroom
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleDownload}
                      variant="outline" 
                      className="w-full md:w-auto border-primary text-primary hover:bg-primary/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Save The Date
                    </Button>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <img 
                    src={saveTheDate} 
                    alt="Save The Date Card" 
                    className="w-full rounded-xl shadow-heart-glow hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;