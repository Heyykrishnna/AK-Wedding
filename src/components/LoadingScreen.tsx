
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  ganeshaImageUrl?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  ganeshaImageUrl = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=face"
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Extra 500ms for fade out animation
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-lavender-100 via-wedding-cream to-orange-100 flex items-center justify-center z-50 opacity-0 transition-opacity duration-500 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-lavender-100 via-wedding-cream to-orange-100 flex items-center justify-center z-50 transition-opacity duration-500">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lotus petals decorations */}
        <div className="absolute top-20 left-20 text-lavender-300/30 animate-float">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <path d="M30 10 C20 15, 15 25, 20 35 C25 30, 30 25, 30 30 C30 25, 35 30, 40 35 C45 25, 40 15, 30 10 Z" />
          </svg>
        </div>
        <div className="absolute top-32 right-20 text-orange-300/25 animate-float" style={{ animationDelay: '1s' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 5 C15 8, 12 15, 15 22 C18 18, 20 15, 20 18 C20 15, 22 18, 25 22 C28 15, 25 8, 20 5 Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-32 text-lavender-400/30 animate-float" style={{ animationDelay: '2s' }}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
            <path d="M25 8 C18 12, 15 20, 18 28 C22 23, 25 20, 25 23 C25 20, 28 23, 32 28 C35 20, 32 12, 25 8 Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-32 text-orange-400/25 animate-float" style={{ animationDelay: '3s' }}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="currentColor">
            <path d="M22.5 7 C17 10, 14 17, 17 24 C20 20, 22.5 17, 22.5 20 C22.5 17, 25 20, 28 24 C31 17, 28 10, 22.5 7 Z" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="text-center space-y-8 animate-fade-in">
        {/* Lord Ganesha Image */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-lavender-200 to-orange-200 flex items-center justify-center shadow-2xl border-4 border-lavender-300/50 animate-pulse overflow-hidden">
            <img 
              src={ganeshaImageUrl}
              alt="Lord Ganesha"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Fallback to SVG if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="text-lavender-600">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
                      <circle cx="40" cy="35" r="20" fill="#9d6fff" />
                      <path d="M35 45 Q30 50, 25 45 Q30 55, 40 50" fill="#9d6fff" />
                      <circle cx="35" cy="30" r="2" fill="#1F2937" />
                      <circle cx="45" cy="30" r="2" fill="#1F2937" />
                      <path d="M40 15 L42 20 L38 20 Z" fill="#DC2626" />
                    </svg>
                  </div>
                `;
              }}
            />
          </div>
          
          {/* Decorative rings around the image */}
          <div className="absolute inset-0 rounded-full border-2 border-lavender-400/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-orange-400/40 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Hindi Mantra */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-lavender-700 font-cormorant animate-fade-in" style={{ animationDelay: '0.5s' }}>
            गणपति बप्पा मोरया
          </h1>
          <p className="text-lg text-orange-600 font-medium animate-fade-in" style={{ animationDelay: '1s' }}>
            मंगलमूर्ति मोरया
          </p>
          <p className="text-sm text-lavender-600 italic animate-fade-in" style={{ animationDelay: '1.5s' }}>
            विघ्न हर्ता मंगल कर्ता
          </p>
        </div>

        {/* Slogan in English */}
        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <p className="text-lavender-700 font-montserrat text-base italic">
            "Blessing our new beginning"
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '2.5s' }}>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-lavender-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-lavender-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-lavender-300 via-orange-400 to-lavender-300"></div>
    </div>
  );
};

export default LoadingScreen;
