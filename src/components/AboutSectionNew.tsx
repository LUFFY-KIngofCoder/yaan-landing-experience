import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSectionNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-4 md:px-8 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About YANN
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            YANN is dedicated to providing exceptional home care and transportation
            services that enhance the quality of life for individuals and families.
            We connect you with verified, professional caregivers and drivers who
            are committed to delivering compassionate, reliable service every day.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
            Our mission is to make quality care and transportation accessible,
            affordable, and trustworthy. With YANN, you can rest assured that your
            loved ones are in good hands.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionNew;

