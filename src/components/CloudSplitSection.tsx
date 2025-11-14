import { useState } from "react";
import { motion } from "framer-motion";
import CloudSection from "./CloudSection";

const CloudSplitSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const homeCareServices = [
    {
      title: "Personal Care",
      description: "Compassionate assistance with daily living activities",
      image: "https://via.placeholder.com/100?text=Care",
    },
    {
      title: "Medical Support",
      description: "Professional healthcare services at your home",
      image: "https://via.placeholder.com/100?text=Medical",
    },
    {
      title: "Companionship",
      description: "Friendly companionship and emotional support",
      image: "https://via.placeholder.com/100?text=Companion",
    },
    {
      title: "Housekeeping",
      description: "Light housekeeping and home maintenance",
      image: "https://via.placeholder.com/100?text=House",
    },
    {
      title: "Meal Preparation",
      description: "Nutritious meal planning and preparation",
      image: "https://via.placeholder.com/100?text=Meal",
    },
  ];

  const transportServices = [
    {
      title: "Cab Rides",
      description: "Quick and convenient cab rides for daily commute",
      image: "https://via.placeholder.com/100?text=Cab",
    },
    {
      title: "Cab Rental",
      description: "Rent a cab for hours or days",
      image: "https://via.placeholder.com/100?text=Rental",
    },
    {
      title: "E-Rickshaw",
      description: "Eco-friendly electric rickshaw rides",
      image: "https://via.placeholder.com/100?text=E-Rick",
    },
    {
      title: "Wedding Cars",
      description: "Luxury wedding cars and fleet services",
      image: "https://via.placeholder.com/100?text=Wedding",
    },
    {
      title: "Truck Rental",
      description: "Commercial truck rental for goods transport",
      image: "https://via.placeholder.com/100?text=Truck",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        {/* Mobile: Stacked Layout */}
        <div className="flex flex-col md:hidden gap-6">
          <CloudSection
            title="Home Care"
            description="Professional care services for your loved ones at home"
            services={homeCareServices}
            linkTo="/home-care"
            bgColor="bg-cloud-home"
            hoverColor="hover:bg-cloud-home/90"
            isExpanded={expandedSection === "home"}
            onHover={() => setExpandedSection(expandedSection === "home" ? null : "home")}
            onLeave={() => {}}
          />
          <CloudSection
            title="Transport"
            description="Reliable transportation services for all your needs"
            services={transportServices}
            linkTo="/transport"
            bgColor="bg-cloud-transport"
            hoverColor="hover:bg-cloud-transport/90"
            isExpanded={expandedSection === "transport"}
            onHover={() => setExpandedSection(expandedSection === "transport" ? null : "transport")}
            onLeave={() => {}}
          />
        </div>

        {/* Desktop: Side-by-side Layout */}
        <div className="hidden md:flex gap-6 h-[700px]">
          <motion.div
            className="flex-1"
            animate={{ flex: expandedSection === "home" ? 4 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <CloudSection
              title="Home Care"
              description="Professional care services for your loved ones at home"
              services={homeCareServices}
              linkTo="/home-care"
              bgColor="bg-cloud-home"
              hoverColor="hover:bg-cloud-home/90"
              isExpanded={expandedSection === "home"}
              onHover={() => setExpandedSection("home")}
              onLeave={() => setExpandedSection(null)}
            />
          </motion.div>
          <motion.div
            className="flex-1"
            animate={{ flex: expandedSection === "transport" ? 4 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <CloudSection
              title="Transport"
              description="Reliable transportation services for all your needs"
              services={transportServices}
              linkTo="/transport"
              bgColor="bg-cloud-transport"
              hoverColor="hover:bg-cloud-transport/90"
              isExpanded={expandedSection === "transport"}
              onHover={() => setExpandedSection("transport")}
              onLeave={() => setExpandedSection(null)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudSplitSection;

