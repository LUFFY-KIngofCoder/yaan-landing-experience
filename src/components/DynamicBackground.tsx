import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine current section based on scroll position
      const windowHeight = window.innerHeight;
      const section = Math.floor(window.scrollY / windowHeight);
      setCurrentSection(Math.min(section, 3)); // Max 4 sections (0-3)
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Calculate parallax offsets
  const layer1Offset = scrollY * 0.3;
  const layer2Offset = scrollY * 0.5;
  const layer3Offset = scrollY * 0.7;
  
  // Mouse parallax effect
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

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

      {/* Floating circles - Layer 1 (slowest) with mouse interaction */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl transition-colors duration-1000"
        style={{
          transform: `translateY(${layer1Offset}px) translateX(${mouseParallaxX * 2}px) translateY(${mouseParallaxY * 2}px)`,
          backgroundColor: currentTheme.primary,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
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
          transform: `translateY(${layer1Offset}px) translateX(${-mouseParallaxX * 2}px) translateY(${-mouseParallaxY * 2}px)`,
          backgroundColor: currentTheme.secondary,
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating circles - Layer 2 (medium speed) with mouse interaction */}
      <motion.div
        className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full blur-2xl transition-colors duration-1000"
        style={{
          transform: `translateY(-${layer2Offset}px) translateX(${mouseParallaxX * 3}px) translateY(${mouseParallaxY * 3}px)`,
          backgroundColor: currentTheme.accent,
        }}
        animate={{
          scale: [1, 1.5, 1],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full blur-2xl transition-colors duration-1000"
        style={{
          transform: `translateY(${layer2Offset}px) translateX(${-mouseParallaxX * 3}px) translateY(${-mouseParallaxY * 3}px)`,
          backgroundColor: currentTheme.primary,
        }}
        animate={{
          scale: [1, 1.35, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional floating shapes */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl transition-colors duration-1000"
        style={{
          transform: `translateY(${layer1Offset * 0.8}px) translateX(${mouseParallaxX * 4}px) translateY(${mouseParallaxY * 4}px)`,
          backgroundColor: currentTheme.secondary,
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles - Layer 3 (fastest) - More particles with mouse interaction */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full transition-colors duration-1000"
          style={{
            left: `${(i * 5) + 5}%`,
            top: `${(i * 4) + 5}%`,
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            transform: `translateY(${layer3Offset}px) translateX(${mouseParallaxX * (5 + i % 3)}px) translateY(${mouseParallaxY * (5 + i % 3)}px)`,
            backgroundColor: i % 3 === 0 ? currentTheme.primary : i % 3 === 1 ? currentTheme.secondary : currentTheme.accent,
          }}
          animate={{
            y: [0, -40 - (i % 3) * 10, 0],
            x: [0, 30 - (i % 2) * 60, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + (i * 0.3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Interactive cursor followers */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`cursor-${i}`}
          className="absolute w-8 h-8 rounded-full blur-xl transition-colors duration-1000"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            backgroundColor: currentTheme.accent,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Road-like animated lines - Faster */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-1 transition-colors duration-1000"
          style={{
            left: `${(i * 12) + 8}%`,
            height: "250px",
            transform: `translateY(${layer2Offset * 1.5}px)`,
            background: `linear-gradient(to bottom, transparent, ${currentTheme.primary.replace('0.12', '0.3')}, transparent)`,
          }}
          animate={{
            y: [-250, 1000],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Diagonal animated lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute h-1 w-32 transition-colors duration-1000"
          style={{
            left: `${(i * 15) + 5}%`,
            top: `${(i * 12) + 10}%`,
            transform: `rotate(45deg) translateX(${mouseParallaxX}px)`,
            background: `linear-gradient(to right, transparent, ${currentTheme.accent.replace('0.06', '0.4')}, transparent)`,
          }}
          animate={{
            x: [-100, 800],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
    </div>
  );
};

export default DynamicBackground;
