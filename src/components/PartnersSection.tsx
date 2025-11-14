import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const partners = [
    { name: "TechCorp", logo: "https://via.placeholder.com/150x80?text=TechCorp" },
    { name: "HealthPlus", logo: "https://via.placeholder.com/150x80?text=HealthPlus" },
    { name: "CareGroup", logo: "https://via.placeholder.com/150x80?text=CareGroup" },
    { name: "TransportHub", logo: "https://via.placeholder.com/150x80?text=TransportHub" },
    { name: "ServicePro", logo: "https://via.placeholder.com/150x80?text=ServicePro" },
    { name: "QualityCare", logo: "https://via.placeholder.com/150x80?text=QualityCare" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Companies Using Our Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across the country
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto max-h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

