
import { Calendar, Clock, MapPin, Phone, Users, Star, Heart, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const VenueDetails: React.FC = () => {
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

  return (
    <section 
      ref={sectionRef}
      id="details" 
      className="py-20 md:py-28 bg-gradient-to-br from-wedding-blush/20 via-wedding-cream to-wedding-sage/10 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-wedding-gold/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-wedding-mauve/5 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-wedding-blush/10 rounded-full animate-pulse-slow"></div>
        <Sparkles className="absolute top-20 right-1/3 w-6 h-6 text-wedding-gold/20 animate-pulse" />
        <Heart className="absolute bottom-20 left-1/4 w-5 h-5 text-wedding-mauve/20 animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-8 h-px bg-wedding-gold"></div>
              <Star className="w-6 h-6 text-wedding-gold animate-pulse" />
              <div className="w-8 h-px bg-wedding-gold"></div>
            </div>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve mb-4">
            Wedding Details
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto text-lg">
            Join us as we celebrate our love story with an unforgettable day of joy, laughter, and memories.
          </p>
        </div>
        
        {/* Enhanced ceremony and reception cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Ceremony Card */}
          <div className={`group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 card-hover border border-wedding-gold/10 ${isVisible ? 'scroll-reveal-left stagger-1 revealed' : 'scroll-reveal-left stagger-1'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-wedding-gold/5 to-wedding-mauve/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-wedding-gold/10 rounded-full group-hover:bg-wedding-gold/20 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-wedding-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-cormorant text-3xl lg:text-4xl mb-6 text-wedding-mauve text-center group-hover:text-wedding-gold transition-colors duration-300">
                Sacred Ceremony
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-wedding-cream/50 group-hover:bg-wedding-cream transition-colors duration-300">
                  <Calendar className="h-5 w-5 text-wedding-gold flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">April 20th, 2026</p>
                    <p className="text-sm text-gray-600">A perfect spring day</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-wedding-cream/50 group-hover:bg-wedding-cream transition-colors duration-300">
                  <Clock className="h-5 w-5 text-wedding-gold flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">4:00 PM</p>
                    <p className="text-sm text-gray-600">Golden hour ceremony</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-wedding-cream/50 group-hover:bg-wedding-cream transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-wedding-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Hotel Royal Bistro</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Canada Palace, Nr. Reliance Smart<br />
                      Bypass Road, Mehsana, 384 002
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-wedding-blush/30 to-wedding-sage/30 p-4 rounded-xl mb-6">
                <p className="italic text-sm text-gray-700 text-center leading-relaxed">
                  "The ceremony will be held in our beautiful garden pavilion, surrounded by blooming flowers. 
                  In case of weather, we'll celebrate in our elegant grand hall."
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://www.google.com/maps/place/Hotel+Royal+Bistro/@23.6177148,72.3432253,602m/data=!3m2!1e3!4b1!4m9!3m8!1s0x395c43ea4a703a1b:0x70bb34b76d1d1d02!5m2!4m1!1i2!8m2!3d23.6177099!4d72.3458002!16s%2Fg%2F11y2spj57f?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-wedding-mauve to-wedding-gold text-white rounded-full hover:from-wedding-gold hover:to-wedding-mauve transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">View Location</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Reception Card */}
          <div className={`group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 card-hover border border-wedding-mauve/10 ${isVisible ? 'scroll-reveal-right stagger-2 revealed' : 'scroll-reveal-right stagger-2'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-wedding-mauve/5 to-wedding-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-wedding-mauve/10 rounded-full group-hover:bg-wedding-mauve/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-wedding-mauve group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-cormorant text-3xl lg:text-4xl mb-6 text-wedding-mauve text-center group-hover:text-wedding-gold transition-colors duration-300">
                Grand Reception
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-wedding-cream/50 group-hover:bg-wedding-cream transition-colors duration-300">
                  <Calendar className="h-5 w-5 text-wedding-mauve flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">April 20th, 2026</p>
                    <p className="text-sm text-gray-600">Same magical evening</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-wedding-cream/50 group-hover:bg-wedding-cream transition-colors duration-300">
                  <Clock className="h-5 w-5 text-wedding-mauve flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">6:00 PM</p>
                    <p className="text-sm text-gray-600">Celebration begins</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-wedding-cream/50 group-hover:bg-wedding-cream transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-wedding-mauve flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Hotel Royal Bistro</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Canada Palace, Nr. Reliance Smart<br />
                      Bypass Road, Mehsana, 384 002
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-wedding-mauve/20 to-wedding-blush/30 p-4 rounded-xl mb-6">
                <p className="italic text-sm text-gray-700 text-center leading-relaxed">
                  "Join us for an evening of fine dining, dancing, and celebration! 
                  We'd love for you to dress in cocktail attire for this special night."
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://www.google.com/maps/place/Hotel+Royal+Bistro/@23.6177148,72.3432253,602m/data=!3m2!1e3!4b1!4m9!3m8!1s0x395c43ea4a703a1b:0x70bb34b76d1d1d02!5m2!4m1!1i2!8m2!3d23.6177099!4d72.3458002!16s%2Fg%2F11y2spj57f?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-wedding-gold to-wedding-mauve text-white rounded-full hover:from-wedding-mauve hover:to-wedding-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">View Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced accommodations section */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-wedding-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-wedding-gold/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-wedding-mauve/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-6 h-px bg-wedding-gold"></div>
                  <Phone className="w-6 h-6 text-wedding-gold" />
                  <div className="w-6 h-px bg-wedding-gold"></div>
                </div>
                <h3 className="font-cormorant text-3xl md:text-4xl mb-4 text-wedding-mauve">
                  Where to Stay
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We've reserved special rates at these beautiful hotels for our guests. 
                  Book early to secure your preferred accommodation!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hotel 1 */}
                <div className="group bg-gradient-to-br from-wedding-cream to-white p-6 rounded-2xl border border-wedding-sage/20 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-wedding-gold/10 rounded-xl group-hover:bg-wedding-gold/20 transition-colors duration-300">
                      <Star className="w-6 h-6 text-wedding-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-cormorant text-2xl mb-2 text-gray-800 group-hover:text-wedding-gold transition-colors duration-300">
                        Serenity Grand Hotel
                      </h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600 flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-wedding-sage" />
                          <span className="text-sm">1000 Main Street, Serenity Valley, SV 56789</span>
                        </p>
                        <p className="text-gray-600 flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-wedding-sage" />
                          <span className="text-sm">+91 7987398516</span>
                        </p>
                      </div>
                      <div className="bg-wedding-gold/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-800 mb-1">
                          <span className="text-wedding-gold">Group Code:</span> AK2026
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Special rate available until January 14, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hotel 2 */}
                <div className="group bg-gradient-to-br from-wedding-cream to-white p-6 rounded-2xl border border-wedding-mauve/20 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-wedding-mauve/10 rounded-xl group-hover:bg-wedding-mauve/20 transition-colors duration-300">
                      <Star className="w-6 h-6 text-wedding-mauve" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-cormorant text-2xl mb-2 text-gray-800 group-hover:text-wedding-mauve transition-colors duration-300">
                        Hotel Royal Bistro
                      </h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600 flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-wedding-sage" />
                          <span className="text-sm">Canada Palace, Nr. Reliance Smart, Bypass Road, Mehsana, 384 002</span>
                        </p>
                        <p className="text-gray-600 flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-wedding-sage" />
                          <span className="text-sm">+91 9098190788</span>
                        </p>
                      </div>
                      <div className="bg-wedding-mauve/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-800 mb-1">
                          <span className="text-wedding-mauve">Group Code:</span> AKWEDDING
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Special rate available until January 20, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueDetails;
