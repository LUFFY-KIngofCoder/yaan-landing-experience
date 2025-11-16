import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LandingAnimation from "@/components/LandingAnimation";
import Header from "@/components/Header";
import TransportFooter from "@/components/TransportFooter";
import DynamicBackground from "@/components/DynamicBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  CarTaxiFront,
  Truck,
  Package,
  Users,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", duration = 2000, decimals = 0 }: { target: number; suffix?: string; duration?: number; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * target;
      setCount(decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration, decimals]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Transport = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  const services = [
    {
      icon: CarTaxiFront,
      title: "Cab Ride",
      description: "Quick and convenient cab rides for your daily commute",
      color: "bg-blue-500",
    },
    {
      icon: Car,
      title: "Cab Rental",
      description: "Rent a cab for hours or days",
      color: "bg-blue-600",
    },
    {
      icon: CarTaxiFront,
      title: "E-Rickshaw",
      description: "Eco-friendly electric rickshaw rides",
      color: "bg-green-500",
    },
    {
      icon: Car,
      title: "Wedding Cars",
      description: "Luxury wedding cars and fleet services",
      color: "bg-purple-500",
    },
    {
      icon: Truck,
      title: "Truck & Lorry",
      description: "Commercial truck and lorry rental for goods transport",
      color: "bg-orange-500",
    },
    {
      icon: Users,
      title: "Traveller",
      description: "Comfortable vehicles for group trips",
      color: "bg-indigo-500",
    },
    {
      icon: Package,
      title: "Parcel",
      description: "Fast and secure parcel delivery",
      color: "bg-teal-500",
    },
    {
      icon: Car,
      title: "Shuttle",
      description: "Regular shuttle services",
      color: "bg-cyan-500",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "All Locations",
      description: "Service available across multiple cities",
    },
    {
      icon: Clock,
      title: "One App",
      description: "Manage all your transport needs in one place",
    },
    {
      icon: Shield,
      title: "Move your transport",
      description: "Book rides anywhere, effortlessly",
    },
    {
      icon: Zap,
      title: "Fast and safe",
      description: "Fast and safe transactions at your fingertips",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Account",
      description: "Create your account or log in",
      features: [
        "Quick and easy signup",
        "Secure login options",
        "Profile management",
      ],
    },
    {
      number: "02",
      title: "Add",
      description: "Select your service and destination",
      features: [
        "Choose from 9+ services",
        "Set pickup and drop location",
        "Select date and time",
      ],
    },
    {
      number: "03",
      title: "Method",
      description: "Choose payment method",
      features: [
        "Multiple payment options",
        "Cashless transactions",
        "Secure payment gateway",
      ],
    },
    {
      number: "04",
      title: "Review",
      description: "Review your booking details",
      features: [
        "Verify all information",
        "Check pricing",
        "Confirm booking",
      ],
    },
    {
      number: "05",
      title: "Done",
      description: "Confirm and track your ride",
      features: [
        "Instant confirmation",
        "Real-time tracking",
        "Driver details",
      ],
    },
  ];

  const allServices = [
    {
      icon: CarTaxiFront,
      title: "Cab Ride",
      description: "Quick and convenient cab rides for your daily commute. Book instantly and travel comfortably.",
      features: ["Instant booking", "24/7 availability", "GPS tracking", "Cashless payment"],
      price: "Starting at ₹99",
      popular: false,
      color: "bg-blue-500",
    },
    {
      icon: Car,
      title: "Cab Rental",
      description: "Rent a cab for hours or days. Perfect for city tours, business trips, and extended travel.",
      features: ["Hourly & daily rates", "Multiple vehicle options", "Driver included", "Flexible packages"],
      price: "Starting at ₹499/day",
      popular: true,
      color: "bg-blue-600",
    },
    {
      icon: CarTaxiFront,
      title: "E-Rickshaw",
      description: "Eco-friendly electric rickshaw rides for short distances. Affordable and sustainable transport.",
      features: ["Eco-friendly", "Affordable fares", "Quick service", "City-wide coverage"],
      price: "Starting at ₹29",
      popular: false,
      color: "bg-green-500",
    },
    {
      icon: Car,
      title: "Car Hire for Wedding",
      description: "Luxury wedding cars and fleet services. Make your special day memorable with our premium vehicles.",
      features: ["Luxury vehicles", "Decorated cars", "Fleet packages", "Professional drivers"],
      price: "Starting at ₹2,999",
      popular: false,
      color: "bg-purple-500",
    },
    {
      icon: Truck,
      title: "Truck & Lorry",
      description: "Commercial truck and lorry rental for goods transportation. Heavy-duty vehicles for construction, logistics, and industrial needs.",
      features: ["Multiple tonnage options", "Construction transport", "Logistics support", "Long distance", "Timely delivery", "Expert drivers"],
      price: "Starting at ₹1,999",
      popular: false,
      color: "bg-orange-500",
    },
    {
      icon: Users,
      title: "Traveller",
      description: "Comfortable traveller vehicles for group trips. Perfect for family outings and group travel.",
      features: ["12-18 seater", "AC comfort", "Group packages", "Long distance"],
      price: "Starting at ₹1,499",
      popular: false,
      color: "bg-indigo-500",
    },
    {
      icon: Package,
      title: "Parcel",
      description: "Fast and secure parcel delivery services. Door-to-door delivery for packages of all sizes.",
      features: ["Same-day delivery", "Package tracking", "Secure handling", "Multiple locations"],
      price: "Starting at ₹49",
      popular: false,
      color: "bg-teal-500",
    },
    {
      icon: Car,
      title: "Shuttle Service",
      description: "Regular shuttle services for offices, schools, and institutions. Scheduled routes and timings.",
      features: ["Scheduled routes", "Regular service", "Bulk booking", "Corporate packages"],
      price: "Starting at ₹199",
      popular: false,
      color: "bg-cyan-500",
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
      service: "Truck & Lorry",
      rating: 5,
      text: "Reliable truck and lorry services for our logistics needs. Timely delivery and professional handling. YAAN has become our trusted partner.",
      initials: "AP",
    },
  ];

  return (
    <>
      <DynamicBackground />
      {showAnimation && <LandingAnimation onComplete={handleAnimationComplete} />}
      <div className={`transition-opacity duration-700 ${showAnimation ? "opacity-0 invisible" : "opacity-100 visible"}`}>
      <Header />
        <main className="min-h-screen bg-transparent relative z-0">
          {/* Hero Section - Jeton Style */}
          <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                    Verified & Background Checked Drivers
                  </Badge>
                  
                  <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                    <span className="text-[#0066FF]">One app for</span>
                    <br />
                    <span className="text-gray-900">all your transport needs</span>
            </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Single account for all your transportation services.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Button size="lg" className="text-lg px-8 h-14 bg-[#0066FF] hover:bg-[#0052CC]">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-gray-300">
                      How It Works
                    </Button>
                  </div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                  >
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">
                        <AnimatedCounter target={500} suffix="+" />
                      </div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">
                        <AnimatedCounter target={50} suffix="+" />
                      </div>
                      <div className="text-gray-600">Verified Drivers</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">
                        <AnimatedCounter target={4.7} decimals={1} />
                      </div>
                      <div className="text-gray-600">Average Rating</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
          </div>
        </section>

          {/* Unify Your Transport Section */}
          <section className="py-20 px-4 md:px-8 bg-background/50 backdrop-blur-sm relative z-10">
          <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Unify your transport
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  All your transportation needs in one place
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="cursor-pointer"
                    >
                      <Card className="p-6 h-full border-2 border-gray-200 hover:border-[#0066FF] transition-all duration-300 bg-white hover:shadow-lg">
                        <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-center">
                          {service.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* All Services, One App Section */}
          <section className="py-20 px-4 md:px-8 bg-background/30 backdrop-blur-sm relative z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  All services, one app
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Send money anywhere, effortlessly.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="p-6 h-full border-2 border-gray-200 hover:border-[#0066FF] transition-all duration-300 bg-white text-center">
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-[#0066FF]" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Card className="p-8 md:p-12 bg-gradient-to-br from-[#0066FF] to-blue-700 text-white border-0">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Book your ride in a few taps
                  </h3>
                  <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                    Easily book any transport service from your account. Multiple payment methods available across India.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#0066FF] hover:bg-gray-100 text-lg px-8 h-14"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Step-by-Step Process */}
          <section className="py-20 px-4 md:px-8 bg-background/50 backdrop-blur-sm relative z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Simple, fast & safe
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Book your ride in just a few simple steps
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                {/* Step Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {steps.map((step, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveStep(index)}
                      className={`w-20 h-20 rounded-lg font-semibold border-2 transition-all duration-300 flex flex-col items-center justify-center ${
                        activeStep === index
                          ? "bg-[#0066FF] text-white border-[#0066FF]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#0066FF]"
                      }`}
                    >
                      <span className="text-sm md:text-base font-bold">{step.number}</span>
                      <span className="text-xs mt-1">{step.title}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Active Step Card */}
                <div className="flex justify-center">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-2xl"
                  >
                    <Card className="p-8 md:p-10 border-2 border-[#0066FF] transition-all duration-300 bg-white shadow-lg">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-white">
                            {steps[activeStep].number}
                          </span>
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {steps[activeStep].title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-6">{steps[activeStep].description}</p>
                          <ul className="space-y-3">
                            {steps[activeStep].features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                                <span className="text-left">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* All Services Grid */}
          <section className="py-20 px-4 md:px-8 bg-background/30 backdrop-blur-sm relative z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Services Tailored For You
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  From daily commutes to special events, we've got everything you need.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <Card className="p-6 h-full border-2 border-gray-200 hover:border-[#0066FF] transition-all duration-300 bg-white hover:shadow-xl relative">
                        {service.popular && (
                          <Badge className="absolute top-4 right-4 bg-[#0066FF] text-white z-10">
                            Popular
                          </Badge>
                        )}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-gray-900">4.8</span>
                            <span className="text-gray-500">from 2,500+ reviews</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mb-3 border-green-200 text-green-700 bg-green-50">
                          Available Now
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-gray-500">Price</div>
                              <div className="text-xl font-bold text-[#0066FF]">
                                {service.price}
                              </div>
                            </div>
                            <Button className="bg-[#0066FF] hover:bg-[#0052CC]">
                              Book Now
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4 md:px-8 bg-background/50 backdrop-blur-sm relative z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Hear it from our clients
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold text-gray-900">4.9 out of 5 stars</span>
                </div>
                <p className="text-xl text-gray-600">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 h-full border-2 border-gray-200 hover:border-[#0066FF] transition-all duration-300 bg-white">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.initials}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-gray-500">{testimonial.location}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-3 border-blue-200 text-blue-700 bg-blue-50">
                        {testimonial.service}
                      </Badge>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

          {/* Final CTA */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#0066FF] to-blue-700 text-white relative z-10">
          <div className="container mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <AnimatedCounter target={500} suffix="+" /> users, plus you.
            </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  It only takes few seconds to get started.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-[#0066FF] hover:bg-gray-100 text-lg px-8 h-14"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 h-14 border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    Sign up
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 h-14 border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    Login
            </Button>
                </div>
              </motion.div>
          </div>
        </section>

          <TransportFooter />
      </main>
      </div>
    </>
  );
};

export default Transport;
