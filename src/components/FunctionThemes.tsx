
import React, { useState, useEffect, useRef } from 'react';

const FunctionThemes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const functions = [
    {
      name: "Haldi Ceremony",
      description: "The turmeric blessing ritual",
      emoji: "🌻",
      colors: {
        men: "Yellow & Orange",
        women: "Bright Yellow & Marigold"
      },
      bgColor: "from-yellow-100 to-orange-100",
      accentColor: "text-yellow-600",
      shadowColor: "shadow-yellow-200/50"
    },
    {
      name: "Mehendi Night",
      description: "Henna art celebration",
      emoji: "🌿",
      colors: {
        men: "Green & Cream",
        women: "Deep Green & Gold"
      },
      bgColor: "from-green-100 to-emerald-100",
      accentColor: "text-green-600",
      shadowColor: "shadow-green-200/50"
    },
    {
      name: "Sagai (Ring Ceremony)",
      description: "The union ceremony",
      emoji: "💍",
      colors: {
        men: "Maroon & Gold",
        women: "Red & Deep Gold"
      },
      bgColor: "from-red-100 to-pink-100",
      accentColor: "text-red-600",
      shadowColor: "shadow-red-200/50"
    },
    {
      name: "Reception",
      description: "Evening celebration",
      emoji: "✨",
      colors: {
        men: "Navy & Silver",
        women: "Pastels & Rose Gold"
      },
      bgColor: "from-blue-100 to-purple-100",
      accentColor: "text-blue-600",
      shadowColor: "shadow-blue-200/50"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="function-themes" 
      className="py-20 bg-gradient-to-br from-wedding-cream via-white to-lavender-50 relative overflow-hidden"
    >
      {/* Enhanced floating decorative elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 text-wedding-gold/40 animate-float-slow">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
            <circle cx="40" cy="40" r="3" opacity="0.6"/>
            <circle cx="20" cy="20" r="2" opacity="0.4"/>
            <circle cx="60" cy="20" r="2" opacity="0.6"/>
            <circle cx="20" cy="60" r="2" opacity="0.4"/>
            <circle cx="60" cy="60" r="2" opacity="0.6"/>
            <path d="M40 10 L45 25 L60 25 L48 35 L53 50 L40 40 L27 50 L32 35 L20 25 L35 25 Z" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute top-32 right-20 text-wedding-mauve/30 animate-float-fast">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <circle cx="30" cy="30" r="8" opacity="0.6"/>
            <circle cx="30" cy="15" r="3" opacity="0.8"/>
            <circle cx="45" cy="30" r="3" opacity="0.8"/>
            <circle cx="30" cy="45" r="3" opacity="0.8"/>
            <circle cx="15" cy="30" r="3" opacity="0.8"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 text-wedding-gold/20 animate-pulse-slow">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
            <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <circle cx="25" cy="25" r="5" opacity="0.7"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <h2 className="text-4xl md:text-5xl font-cormorant font-semibold mb-6 text-wedding-mauve">
            Function Color Themes
          </h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dress to celebrate! Here are our suggested color themes for each beautiful function ✨
          </p>
        </div>

        {/* Enhanced cards grid with staggered animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {functions.map((func, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-1000 delay-${index * 100} ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br ${func.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl ${func.shadowColor} transition-all duration-500 border border-white/50 backdrop-blur-sm transform hover:scale-105 hover:-rotate-1 overflow-hidden`}>
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Floating emoji */}
                <div className={`absolute top-4 right-4 text-4xl transition-all duration-300 ${hoveredCard === index ? 'animate-bounce' : 'animate-float-slow'}`}>
                  {func.emoji}
                </div>

                {/* Enhanced decorative corner element */}
                <div className="absolute top-6 left-6 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" className={func.accentColor}>
                    <circle cx="16" cy="8" r="2"/>
                    <circle cx="8" cy="24" r="2"/>
                    <circle cx="24" cy="24" r="2"/>
                    <path d="M16 10v6l-6 6"/>
                    <path d="M16 16l6 6"/>
                    <circle cx="16" cy="16" r="1"/>
                  </svg>
                </div>

                <div className="text-center relative z-10">
                  <h3 className={`text-xl font-cormorant font-semibold mb-2 ${func.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                    {func.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 italic opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {func.description}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-xl p-4 backdrop-blur-sm group-hover:bg-white/90 transition-all duration-300 transform group-hover:scale-105">
                      <h4 className="font-montserrat font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                        👔 For Men
                      </h4>
                      <p className={`font-medium ${func.accentColor} text-sm`}>
                        {func.colors.men}
                      </p>
                    </div>

                    <div className="bg-white/80 rounded-xl p-4 backdrop-blur-sm group-hover:bg-white/90 transition-all duration-300 transform group-hover:scale-105">
                      <h4 className="font-montserrat font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                        👗 For Women
                      </h4>
                      <p className={`font-medium ${func.accentColor} text-sm`}>
                        {func.colors.women}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated bottom border */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 ${func.accentColor.replace('text-', 'bg-')} rounded-t-full group-hover:w-20 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Replaced style guidelines with cute and funny text */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <div className="bg-gradient-to-br from-white/70 via-wedding-cream/50 to-wedding-blush/30 backdrop-blur-sm rounded-3xl p-10 max-w-4xl mx-auto border-2 border-wedding-gold/20 shadow-2xl relative overflow-hidden">
            {/* Cute decorative elements */}
            <div className="absolute top-6 left-6 text-wedding-gold/40 animate-pulse-slow">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="20" cy="15" r="8" opacity="0.6"/>
                <circle cx="15" cy="12" r="2" fill="white"/>
                <circle cx="25" cy="12" r="2" fill="white"/>
                <path d="M15 18 Q20 22 25 18" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            <div className="absolute top-6 right-6 text-wedding-mauve/40 animate-bounce">
              💕
            </div>
            
            <div className="absolute bottom-6 left-6 text-wedding-gold/40 animate-float-slow">
              ✨
            </div>
            
            <div className="absolute bottom-6 right-6 text-wedding-mauve/40 animate-pulse">
              🎉
            </div>

            <h3 className="text-3xl font-cormorant font-bold text-wedding-mauve mb-6 animate-float-slow">
              Fashion Police Alert! 
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p className="text-lg">
                <span className="font-semibold text-wedding-mauve">Plot twist:</span> These aren't rules, they're more like... 
                <em className="text-wedding-gold font-medium">friendly suggestions from your overly enthusiastic wedding planners!</em> 🤭
              </p>
              
              <p>
                Think of these colors as your <strong className="text-wedding-mauve">style superhero cape</strong> – 
                they'll help you blend in with our rainbow of love while still looking absolutely fabulous! 
                But honestly, if you show up in a potato sack, we'll still be thrilled you're there! ✨
              </p>
              
              <p className="italic text-wedding-gold font-medium">
                Remember: The only mandatory accessory is your beautiful smile! 
                (And maybe some comfortable dancing shoes because we're going to party! )
              </p>
              
              <div className="bg-wedding-cream/50 rounded-2xl p-6 mt-8 border border-wedding-gold/30">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-wedding-mauve">Pro tip:</span> 
                  If you're still confused about what to wear, just imagine you're attending the wedding of two people who really, 
                  <em>really</em> love color-coordinated photos! 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionThemes;
