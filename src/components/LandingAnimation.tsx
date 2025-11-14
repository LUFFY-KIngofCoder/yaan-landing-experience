import { useState, useEffect } from "react";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (!isSkipped) {
      // Animation duration is 4 seconds
      const timer = setTimeout(() => {
        onComplete();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center ${
        isSkipped ? "opacity-0" : ""
      }`}
      style={{
        animation: isSkipped ? "fadeOut 0.3s ease-out" : "none",
      }}
    >
      {/* Skip Button */}
      <Button
        onClick={handleSkip}
        variant="outline"
        className="absolute top-8 right-8 z-10"
      >
        Skip
      </Button>

      {/* YAAN Logo */}
      <div
        className="absolute text-8xl font-bold text-primary tracking-wider"
        style={{
          animation: isSkipped ? "none" : "logoFloat 4s ease-in-out forwards",
        }}
      >
        YAAN
      </div>

      {/* Animated Plane */}
      <div
        className="absolute text-primary"
        style={{
          animation: isSkipped ? "none" : "flyPlane 4s ease-in-out forwards",
        }}
      >
        <Plane size={80} className="rotate-12" />
      </div>
    </div>
  );
};

export default LandingAnimation;
