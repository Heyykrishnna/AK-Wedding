
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  ganeshaImageUrl?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  ganeshaImageUrl = "https://yogendrarastogi.com/cdn/shop/files/A02.jpg?w=200&h=200&fit=crop&crop=face"
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 800); // Extra time for fade out animation
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-lavender-50 via-wedding-cream to-orange-50 flex items-center justify-center z-50 opacity-0 transition-all duration-800 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-lavender-50 via-wedding-cream to-orange-50 flex items-center justify-center z-50 transition-all duration-800 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-lavender-200/20 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-200/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-lavender-300/15 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-orange-300/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Small decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-lavender-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-lavender-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-500/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Lotus petals as circles */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-16 h-16 bg-gradient-to-br from-lavender-300/30 to-lavender-400/20 rounded-full animate-float blur-[1px]"></div>
        <div className="absolute top-20 right-40 w-12 h-12 bg-gradient-to-br from-orange-300/25 to-orange-400/15 rounded-full animate-float-slow blur-[1px]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-lavender-400/25 to-lavender-500/15 rounded-full animate-float blur-[1px]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-32 w-14 h-14 bg-gradient-to-br from-orange-400/20 to-orange-500/15 rounded-full animate-float-slow blur-[1px]" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        {/* Circular Lord Ganesha Image with rings */}
        <div className="relative flex items-center justify-center">
          {/* Outer decorative rings */}
          <div className="absolute w-48 h-48 border border-lavender-300/30 rounded-full animate-ping"></div>
          <div className="absolute w-44 h-44 border border-orange-300/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-40 h-40 border-2 border-lavender-400/20 rounded-full animate-pulse"></div>
          
          {/* Progress ring */}
          <div className="absolute w-36 h-36">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-lavender-200"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="text-lavender-500 transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          {/* Main image container */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-lavender-100 to-orange-100 flex items-center justify-center shadow-2xl border-4 border-white/80 overflow-hidden backdrop-blur-sm">
            <img 
              src={ganeshaImageUrl}
              alt="Lord Ganesha"
              className="w-full h-full object-cover rounded-full scale-110 hover:scale-125 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="text-lavender-600 animate-pulse">
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
          
          {/* Inner glow effect */}
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-lavender-400/20 to-orange-400/20 animate-pulse"></div>
        </div>

        {/* Sacred text with enhanced styling */}
        <div className="space-y-6">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lavender-700 via-lavender-600 to-orange-600 font-cormorant animate-pulse">
              गणपति बप्पा मोरया
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-lavender-600 animate-pulse">
              मंगलमूर्ति मोरया
            </h3>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <p className="text-sm md:text-base text-lavender-700/80 italic leading-relaxed max-w-md mx-auto">
              ॐ शुभमंगलाय देवाय, सिंहवाहन मूर्तये।<br />
              विघ्नराजाय शुद्धाय, शुभदं देहि मे सदा॥
            </p>
          </div>
        </div>

        {/* English blessing */}
        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <p className="text-lavender-700 font-montserrat text-lg italic font-medium">
            "Blessing our new beginning with divine grace"
          </p>
        </div>

        {/* Progress indicator */}
        <div className="animate-fade-in space-y-4" style={{ animationDelay: '2.5s' }}>
          <div className="text-lavender-600 text-sm font-medium">
            Loading {progress}%
          </div>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-lavender-400 to-lavender-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-lavender-400 to-lavender-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender-400 via-orange-400 via-lavender-500 to-orange-400 animate-pulse"></div>
      
      {/* Corner decorative circles */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-lavender-300/20 rounded-full animate-ping"></div>
      <div className="absolute top-4 right-4 w-6 h-6 bg-orange-300/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-4 left-4 w-7 h-7 bg-orange-300/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-4 right-4 w-5 h-5 bg-lavender-300/20 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default LoadingScreen;
