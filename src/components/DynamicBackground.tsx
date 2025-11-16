import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);
  
  // Throttle refs
  const lastScrollTime = useRef(0);
  const lastMouseTime = useRef(0);
  const throttleDelay = 50; // 50ms throttle for performance

  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < throttleDelay) return;
    lastScrollTime.current = now;

    setScrollY(window.scrollY);
    
    // Determine current section based on scroll position
    const windowHeight = window.innerHeight;
    const section = Math.floor(window.scrollY / windowHeight);
    setCurrentSection(Math.min(section, 3)); // Max 4 sections (0-3)
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastMouseTime.current < throttleDelay) return;
    lastMouseTime.current = now;

    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  // Calculate parallax offsets (reduced for better performance)
  const layer1Offset = scrollY * 0.2;
  const layer2Offset = scrollY * 0.3;
  
  // Mouse parallax effect (reduced intensity for smoother performance)
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

  // Section-based color themes
  const themes = [
    {
      primary: "rgba(0, 102, 255, 0.12)", // Blue - Hero
      secondary: "rgba(255, 102, 0, 0.08)", // Orange
      accent: "rgba(0, 102, 255, 0.06)",
    },
    {
      primary: "rgba(255, 102, 0, 0.12)", // Orange - Services
      secondary: "rgba(0, 102, 255, 0.08)", // Blue
      accent: "rgba(255, 153, 0, 0.06)",
    },
    {
      primary: "rgba(34, 197, 94, 0.10)", // Green - Features/Stats
      secondary: "rgba(0, 102, 255, 0.08)", // Blue
      accent: "rgba(34, 197, 94, 0.05)",
    },
    {
      primary: "rgba(168, 85, 247, 0.10)", // Purple - Testimonials
      secondary: "rgba(0, 102, 255, 0.08)", // Blue
      accent: "rgba(168, 85, 247, 0.06)",
    },
  ];
  
  const currentTheme = themes[currentSection] || themes[0];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient background with section-based colors */}
      <motion.div
        className="absolute inset-0"
        style={{ willChange: "background" }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 30%, ${currentTheme.primary}, transparent 50%), 
             radial-gradient(circle at 80% 70%, ${currentTheme.secondary}, transparent 50%),
             radial-gradient(circle at 50% 50%, ${currentTheme.accent}, transparent 70%)`,
            `radial-gradient(circle at 80% 30%, ${currentTheme.primary}, transparent 50%), 
             radial-gradient(circle at 20% 70%, ${currentTheme.secondary}, transparent 50%),
             radial-gradient(circle at 50% 50%, ${currentTheme.accent}, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Floating circles - Layer 1 (optimized) */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl transition-colors duration-1000"
        style={{
          transform: `translate3d(${mouseParallaxX * 2}px, ${layer1Offset + mouseParallaxY * 2}px, 0)`,
          backgroundColor: currentTheme.primary,
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl transition-colors duration-1000"
        style={{
          transform: `translate3d(${-mouseParallaxX * 2}px, ${layer1Offset - mouseParallaxY * 2}px, 0)`,
          backgroundColor: currentTheme.secondary,
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full blur-2xl transition-colors duration-1000"
        style={{
          transform: `translate3d(${mouseParallaxX * 2}px, ${-layer2Offset + mouseParallaxY * 2}px, 0)`,
          backgroundColor: currentTheme.accent,
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles - Optimized (reduced from 20 to 6) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full transition-colors duration-1000"
          style={{
            left: `${(i * 15) + 10}%`,
            top: `${(i * 12) + 10}%`,
            width: `${6 + (i % 2) * 2}px`,
            height: `${6 + (i % 2) * 2}px`,
            transform: `translate3d(${mouseParallaxX * (3 + i)}px, ${layer2Offset + mouseParallaxY * (3 + i)}px, 0)`,
            backgroundColor: i % 2 === 0 ? currentTheme.primary : currentTheme.secondary,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}


      {/* Road-like animated lines - Optimized (reduced from 8 to 4) */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-1 transition-colors duration-1000"
          style={{
            left: `${(i * 25) + 12}%`,
            height: "200px",
            transform: `translate3d(0, ${layer2Offset}px, 0)`,
            background: `linear-gradient(to bottom, transparent, ${currentTheme.primary.replace('0.12', '0.25')}, transparent)`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [-200, 1000],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Diagonal animated lines - Optimized (reduced from 6 to 3) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute h-1 w-32 transition-colors duration-1000"
          style={{
            left: `${(i * 30) + 10}%`,
            top: `${(i * 20) + 15}%`,
            transform: `rotate(45deg) translate3d(${mouseParallaxX}px, 0, 0)`,
            background: `linear-gradient(to right, transparent, ${currentTheme.accent.replace('0.06', '0.35')}, transparent)`,
            willChange: "transform, opacity",
          }}
          animate={{
            x: [-100, 800],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
    </div>
  );
};

export default DynamicBackground;
