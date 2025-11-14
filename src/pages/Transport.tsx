import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Car, Calendar, Shield, MapPin } from "lucide-react";

const Transport = () => {
  const services = [
    {
      icon: Car,
      title: "Medical Transport",
      description: "Safe, reliable transportation to and from medical appointments",
      features: ["Doctor visits", "Therapy sessions", "Specialist appointments", "Hospital visits"],
    },
    {
      icon: Calendar,
      title: "Scheduled Rides",
      description: "Pre-booked transportation for regular appointments and activities",
      features: ["Recurring bookings", "Advance scheduling", "Flexible timing", "Route planning"],
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Professional drivers trained in safe passenger transport and assistance",
      features: ["Licensed drivers", "Vehicle inspections", "Insurance coverage", "Support assistance"],
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Serving the entire region with door-to-door service",
      features: ["Local trips", "Regional coverage", "Airport transfers", "Special events"],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cloud-transport to-background py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Transport Services
            </h1>
            <p className="text-xl text-foreground max-w-3xl">
              Reliable, comfortable transportation services designed to keep you connected 
              to your community, healthcare, and the activities you love.
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
              Book Your Ride Today
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Schedule reliable transportation for your next appointment or outing
            </p>
            <Button size="lg" className="text-lg px-8">
              Schedule Transport
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Transport;
