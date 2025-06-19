
import React, { useEffect, useRef, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const placeholderImages = [
    "https://i.postimg.cc/3rzBxQrJ/IMG-20250512-WA0008-2.jpg",
    "https://i.postimg.cc/JzL5j3Bf/IMG-20250512-WA0010-2.jpg",
    "https://i.postimg.cc/25HdpPXY/IMG-20250512-WA0014-3.jpg",
    "https://i.postimg.cc/vTtFG3L7/IMG-20250518-WA0005-2.jpg",
    "https://i.postimg.cc/pdVQ62Ck/IMG-20250512-WA0022-2.jpg",
    "https://i.postimg.cc/cCddQb0K/IMG-20250512-WA0020-2.jpg",
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-20 md:py-28 bg-wedding-cream relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-wedding-gold/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-wedding-mauve/5 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-wedding-blush/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">Photo Gallery</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            A glimpse into our journey together. More memories to be added after our special day!
          </p>
        </div>
        
        {/* Enhanced carousel with animations */}
        <div className={`mx-auto max-w-5xl px-6 md:px-10 transition-all duration-1000 delay-300 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {placeholderImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className={`overflow-hidden rounded-lg shadow-md group p-1 card-hover transition-all duration-500 ${isVisible ? `scroll-reveal stagger-${(index % 6) + 1} revealed` : `scroll-reveal stagger-${(index % 6) + 1}`}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-wedding-cream to-wedding-blush/20">
                      <img 
                        src={image} 
                        alt={`Couple photo ${index + 1}`}
                        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <span className="text-white font-cormorant text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Love ♥</span>
                      </div>
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 hover:scale-110" />
            <CarouselNext className="hidden md:flex -right-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>

        {/* Additional animated elements */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <div className="inline-block bg-gradient-to-r from-wedding-gold/10 to-wedding-mauve/10 rounded-full px-8 py-3 card-hover">
            <p className="font-montserrat text-sm text-gray-600">
              ✨ More beautiful moments coming soon ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
