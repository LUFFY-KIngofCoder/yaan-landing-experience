import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CarTaxiFront, Car, Truck, Package, Users } from "lucide-react";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesModal = ({ isOpen, onClose }: ServicesModalProps) => {
  const services = [
    {
      icon: CarTaxiFront,
      title: "Cab Ride",
      description: "Quick and convenient cab rides for your daily commute",
      details: "Professional drivers, clean vehicles, and competitive rates. Available 24/7 for all your transportation needs.",
      features: ["24/7 Availability", "GPS Tracking", "Safe & Secure", "Easy Booking"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Car,
      title: "Cab Rental",
      description: "Rent a cab for hours or days",
      details: "Perfect for business trips, family outings, or extended travel. Flexible rental periods with hourly and daily options.",
      features: ["Hourly Rates", "Daily Packages", "Multiple Vehicle Options", "Professional Chauffeurs"],
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      icon: CarTaxiFront,
      title: "E-Rickshaw",
      description: "Eco-friendly electric rickshaw rides",
      details: "Sustainable transportation solution for short distances. Affordable, environmentally friendly, and perfect for local travel.",
      features: ["Eco-Friendly", "Cost-Effective", "Quick Service", "Local Routes"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Car,
      title: "Wedding Cars",
      description: "Luxury wedding cars and fleet services",
      details: "Make your special day memorable with our premium fleet of luxury vehicles. Decorated cars and experienced drivers.",
      features: ["Luxury Fleet", "Custom Decoration", "Professional Service", "Package Deals"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Truck,
      title: "Truck & Lorry",
      description: "Commercial truck and lorry rental for goods transport",
      details: "Reliable commercial vehicles for all your cargo needs. From small deliveries to large shipments.",
      features: ["Various Sizes", "Experienced Drivers", "Goods Insurance", "Interstate Available"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Users,
      title: "Traveller",
      description: "Comfortable vehicles for group trips",
      details: "Perfect for group travel, tours, and corporate events. Spacious and comfortable seating for 12+ passengers.",
      features: ["Group Travel", "AC Vehicles", "Entertainment Systems", "Tour Packages"],
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      icon: Package,
      title: "Parcel",
      description: "Fast and secure parcel delivery",
      details: "Door-to-door delivery services with real-time tracking. Same-day and express delivery options available.",
      features: ["Same-Day Delivery", "Real-Time Tracking", "Secure Handling", "Express Service"],
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
    },
    {
      icon: Car,
      title: "Shuttle",
      description: "Regular shuttle services",
      details: "Scheduled shuttle services for offices, schools, and residential complexes. Regular and reliable routes.",
      features: ["Fixed Routes", "Daily Service", "Corporate Plans", "Student Packages"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2">
            Our Services
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Comprehensive transportation solutions for all your needs
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesModal;
