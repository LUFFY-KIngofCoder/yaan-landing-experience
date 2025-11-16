import { useState, useEffect } from "react";
import { Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Load SVG as inline to preserve colors
const LogoImage = () => {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch("/images/logo/logo.svg")
      .then((res) => res.text())
      .then((text) => {
        // Replace currentColor with explicit blue color to preserve original
        const modifiedSvg = text
          .replace(/currentColor/gi, "#0066FF")
          .replace(/fill="currentColor"/gi, 'fill="#0066FF"')
          .replace(/stroke="currentColor"/gi, 'stroke="#0066FF"');
        setSvgContent(modifiedSvg);
      })
      .catch(() => {
        // Fallback to img if fetch fails
        setSvgContent("");
      });
  }, []);

  if (svgContent) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{
          width: "300px",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    );
  }

  return (
    <img
      src="/images/logo/logo.svg"
      alt="YAAN Logo"
      style={{
        width: "300px",
        height: "auto",
      }}
    />
  );
};

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (!isSkipped) {
      // Animation duration is 6.5 seconds
      const timer = setTimeout(() => {
        onComplete();
      }, 6500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background transition-opacity duration-700 ${
        isSkipped ? "opacity-0" : ""
      }`}
      style={{
        animation: isSkipped ? "none" : "fadeOutSmooth 6.5s ease-out forwards",
      }}
    >
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          animation: isSkipped ? "none" : "pulseGlow 6.5s ease-in-out infinite",
        }}
      />

      {/* Road Lines Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-20 bg-primary rounded-full"
              style={{
                animation: isSkipped ? "none" : `roadLine 6.5s linear infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: isSkipped ? "none" : `floatParticle ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Skip Button */}
      <Button
        onClick={handleSkip}
        variant="outline"
        className="absolute top-8 right-8 z-10"
      >
        Skip
      </Button>

      {/* YAAN Logo - follows car journey */}
      <div
        className="absolute"
        style={{
          animation: isSkipped ? "none" : "logoJourney 6.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))",
          color: "initial",
          transition: "opacity 0.3s ease-out",
        }}
      >
        <LogoImage />
      </div>

      {/* Animated Car - full journey */}
      <div
        className="absolute text-primary"
        style={{
          animation: isSkipped ? "none" : "carJourney 6.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.4))",
        }}
      >
        <Car size={100} strokeWidth={2.5} />
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={i}
            size={16}
            className="absolute text-primary/40"
            style={{
              animation: isSkipped ? "none" : `sparkle ${2 + Math.random() * 1}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingAnimation;
