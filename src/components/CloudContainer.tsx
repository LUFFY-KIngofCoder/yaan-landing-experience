import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

interface CloudContainerProps {
  title: string;
  type: "home-care" | "transport";
  services: ServiceCard[];
  link: string;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const CloudContainer = ({
  title,
  type,
  services,
  link,
  isExpanded,
  onHover,
  onLeave,
}: CloudContainerProps) => {
  const bgColor = type === "home-care" ? "bg-cloud-home" : "bg-cloud-transport";

  return (
    <Link
      to={link}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out",
        "border-2 border-primary/20 hover:border-primary/40",
        bgColor,
        isExpanded
          ? "md:w-[85%] md:h-auto"
          : "md:w-[48%] md:h-[500px]",
        "w-full h-[400px]",
        "shadow-lg hover:shadow-2xl"
      )}
      style={{
        clipPath: "ellipse(90% 85% at 50% 50%)",
      }}
    >
      <div className="absolute inset-0 p-8 flex flex-col">
        {/* Title */}
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary mb-8 transition-all duration-300",
            isExpanded ? "text-center" : "text-center"
          )}
        >
          {title}
        </h2>

        {/* Service Cards - Only show when expanded */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 opacity-0 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-background/80 backdrop-blur-sm hover-lift border-primary/20"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        )}

        {/* Prompt text when not expanded */}
        {!isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg text-primary/60 font-medium">
              Hover to explore services
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CloudContainer;
