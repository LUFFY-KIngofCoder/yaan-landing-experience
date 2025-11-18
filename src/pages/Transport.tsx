import { motion } from "framer-motion";
import Header from "@/components/Header";
import TransportFooter from "@/components/TransportFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Shield,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  Star,
  MapPin,
  DollarSign,
  Users,
} from "lucide-react";

// Import service images
import heroImage from "@/assets/transport-hero.jpg";
import sedanImage from "@/assets/sedan-car.jpg";
import eRickshawImage from "@/assets/e-rickshaw.jpg";
import weddingCarImage from "@/assets/wedding-car.jpg";
import pickupImage from "@/assets/pickup-truck.jpg";
import tempoImage from "@/assets/tempo-traveller.jpg";
import parcelImage from "@/assets/parcel-service.jpg";
import shuttleImage from "@/assets/shuttle-service.jpg";

const Transport = () => {
  const services = [
    {
      title: "Cab Ride",
      description: "Quick and convenient cab rides for your daily commute",
      image: sedanImage,
      price: "Starting at ₹99",
      features: ["24/7 Availability", "GPS Tracking", "Professional Drivers"],
    },
    {
      title: "Cab Rental",
      description: "Rent a cab for hours or days for your convenience",
      image: sedanImage,
      price: "Starting at ₹299/hr",
      features: ["Hourly Rates", "Daily Packages", "Flexible Duration"],
    },
    {
      title: "E-Rickshaw",
      description: "Eco-friendly electric rickshaw rides for short distances",
      image: eRickshawImage,
      price: "Starting at ₹49",
      features: ["Eco-Friendly", "Cost-Effective", "Local Routes"],
    },
    {
      title: "Wedding Cars",
      description: "Luxury wedding cars and fleet services for your special day",
      image: weddingCarImage,
      price: "Starting at ₹2,499",
      features: ["Luxury Fleet", "Custom Decoration", "Professional Service"],
    },
    {
      title: "Truck & Lorry",
      description: "Commercial truck and lorry rental for goods transport",
      image: pickupImage,
      price: "Starting at ₹999",
      features: ["Various Sizes", "Experienced Drivers", "Goods Insurance"],
    },
    {
      title: "Traveller",
      description: "Comfortable vehicles for group trips and family travel",
      image: tempoImage,
      price: "Starting at ₹1,499",
      features: ["12-20 Seaters", "AC Vehicles", "Tour Packages"],
    },
    {
      title: "Parcel",
      description: "Fast and secure parcel delivery services",
      image: parcelImage,
      price: "Starting at ₹79",
      features: ["Same-Day Delivery", "Real-Time Tracking", "Secure Handling"],
    },
    {
      title: "Shuttle",
      description: "Regular shuttle services for offices and schools",
      image: shuttleImage,
      price: "Starting at ₹199",
      features: ["Fixed Routes", "Daily Service", "Corporate Plans"],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Drivers",
      description: "All drivers are background-checked and professionally trained",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Transparent rates with no hidden charges",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Book anytime, anywhere with instant confirmation",
    },
    {
      icon: CheckCircle2,
      title: "Clean & Well-Maintained",
      description: "Regular vehicle maintenance and sanitization",
    },
    {
      icon: MapPin,
      title: "Fast Response Time",
      description: "Quick pickup within minutes of booking",
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Courteous drivers and excellent customer support",
    },
  ];

  const bookingSteps = [
    {
      number: "1",
      title: "Choose the Vehicle",
      description: "Select from our range of vehicles based on your needs",
    },
    {
      number: "2",
      title: "Select Date & Time",
      description: "Pick your preferred pickup date and time",
    },
    {
      number: "3",
      title: "Confirm Booking",
      description: "Review details and confirm your booking instantly",
    },
    {
      number: "4",
      title: "Enjoy Your Trip",
      description: "Relax while our professional driver takes care of the rest",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh M.",
      rating: 5,
      text: "Very professional driver, reached on time. The car was clean and well-maintained.",
      location: "Mumbai",
    },
    {
      name: "Anshika P.",
      rating: 5,
      text: "Booked a tempo traveller for Goa trip, great experience. Highly recommend YAAN transport!",
      location: "Pune",
    },
    {
      name: "Amit K.",
      rating: 5,
      text: "Excellent airport pickup service. Driver was waiting at arrival, very courteous.",
      location: "Delhi",
    },
  ];

  const galleryImages = [heroImage, sedanImage, eRickshawImage, weddingCarImage, pickupImage, tempoImage, parcelImage, shuttleImage];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 text-sm">Trusted Transport Services</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Book Reliable Transport Services – Fast, Safe & Affordable
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                From local trips to outstation travel and logistic movement, YAAN provides verified drivers and well-maintained vehicles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">Book a Ride</Button>
                <Button size="lg" variant="outline" className="text-lg px-8">Request a Quote</Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Vehicles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Professional Transport Services" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Photos */}
      <section className="py-20 px-4 md:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Ride</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From sedans to buses, we have the right vehicle for every journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">Book Now</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel with YAAN Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Travel with YAAN?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional transport services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 p-8 bg-primary/5 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Transparent Pricing</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold mb-2">Local Trips</div>
                <div className="text-3xl font-bold text-primary">₹99+</div>
                <div className="text-sm text-muted-foreground">Per trip</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Outstation</div>
                <div className="text-3xl font-bold text-primary">₹12/km</div>
                <div className="text-sm text-muted-foreground">+ Driver charges</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Hourly Rentals</div>
                <div className="text-3xl font-bold text-primary">₹299/hr</div>
                <div className="text-sm text-muted-foreground">Min 4 hours</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Gallery Carousel */}
      <section className="py-20 px-4 md:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Fleet</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Vehicles</h2>
            <p className="text-lg text-muted-foreground">Professional transport you can trust</p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src={image} alt={`Vehicle ${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Book</h2>
            <p className="text-lg text-muted-foreground">Four easy steps to your perfect ride</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {bookingSteps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a ride? We're here 24/7</h2>
            <p className="text-lg mb-8 opacity-90">Book now or reach out to us for any queries</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="w-5 h-5" />
                Call: +91 XXXXXXXXXX
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </div>

            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-12">
              Book Your Transport Now
            </Button>
          </motion.div>
        </div>
      </section>

      <TransportFooter />
    </div>
  );
};

export default Transport;
