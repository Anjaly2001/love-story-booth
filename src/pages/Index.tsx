import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";

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
      
      <PhotoGallery />
    </div>
  );
};

export default Index;