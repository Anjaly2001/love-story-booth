import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Heart, Camera, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: "ceremony" | "reception" | "engagement" | "couple" | "family";
  isGroupPhoto?: boolean;
}

// Sample photos - in real app, these would come from props or API
const samplePhotos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500",
    alt: "Wedding ceremony",
    category: "ceremony"
  },
  {
    id: "2", 
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
    alt: "Couple portrait",
    category: "couple"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500", 
    alt: "Reception celebration",
    category: "reception",
    isGroupPhoto: true
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500",
    alt: "Family photo",
    category: "family",
    isGroupPhoto: true
  }
];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { toast } = useToast();

  const categories = [
    { value: "all", label: "All Photos", icon: Camera },
    { value: "ceremony", label: "Ceremony", icon: Heart },
    { value: "couple", label: "Couple", icon: Heart },
    { value: "reception", label: "Reception", icon: Users },
    { value: "family", label: "Family", icon: Users }
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === selectedCategory);

  const handleDownload = async (photo: Photo) => {
    try {
      const response = await fetch(photo.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `wedding-photo-${photo.id}.jpg`;
      a.click();
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Download Started",
        description: "Your photo is being downloaded!",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Sorry, there was an error downloading the photo.",
        variant: "destructive"
      });
    }
  };

  const handleDownloadAll = () => {
    filteredPhotos.forEach((photo, index) => {
      setTimeout(() => handleDownload(photo), index * 500);
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Camera className="mx-auto text-primary w-12 h-12 mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Beautiful Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the magic of our special day through these precious memories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Download All Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={handleDownloadAll}
            variant="outline" 
            className="border-accent text-accent hover:bg-accent/10"
          >
            <Download className="w-4 h-4 mr-2" />
            Download All ({filteredPhotos.length} photos)
          </Button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="group overflow-hidden bg-card border-primary/10 shadow-elegant hover:shadow-heart-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => handleDownload(photo)}
                    variant="secondary"
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>

                {/* Group photo badge */}
                {photo.isGroupPhoto && (
                  <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                    <Users className="w-3 h-3 mr-1" />
                    Group
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <p className="text-sm text-muted-foreground capitalize">
                  {photo.category} • {photo.alt}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <Camera className="mx-auto text-muted-foreground w-12 h-12 mb-4" />
            <p className="text-muted-foreground">No photos found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;