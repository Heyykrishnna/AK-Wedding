
import React, { useEffect, useRef, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Heart, Camera, Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const imageDescriptions = [
    "Sweet Moments Together",
    "Love in Every Frame",
    "Cherished Memories",
    "Forever & Always",
    "Pure Happiness",
    "Our Beautiful Journey"
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-20 md:py-32 bg-gradient-to-br from-wedding-cream via-wedding-blush/10 to-wedding-cream relative overflow-hidden"
    >
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/12 w-40 h-40 bg-wedding-gold/8 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/8 w-32 h-32 bg-wedding-mauve/8 rounded-full animate-float-fast blur-sm"></div>
        <div className="absolute top-1/3 right-1/6 w-24 h-24 bg-wedding-blush/15 rounded-full animate-pulse-slow blur-sm"></div>
        <div className="absolute bottom-1/6 left-1/4 w-20 h-20 bg-wedding-sage/10 rounded-full animate-float-slow blur-sm"></div>
        
        {/* Sparkle elements */}
        <div className="absolute top-1/4 left-1/3 text-wedding-gold/20 animate-pulse">
          <Sparkles size={16} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-wedding-mauve/20 animate-pulse delay-1000">
          <Sparkles size={12} />
        </div>
        <div className="absolute top-2/3 left-1/6 text-wedding-gold/15 animate-pulse delay-500">
          <Sparkles size={14} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced animated header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-wedding-gold mr-3 animate-pulse" />
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-wedding-mauve bg-gradient-to-r from-wedding-mauve to-wedding-gold bg-clip-text text-transparent">
              Our Gallery
            </h2>
            <Camera className="w-8 h-8 text-wedding-gold ml-3 animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center my-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-wedding-gold"></div>
            <Heart className="w-6 h-6 text-wedding-gold mx-4 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-wedding-gold"></div>
          </div>
          
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every picture tells a story, and every story is a piece of our hearts. 
            <br />
            <span className="text-wedding-mauve font-medium">More beautiful memories to be captured on our special day! ✨</span>
          </p>
        </div>
        
        {/* Enhanced carousel with better animations */}
        <div className={`mx-auto max-w-7xl px-4 md:px-8 transition-all duration-1000 delay-300 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
          <Carousel 
            className="w-full" 
            opts={{ 
              loop: true,
              align: "center",
              skipSnaps: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {placeholderImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className={`group p-2 transition-all duration-700 ${isVisible ? `scroll-reveal stagger-${(index % 6) + 1} revealed` : `scroll-reveal stagger-${(index % 6) + 1}`}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-wedding-blush/20 p-3 card-hover transform transition-all duration-500 group-hover:shadow-3xl">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-wedding-cream to-wedding-blush/30">
                        <img 
                          src={image} 
                          alt={`${imageDescriptions[index]}`}
                          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                          loading="lazy"
                        />
                        
                        {/* Enhanced overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-center p-4">
                          <Heart className="w-8 h-8 mb-2 animate-pulse text-wedding-gold" />
                          <span className="font-cormorant text-xl font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {imageDescriptions[index]}
                          </span>
                          <div className="w-12 h-px bg-wedding-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        
                        {/* Enhanced shimmer effect */}
                        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Corner decoration */}
                        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-wedding-gold opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-wedding-gold opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                      
                      {/* Image number indicator */}
                      <div className="absolute -bottom-1 -right-1 bg-wedding-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced navigation buttons */}
            <CarouselPrevious className="hidden md:flex -left-6 w-12 h-12 border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm bg-white/80" />
            <CarouselNext className="hidden md:flex -right-6 w-12 h-12 border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm bg-white/80" />
          </Carousel>
        </div>

        {/* Enhanced bottom section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <div className="inline-block bg-gradient-to-r from-wedding-gold/15 via-wedding-mauve/10 to-wedding-blush/15 rounded-full px-12 py-4 card-hover backdrop-blur-sm border border-wedding-gold/20 shadow-lg">
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="w-5 h-5 text-wedding-gold animate-pulse" />
              <p className="font-montserrat text-sm font-medium text-gray-700">
                More magical moments coming soon on our wedding day
              </p>
              <Sparkles className="w-5 h-5 text-wedding-gold animate-pulse delay-500" />
            </div>
          </div>
          
          {/* Photo count indicator */}
          <div className="mt-8 flex items-center justify-center space-x-2">
            {placeholderImages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-wedding-gold/30 transition-all duration-300 hover:bg-wedding-gold"
              ></div>
            ))}
          </div>
          
          <p className="font-cormorant text-2xl text-wedding-mauve mt-6 opacity-80">
            "Every love story is beautiful, but ours is my favorite" 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
