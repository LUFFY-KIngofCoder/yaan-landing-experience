import { Card } from "@/components/ui/card";
import { Heart, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every client receives personalized attention with empathy and respect",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous standards ensure the wellbeing of everyone we serve",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building lasting relationships within the communities we serve",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          About YAAN
        </h2>
        <p className="text-center text-lg text-foreground mb-12 max-w-3xl mx-auto">
          YAAN is dedicated to enhancing quality of life through exceptional home care
          and reliable transport services. With years of experience and a passionate
          team, we provide peace of mind to families and independence to those we serve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-lift border-primary/20"
            >
              <value.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
