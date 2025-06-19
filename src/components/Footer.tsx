
import { Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className="py-12 bg-wedding-mauve text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-6 right-1/3 w-3 h-3 bg-white/5 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/15 rounded-full animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Animated header */}
          <h2 className={`font-cormorant text-3xl md:text-4xl mb-4 transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            Akansha & Kush
          </h2>
          
          {/* Animated heart section */}
          <div className={`flex justify-center items-center mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
            <div className="w-8 h-px bg-white/70 mr-4"></div>
            <Heart className="w-5 h-5 animate-pulse text-wedding-gold" />
            <div className="w-8 h-px bg-white/70 ml-4"></div>
          </div>
          
          {/* Animated thank you message */}
          <p className={`font-montserrat text-sm mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            Thank you for being part of our special day!
          </p>
          
          {/* Animated navigation links */}
          <div className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover:text-wedding-gold"
            >
              Home
            </a>
            <a 
              href="#our-story" 
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover:text-wedding-gold"
            >
              Our Story
            </a>
            <a 
              href="#details" 
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover:text-wedding-gold"
            >
              Details
            </a>
            <a 
              href="#rsvp" 
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover:text-wedding-gold"
            >
              RSVP
            </a>
            <a 
              href="#gallery" 
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover:text-wedding-gold"
            >
              Gallery
            </a>
          </div>
          
          {/* Animated copyright */}
          <p className={`text-sm text-white/70 transition-all duration-1000 delay-500 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            &copy; {currentYear} Akansha & Kush Wedding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
