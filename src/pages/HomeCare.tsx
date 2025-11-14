import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, Clock, Shield, Users } from "lucide-react";

const HomeCare = () => {
  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Assistance with daily activities including bathing, dressing, and grooming",
      features: ["Bathing assistance", "Dressing support", "Grooming care", "Mobility help"],
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock care available for those who need continuous assistance",
      features: ["Day and night care", "Emergency response", "Flexible scheduling", "Peace of mind"],
    },
    {
      icon: Shield,
      title: "Medical Support",
      description: "Professional healthcare services delivered in the comfort of your home",
      features: ["Medication management", "Vital monitoring", "Wound care", "Health coordination"],
    },
    {
      icon: Users,
      title: "Companionship",
      description: "Social interaction and emotional support to enhance quality of life",
      features: ["Conversation", "Activities", "Meal companionship", "Outings"],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cloud-home to-background py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Home Care Services
            </h1>
            <p className="text-xl text-foreground max-w-3xl">
              Compassionate, professional care delivered in the comfort and familiarity of your own home. 
              Our dedicated team is here to support independence and enhance quality of life.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover-lift border-primary/20">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-muted">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your home care needs and how we can help
            </p>
            <Button size="lg" className="text-lg px-8">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeCare;
