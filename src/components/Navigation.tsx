import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Image, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/our-story", label: "Our Story", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <Card className="px-6 py-3 bg-card/90 backdrop-blur-sm border-primary/20 shadow-elegant">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-accent animate-heart-beat" />
              <span className="font-serif text-xl font-bold text-primary">LoveCapsule</span>
            </div>
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={`gap-2 ${
                      isActive(item.path) 
                        ? "bg-romantic-gradient text-white shadow-heart-glow" 
                        : "hover:bg-secondary/80"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card/90 backdrop-blur-sm border-primary/20"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {isOpen && (
          <Card className="absolute top-12 right-0 w-48 p-4 bg-card/95 backdrop-blur-sm border-primary/20 shadow-elegant animate-fade-in">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <Heart className="w-5 h-5 text-accent animate-heart-beat" />
              <span className="font-serif font-bold text-primary">LoveCapsule</span>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start gap-2 ${
                      isActive(item.path) 
                        ? "bg-romantic-gradient text-white" 
                        : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </Card>
        )}
      </nav>
    </>
  );
};

export default Navigation;