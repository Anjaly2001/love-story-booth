import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";

interface CountdownTimerProps {
  weddingDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ weddingDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const wedding = new Date(weddingDate).getTime();
      const now = new Date().getTime();
      const difference = wedding - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsWeddingDay(false);
      } else {
        setIsWeddingDay(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  if (isWeddingDay) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Heart className="mx-auto text-[#6F4E37] w-16 h-16 mb-6 animate-heart-beat" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
              It's Our Wedding Day! 🎉
            </h2>
            <p className="text-lg text-[#6F4E37]/80">
              The wait is over - today we become one!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Calendar className="mx-auto text-[#6F4E37] w-12 h-12 mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4">
            Counting Down to Forever
          </h2>
          <p className="text-lg text-[#6F4E37]/80 max-w-2xl mx-auto">
            Every second brings us closer to our perfect day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item, index) => (
            <Card 
              key={item.label} 
              className="p-6 text-center bg-white border border-[#6F4E37]/20 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-2 font-serif">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-[#6F4E37]/70 font-medium uppercase tracking-wider">
                {item.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Heart className="inline-block text-[#6F4E37] w-8 h-8 animate-heart-beat" />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
