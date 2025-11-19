import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TripImage {
  src: string;
  caption: string;
  alt: string;
}

interface TripExperienceCarouselProps {
  images: TripImage[];
}

const TripExperienceCarousel = ({ images }: TripExperienceCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<TripImage | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  const openLightbox = useCallback((image: TripImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-muted/30 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Trip Experiences</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Journeys, Real Memories
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore photos from our customers' unforgettable trips
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer perspective-1000"
                    onClick={() => openLightbox(image)}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                      z: 50
                    }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500" 
                         style={{ 
                           transform: "translateZ(20px)",
                           transformStyle: "preserve-3d"
                         }}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <motion.p 
                      className="mt-3 text-sm text-muted-foreground text-center px-2"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {image.caption}
                    </motion.p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:scale-110 transition-transform" />
            <CarouselNext className="hidden md:flex -right-12 hover:scale-110 transition-transform" />
          </Carousel>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="mt-4 text-white text-center text-lg">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TripExperienceCarousel;
