import { useState } from "react";
import CloudContainer from "./CloudContainer";

const HeroSection = () => {
  const [hoveredContainer, setHoveredContainer] = useState<string | null>(null);

  const homeCareServices = [
    {
      title: "Personal Care",
      description: "Assistance with daily activities and personal hygiene",
      icon: "🏠",
    },
    {
      title: "Medical Support",
      description: "Professional healthcare services at home",
      icon: "⚕️",
    },
    {
      title: "Companionship",
      description: "Social interaction and emotional support",
      icon: "💝",
    },
    {
      title: "Housekeeping",
      description: "Light cleaning and household maintenance",
      icon: "🧹",
    },
    {
      title: "Meal Preparation",
      description: "Nutritious meals tailored to dietary needs",
      icon: "🍽️",
    },
  ];

  const transportServices = [
    {
      title: "Medical Appointments",
      description: "Safe transport to healthcare facilities",
      icon: "🏥",
    },
    {
      title: "Shopping Trips",
      description: "Assistance with grocery and retail errands",
      icon: "🛒",
    },
    {
      title: "Social Events",
      description: "Transportation to community activities",
      icon: "🎉",
    },
    {
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services",
      icon: "✈️",
    },
  ];

  return (
    <section className="min-h-[600px] py-20 px-4 md:px-8 bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <CloudContainer
            title="Home Care"
            type="home-care"
            services={homeCareServices}
            link="/home-care"
            isExpanded={hoveredContainer === "home-care"}
            onHover={() => setHoveredContainer("home-care")}
            onLeave={() => setHoveredContainer(null)}
          />
          <CloudContainer
            title="Transport"
            type="transport"
            services={transportServices}
            link="/transport"
            isExpanded={hoveredContainer === "transport"}
            onHover={() => setHoveredContainer("transport")}
            onLeave={() => setHoveredContainer(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
