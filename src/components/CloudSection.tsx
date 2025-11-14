import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

interface CloudSectionProps {
  title: string;
  description: string;
  services: ServiceCard[];
  linkTo: string;
  bgColor: string;
  hoverColor: string;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const CloudSection = ({
  title,
  description,
  services,
  linkTo,
  bgColor,
  hoverColor,
  isExpanded,
  onHover,
  onLeave,
}: CloudSectionProps) => {
  return (
    <motion.div
      className={`relative p-6 md:p-12 overflow-hidden cursor-pointer ${bgColor} ${hoverColor} h-full`}
      style={{
        borderRadius: "60px 40px 80px 50px / 50px 80px 40px 60px",
        boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.1), inset 0 0 100px rgba(255, 255, 255, 0.1)",
        willChange: "transform",
      }}
      initial={{ height: "300px" }}
      animate={{ 
        height: typeof window !== 'undefined' && window.innerWidth < 768 
          ? (isExpanded ? "600px" : "300px")
          : "100%"
      }}
      transition={{ 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onTap={() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          onHover();
        }
      }}
      whileHover={{ 
        scale: typeof window !== 'undefined' && window.innerWidth >= 768 ? 1.01 : 1 
      }}
    >
      {/* Optimized Cloud SVG Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden"
        style={{ willChange: "opacity" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          style={{ transform: "translateZ(0)" }}
        >
          <path
            d="M0,300 Q150,200 300,250 T600,250 Q700,200 800,250 L800,600 L0,600 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <Link to={linkTo} className="block h-full">
        <div className="relative z-10 h-full flex flex-col">
          {/* Header - Centered when not expanded, top when expanded */}
          <motion.div
            className={`flex flex-col ${
              isExpanded 
                ? 'mb-6 items-start' 
                : 'flex-1 justify-center items-center'
            }`}
            style={{ willChange: "transform" }}
            animate={{
              opacity: isExpanded ? 1 : 0.95,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h2 
              className={`font-bold text-foreground mb-3 ${
                isExpanded 
                  ? 'text-3xl md:text-4xl text-left' 
                  : 'text-4xl md:text-6xl text-center'
              }`}
              style={{ willChange: "transform" }}
              animate={{
                scale: isExpanded ? 1 : 1.1,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className={`text-muted-foreground max-w-md ${
                isExpanded 
                  ? 'text-base md:text-lg text-left block' 
                  : 'text-sm md:text-base text-center hidden'
              }`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Services Grid - Bubble Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={`flex-1 ${isExpanded ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6' : 'hidden'} mt-4 md:mt-8`}
            style={{ willChange: "opacity" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  scale: isExpanded ? 1 : 0.8,
                }}
                transition={{ 
                  duration: 0.25, 
                  delay: index * 0.05,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex flex-col items-center"
                style={{ willChange: "transform" }}
              >
                {/* Bubble Card */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-3 hover:border-primary/60 group cursor-pointer">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-foreground text-center leading-tight group-hover:text-primary transition-colors px-1">
                    {service.title}
                  </h3>
                  
                  {/* Description tooltip on hover */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-48 p-3 bg-foreground text-background text-xs rounded-lg shadow-xl pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-foreground"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-primary font-semibold"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CloudSection;

