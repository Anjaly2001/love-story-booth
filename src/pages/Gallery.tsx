import { useState } from "react";
import { Download, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dummy wedding photos data
  const weddingPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      alt: "Wedding ceremony moment",
      category: "ceremony"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
      alt: "Bride and groom portrait",
      category: "portraits"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      alt: "Wedding rings exchange",
      category: "ceremony"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      alt: "Reception celebration",
      category: "reception"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1594736797933-d0981ba4ba82?w=800&h=600&fit=crop",
      alt: "Family group photo",
      category: "family"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop",
      alt: "Wedding cake cutting",
      category: "reception"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop",
      alt: "First dance",
      category: "reception"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
      alt: "Bridal preparation",
      category: "preparation"
    }
  ];

  const handleDownload = (imageUrl: string, imageName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `wedding-photo-${imageName}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
              Our Wedding Gallery
            </h1>
            <p className="text-muted-foreground">
              Capturing our most precious moments
            </p>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {weddingPhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 shadow-elegant animate-fade-in hover:shadow-heart-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedImage(photo.url)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(photo.url, photo.alt);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Download All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="gap-2 bg-romantic-gradient hover:shadow-heart-glow animate-romantic-pulse"
            onClick={() => {
              weddingPhotos.forEach((photo, index) => {
                setTimeout(() => handleDownload(photo.url, `${photo.category}-${photo.id}`), index * 200);
              });
            }}
          >
            <Download className="w-5 h-5" />
            Download All Photos
            <Heart className="w-5 h-5 text-accent" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-fade-in">
            <img
              src={selectedImage}
              alt="Selected wedding photo"
              className="max-w-full max-h-full object-contain rounded-lg shadow-elegant"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 gap-2"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(selectedImage, 'wedding-photo');
              }}
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;