
import React from 'react';

const FunctionThemes = () => {
  const functions = [
    {
      name: "Haldi Ceremony",
      description: "The turmeric blessing ritual",
      colors: {
        men: "Yellow & Orange",
        women: "Bright Yellow & Marigold"
      },
      bgColor: "from-yellow-100 to-orange-100",
      accentColor: "text-yellow-600"
    },
    {
      name: "Mehendi Night",
      description: "Henna art celebration",
      colors: {
        men: "Green & Cream",
        women: "Deep Green & Gold"
      },
      bgColor: "from-green-100 to-emerald-100",
      accentColor: "text-green-600"
    },
    {
      name: "Sangam",
      description: "The union ceremony",
      colors: {
        men: "Maroon & Gold",
        women: "Red & Deep Gold"
      },
      bgColor: "from-red-100 to-pink-100",
      accentColor: "text-red-600"
    },
    {
      name: "Reception",
      description: "Evening celebration",
      colors: {
        men: "Navy & Silver",
        women: "Pastels & Rose Gold"
      },
      bgColor: "from-blue-100 to-purple-100",
      accentColor: "text-blue-600"
    }
  ];

  return (
    <section id="function-themes" className="py-20 bg-gradient-to-br from-wedding-cream via-white to-lavender-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-wedding-gold/30">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <circle cx="30" cy="30" r="2" opacity="0.6"/>
            <circle cx="15" cy="15" r="1.5" opacity="0.4"/>
            <circle cx="45" cy="15" r="1.5" opacity="0.6"/>
            <circle cx="15" cy="45" r="1.5" opacity="0.4"/>
            <circle cx="45" cy="45" r="1.5" opacity="0.6"/>
          </svg>
        </div>
        <div className="absolute top-32 right-20 text-wedding-mauve/20">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 5 L25 15 L35 15 L27 22 L30 32 L20 25 L10 32 L13 22 L5 15 L15 15 Z" opacity="0.5"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant font-semibold mb-6 text-wedding-mauve">
            Function Color Themes
          </h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dress to celebrate! Here are our suggested color themes for each beautiful function
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {functions.map((func, index) => (
            <div key={index} className="group">
              <div className={`relative bg-gradient-to-br ${func.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}>
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 opacity-30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={func.accentColor}>
                    <circle cx="12" cy="6" r="2"/>
                    <circle cx="6" cy="18" r="2"/>
                    <circle cx="18" cy="18" r="2"/>
                    <path d="M12 8v4l-4 4"/>
                    <path d="M12 12l4 4"/>
                  </svg>
                </div>

                <div className="text-center">
                  <h3 className={`text-xl font-cormorant font-semibold mb-2 ${func.accentColor}`}>
                    {func.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 italic">
                    {func.description}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-lg p-4 backdrop-blur-sm">
                      <h4 className="font-montserrat font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                        For Men
                      </h4>
                      <p className={`font-medium ${func.accentColor}`}>
                        {func.colors.men}
                      </p>
                    </div>

                    <div className="bg-white/70 rounded-lg p-4 backdrop-blur-sm">
                      <h4 className="font-montserrat font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                        For Women
                      </h4>
                      <p className={`font-medium ${func.accentColor}`}>
                        {func.colors.women}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 ${func.bgColor} rounded-t-full opacity-60`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional styling note */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto border border-wedding-gold/20">
            <h3 className="text-2xl font-cormorant font-semibold text-wedding-mauve mb-4">
              Style Guidelines
            </h3>
            <p className="text-gray-700 leading-relaxed">
              These are suggested color palettes to help coordinate our celebration. Feel free to incorporate these colors 
              in your traditional or contemporary attire. Your comfort and joy in celebrating with us is what matters most!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionThemes;
