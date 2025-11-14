import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LandingAnimation from "@/components/LandingAnimation";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  CarTaxiFront,
  Truck,
  Package,
  Users,
  Calendar,
  Shield,
  MapPin,
  CheckCircle2,
  Star,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Transport = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  const services = [
    {
      icon: CarTaxiFront,
      title: "Cab Ride",
      description: "Quick and convenient cab rides for your daily commute. Book instantly and travel comfortably.",
      features: ["Instant booking", "24/7 availability", "GPS tracking", "Cashless payment"],
      price: "Starting at ₹99",
      popular: false,
    },
    {
      icon: Car,
      title: "Cab Rental",
      description: "Rent a cab for hours or days. Perfect for city tours, business trips, and extended travel.",
      features: ["Hourly & daily rates", "Multiple vehicle options", "Driver included", "Flexible packages"],
      price: "Starting at ₹499/day",
      popular: true,
    },
    {
      icon: CarTaxiFront,
      title: "E-Rickshaw",
      description: "Eco-friendly electric rickshaw rides for short distances. Affordable and sustainable transport.",
      features: ["Eco-friendly", "Affordable fares", "Quick service", "City-wide coverage"],
      price: "Starting at ₹29",
      popular: false,
    },
    {
      icon: Car,
      title: "Car Hire for Wedding",
      description: "Luxury wedding cars and fleet services. Make your special day memorable with our premium vehicles.",
      features: ["Luxury vehicles", "Decorated cars", "Fleet packages", "Professional drivers"],
      price: "Starting at ₹2,999",
      popular: false,
    },
    {
      icon: Truck,
      title: "Lorry",
      description: "Heavy-duty lorry services for construction, logistics, and industrial transportation needs.",
      features: ["Multiple tonnage options", "Construction transport", "Logistics support", "Expert drivers"],
      price: "Starting at ₹1,999",
      popular: false,
    },
    {
      icon: Truck,
      title: "Truck",
      description: "Commercial truck rental for goods transportation. Reliable and efficient cargo movement.",
      features: ["Various sizes", "Long distance", "Goods transport", "Timely delivery"],
      price: "Starting at ₹2,499",
      popular: false,
    },
    {
      icon: Users,
      title: "Traveller",
      description: "Comfortable traveller vehicles for group trips. Perfect for family outings and group travel.",
      features: ["12-18 seater", "AC comfort", "Group packages", "Long distance"],
      price: "Starting at ₹1,499",
      popular: false,
    },
    {
      icon: Package,
      title: "Parcel",
      description: "Fast and secure parcel delivery services. Door-to-door delivery for packages of all sizes.",
      features: ["Same-day delivery", "Package tracking", "Secure handling", "Multiple locations"],
      price: "Starting at ₹49",
      popular: false,
    },
    {
      icon: Car,
      title: "Shuttle Service",
      description: "Regular shuttle services for offices, schools, and institutions. Scheduled routes and timings.",
      features: ["Scheduled routes", "Regular service", "Bulk booking", "Corporate packages"],
      price: "Starting at ₹199",
      popular: false,
    },
  ];

  // Cycle through services every 5 seconds (only when auto-rotating)
  useEffect(() => {
    if (!showAnimation && isAutoRotating) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [showAnimation, isAutoRotating, services.length]);

  // Get previous and next service indices for carousel
  const getPreviousIndex = (index: number) => (index - 1 + services.length) % services.length;
  const getNextIndex = (index: number) => (index + 1) % services.length;

  const goToPrevious = () => {
    setIsAutoRotating(false);
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const goToNext = () => {
    setIsAutoRotating(false);
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const howItWorks = [
    {
      step: "01",
      title: "Choose Your Service",
      description: "Select from our wide range of transportation services. From cab rides to truck rentals, we've got you covered.",
      features: [
        "Pick from 9+ service categories",
        "Compare prices and ratings",
        "View vehicle options and availability",
      ],
    },
    {
      step: "02",
      title: "Book & Schedule",
      description: "Pick your preferred date, time, and location. Our flexible scheduling ensures we work around your needs.",
      features: [
        "Instant booking available",
        "Advance scheduling options",
        "Real-time availability",
      ],
    },
    {
      step: "03",
      title: "Vehicle Arrives",
      description: "A verified driver arrives at your location on time, ready to provide safe and comfortable transportation.",
      features: [
        "GPS tracking",
        "Driver verification",
        "On-time guarantee",
      ],
    },
    {
      step: "04",
      title: "Travel & Pay",
      description: "Enjoy your journey while we handle everything. Pay securely through multiple payment options.",
      features: [
        "Cashless payments",
        "Multiple payment methods",
        "Transparent pricing",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Professional",
      location: "Delhi",
      service: "Cab Rental",
      rating: 5,
      text: "YAAN's cab rental service has been exceptional for my business trips. Professional drivers, clean vehicles, and always on time. Highly recommended!",
      initials: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Event Planner",
      location: "Mumbai",
      service: "Car Hire for Wedding",
      rating: 5,
      text: "The wedding car service made our special day perfect! Beautiful decorated cars and professional drivers. Our guests were impressed!",
      initials: "PS",
    },
    {
      name: "Amit Patel",
      role: "Logistics Manager",
      location: "Ahmedabad",
      service: "Truck Rental",
      rating: 5,
      text: "Reliable truck services for our logistics needs. Timely delivery and professional handling. YAAN has become our trusted partner.",
      initials: "AP",
    },
  ];

  return (
    <>
      {showAnimation && <LandingAnimation onComplete={handleAnimationComplete} />}
      <div className={showAnimation ? "invisible" : "visible"}>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cloud-transport to-background py-20 px-4 md:px-8">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Verified & Background Checked Drivers
                    </Badge>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
                    Professional Transport Services
                    <br />
                    <span className="text-foreground">Your Journey, Our Priority</span>
                  </h1>
                  <p className="text-xl text-foreground max-w-3xl mb-8">
                    From quick cab rides to heavy-duty truck rentals, get verified and trained drivers for all your transportation needs. Reliable service, every single time.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-12">
                    <Button size="lg" className="text-lg px-8">
                      Book a Service
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      How It Works
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                      <div className="text-muted-foreground">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-muted-foreground">Verified Drivers</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-muted-foreground">Support</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                      <div className="text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Service Showcase Carousel */}
                <div className="relative h-[600px] flex items-center justify-center overflow-visible">
                  {/* Previous Arrow */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 z-30 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-background hover:border-primary/40"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </Button>

                  <div className="relative w-full max-w-4xl h-full flex items-center px-16">
                    {/* Previous Card (Left) */}
                    <Card 
                      className="absolute w-[280px] h-[500px] p-4 border-primary/20 bg-background/80 backdrop-blur-sm opacity-60 z-10 transition-all duration-500 overflow-hidden"
                      style={{ 
                        left: '50%',
                        transform: 'translateX(calc(-50% - 200px)) scale(0.85)'
                      }}
                    >
                      {(() => {
                        const prevIndex = getPreviousIndex(currentServiceIndex);
                        const PrevIcon = services[prevIndex].icon;
                        return (
                          <div className="h-full flex flex-col overflow-hidden">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 flex-shrink-0">
                              <PrevIcon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2 text-center line-clamp-2 flex-shrink-0">
                              {services[prevIndex].title}
                            </h3>
                            <p className="text-xs text-muted-foreground text-center mb-3 line-clamp-2 flex-shrink-0">
                              {services[prevIndex].description}
                            </p>
                            <div className="text-center flex-shrink-0 mt-auto">
                              <div className="text-base font-bold text-primary">
                                {services[prevIndex].price}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </Card>

                    {/* Current Card (Center) */}
                    <Card 
                      className="absolute w-[320px] h-[550px] p-6 border-primary/40 bg-background/95 backdrop-blur-sm shadow-xl z-20 transition-all duration-500 hover-lift overflow-hidden"
                      style={{ 
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <div 
                        key={currentServiceIndex}
                        className="fade-in h-full flex flex-col overflow-hidden"
                      >
                        <div className="flex items-center justify-between mb-3 flex-shrink-0">
                          <Badge variant="outline" className="animate-pulse text-xs">
                            {currentServiceIndex + 1} of {services.length}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">4.8</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center mb-4 flex-shrink-0">
                          {(() => {
                            const ServiceIcon = services[currentServiceIndex].icon;
                            return (
                              <>
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                  <ServiceIcon className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2 text-center line-clamp-2">
                                  {services[currentServiceIndex].title}
                                </h3>
                                <p className="text-sm text-muted-foreground text-center line-clamp-3 mb-0">
                                  {services[currentServiceIndex].description}
                                </p>
                              </>
                            );
                          })()}
                        </div>
                        <div className="space-y-2 mb-4 flex-1 overflow-y-auto min-h-0">
                          {services[currentServiceIndex].features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-xs leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col items-center pt-3 border-t border-border flex-shrink-0">
                          <div className="mb-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Price</div>
                            <div className="text-xl font-bold text-primary">
                              {services[currentServiceIndex].price}
                            </div>
                          </div>
                          <Button className="w-full text-sm" size="sm">
                            Book Now
                            <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
                        </div>
                      </div>
                    </Card>

                    {/* Next Card (Right) */}
                    <Card 
                      className="absolute w-[280px] h-[500px] p-4 border-primary/20 bg-background/80 backdrop-blur-sm opacity-60 z-10 transition-all duration-500 overflow-hidden"
                      style={{ 
                        left: '50%',
                        transform: 'translateX(calc(-50% + 200px)) scale(0.85)'
                      }}
                    >
                      {(() => {
                        const nextIndex = getNextIndex(currentServiceIndex);
                        const NextIcon = services[nextIndex].icon;
                        return (
                          <div className="h-full flex flex-col overflow-hidden">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 flex-shrink-0">
                              <NextIcon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2 text-center line-clamp-2 flex-shrink-0">
                              {services[nextIndex].title}
                            </h3>
                            <p className="text-xs text-muted-foreground text-center mb-3 line-clamp-2 flex-shrink-0">
                              {services[nextIndex].description}
                            </p>
                            <div className="text-center flex-shrink-0 mt-auto">
                              <div className="text-base font-bold text-primary">
                                {services[nextIndex].price}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </Card>
                  </div>

                  {/* Next Arrow */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 z-30 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-background hover:border-primary/40"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </Button>
                  
                  {/* Service Indicators */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 mt-6">
                    {services.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentServiceIndex
                            ? "w-8 bg-primary"
                            : "w-2 bg-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </section>

          {/* Services Section */}
          <section className="py-20 px-4 md:px-8 bg-background">
          <div className="container mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">POPULAR</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Services tailored for you. From daily commutes to special events, we've got everything you need.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                  <Card
                    key={index}
                    className={`p-6 hover-lift border-primary/20 relative ${
                      service.popular ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        Popular
                      </Badge>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <service.icon className="w-12 h-12 text-primary flex-shrink-0" />
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.8</span>
                        <span className="text-muted-foreground">from 2,500+ reviews</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <Badge variant="outline" className="mb-2">
                        Available Now
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Price</div>
                          <div className="text-lg font-bold text-primary">{service.price}</div>
                        </div>
                        <Button>
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-4 md:px-8 bg-muted">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Getting professional transportation has never been easier. Simple, transparent, and effortless.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, index) => (
                  <Card key={index} className="p-6 hover-lift border-primary/20">
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4 md:px-8 bg-background">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">👥</div>
                  <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">⭐</div>
                  <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">💯</div>
                  <div className="text-3xl font-bold text-foreground mb-2">99%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">🕐</div>
                  <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4 md:px-8 bg-muted">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Loved by Thousands of Customers
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">4.9 out of 5 stars</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 hover-lift border-primary/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {testimonial.service}
                    </Badge>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
          <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
            </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of satisfied customers enjoying hassle-free transportation every day.
            </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 mb-8">
                Book Your First Ride
            </Button>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Us 24/7: +91 7827273057</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>support@yaan.care</span>
                </div>
              </div>
          </div>
        </section>
        <ContactSection />
      </main>
      </div>
    </>
  );
};

export default Transport;
