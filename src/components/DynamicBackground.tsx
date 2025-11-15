import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax offsets
  const layer1Offset = scrollY * 0.3;
  const layer2Offset = scrollY * 0.5;
  const layer3Offset = scrollY * 0.7;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        animate={{
          backgroundPosition: [`0% 0%`, `100% 100%`],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      {/* Floating circles - Layer 1 (slowest) */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        style={{
          transform: `translateY(${layer1Offset}px)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        style={{
          transform: `translateY(${layer1Offset}px)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating circles - Layer 2 (medium speed) */}
      <motion.div
        className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-2xl"
        style={{
          transform: `translateY(-${layer2Offset}px)`,
        }}
        animate={{
          scale: [1, 1.4, 1],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-primary/8 blur-2xl"
        style={{
          transform: `translateY(${layer2Offset}px)`,
        }}
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating shapes - Layer 3 (fastest) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${(i * 12) + 10}%`,
            top: `${(i * 8) + 5}%`,
            transform: `translateY(${layer3Offset}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Road-like animated lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{
            left: `${(i * 20) + 10}%`,
            height: "200px",
            transform: `translateY(${layer2Offset * 1.5}px)`,
          }}
          animate={{
            y: [-200, 800],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
    </div>
  );
};

export default DynamicBackground;
