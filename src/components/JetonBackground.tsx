import { useEffect, useRef } from "react";

const JetonBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateBackground = () => {
      const scrollY = window.scrollY;
      
      if (containerRef.current) {
        const translateY = scrollY * 0.2;
        containerRef.current.style.transform = `translateY(${translateY}px)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafIdRef.current = requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    updateBackground();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50/30" />
      
      {/* Animated gradient layers */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 20% 30%, hsl(212 100% 50% / 0.15) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 80% 70%, hsl(212 100% 50% / 0.12) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Subtle floating particles - minimal for performance */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => {
          const size = 3 + Math.random() * 2;
          const left = 10 + Math.random() * 80;
          const top = 10 + Math.random() * 80;
          const duration = 8 + Math.random() * 4;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#0066FF] opacity-20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animation: `floatParticle ${duration}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JetonBackground;

