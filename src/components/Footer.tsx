
import { Heart, MapPin, Calendar, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = footerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  
  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-br from-wedding-mauve via-wedding-mauve/90 to-purple-900 text-white"
    >
      {/* Enhanced animated background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-wedding-mauve/80 via-purple-800/60 to-indigo-900/80"></div>
        
        {/* Dynamic mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-wedding-gold/20 via-wedding-gold/10 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/6 left-1/12 w-32 h-32 bg-wedding-gold/10 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/8 w-24 h-24 bg-wedding-blush/15 rounded-full animate-float-fast blur-sm"></div>
          <div className="absolute top-1/3 right-1/6 w-20 h-20 bg-white/5 rounded-full animate-pulse-slow blur-sm"></div>
          <div className="absolute bottom-1/6 left-1/4 w-16 h-16 bg-wedding-gold/8 rounded-full animate-float-slow blur-sm"></div>
          
          {/* Animated sparkles */}
          <div className="absolute top-1/4 left-1/3 text-wedding-gold/30 animate-pulse">
            <Heart size={12} className="animate-pulse" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-white/20 animate-pulse delay-1000">
            <Heart size={10} className="animate-pulse" />
          </div>
          <div className="absolute top-2/3 left-1/6 text-wedding-gold/25 animate-pulse delay-500">
            <Heart size={14} className="animate-pulse" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Couple Section */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <div className="mb-6">
              <h3 className="font-cormorant text-4xl md:text-5xl mb-2 bg-gradient-to-r from-wedding-gold via-white to-wedding-gold bg-clip-text text-transparent">
                Akansha & Kush
              </h3>
              <div className="flex justify-center lg:justify-start items-center mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-wedding-gold"></div>
                <Heart className="w-4 h-4 text-wedding-gold mx-3 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-wedding-gold"></div>
              </div>
              <p className="font-montserrat text-sm text-white/80 leading-relaxed">
                Two hearts becoming one, forever and always. Thank you for being part of our magical journey.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <h4 className="font-cormorant text-2xl mb-6 text-wedding-gold">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { href: "#home", text: "Home" },
                { href: "#our-story", text: "Our Story" },
                { href: "#details", text: "Details" },
                { href: "#rsvp", text: "RSVP" },
                { href: "#gallery", text: "Gallery" }
              ].map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`block text-white/70 hover:text-wedding-gold transition-all duration-300 hover:translate-x-2 hover:scale-105 font-montserrat text-sm group transition-all duration-700 delay-${index * 100} ${isVisible ? 'scroll-reveal-left revealed' : 'scroll-reveal-left'}`}
                >
                  <span className="relative">
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-wedding-gold transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Event Details */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <h4 className="font-cormorant text-2xl mb-6 text-wedding-gold">Event Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                <Calendar className="w-5 h-5 text-wedding-gold mt-1 group-hover:animate-pulse" />
                <div>
                  <p className="font-montserrat text-sm text-white/90 font-medium">Wedding Date</p>
                  <p className="font-montserrat text-xs text-white/70">December 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-wedding-gold mt-1 group-hover:animate-pulse" />
                <div>
                  <p className="font-montserrat text-sm text-white/90 font-medium">Celebration Venue</p>
                  <p className="font-montserrat text-xs text-white/70">Beautiful Wedding Destination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <h4 className="font-cormorant text-2xl mb-6 text-wedding-gold">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                <Mail className="w-4 h-4 text-wedding-gold group-hover:animate-pulse" />
                <p className="font-montserrat text-xs text-white/70">hello@akankush.wedding</p>
              </div>
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                <Phone className="w-4 h-4 text-wedding-gold group-hover:animate-pulse" />
                <p className="font-montserrat text-xs text-white/70">+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "#", delay: "0ms" },
                { Icon: Facebook, href: "#", delay: "100ms" },
                { Icon: Twitter, href: "#", delay: "200ms" }
              ].map(({ Icon, href, delay }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-wedding-gold transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ transitionDelay: delay }}
                >
                  <Icon className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-wedding-gold/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className={`flex items-center justify-center my-12 transition-all duration-1000 delay-800 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-wedding-gold"></div>
          <div className="mx-6 relative">
            <Heart className="w-6 h-6 text-wedding-gold animate-pulse" />
            <div className="absolute inset-0 animate-ping">
              <Heart className="w-6 h-6 text-wedding-gold opacity-20" />
            </div>
          </div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-wedding-gold"></div>
        </div>

        {/* Bottom section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <div className="mb-6">
            <p className="font-cormorant text-2xl text-white/90 mb-2">
              "Love is not just looking at each other, it's looking in the same direction."
            </p>
            <p className="font-montserrat text-sm text-white/60">- Antoine de Saint-Exupéry</p>
          </div>
          
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-full px-8 py-3 card-hover border border-white/10">
            <p className="text-sm text-white/70 font-montserrat">
              &copy; {currentYear} Akansha & Kush Wedding. Made with{' '}
              <Heart className="w-4 h-4 inline text-wedding-gold animate-pulse" />{' '}
              for our special day.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
