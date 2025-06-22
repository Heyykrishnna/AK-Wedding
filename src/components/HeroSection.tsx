
import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import AudioPlayer from './AudioPlayer';
import { defaultMusic } from '@/lib/backgroundMusic';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const weddingDate = new Date('2026-04-20T16:00:00');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-900 via-pink-800 to-orange-900">
      {/* Enhanced Indian pattern overlay - more visible */}
      <div className="absolute inset-0 bg-indian-pattern opacity-50 pointer-events-none" />
      
      {/* Additional pattern layer for depth */}
      <div className="absolute inset-0 bg-floral opacity-35 pointer-events-none" />
      
      {/* Gradient overlay with rich colors - adjusted for pattern visibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-pink-800/40 to-orange-800/50 pointer-events-none transition-all duration-300"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 1 - scrollY / 1200,
        }}
      />
      
      {/* Enhanced decorative elements with traditional Indian motifs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left mandala design */}
        <div 
          className="absolute top-8 left-8 text-yellow-400/60 z-20 transition-all duration-300"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor" className="drop-shadow-2xl">
            {/* Mandala center */}
            <circle cx="60" cy="60" r="8" fill="#FFD700" opacity="0.9"/>
            {/* Inner ring */}
            <g transform="translate(60, 60)">
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 45})`}>
                  <ellipse cx="0" cy="-20" rx="4" ry="12" fill="#FF6B6B" opacity="0.8"/>
                  <ellipse cx="0" cy="-20" rx="2" ry="8" fill="#FFD700" opacity="0.9"/>
                </g>
              ))}
            </g>
            {/* Outer ring */}
            <g transform="translate(60, 60)">
              {[...Array(16)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 22.5})`}>
                  <ellipse cx="0" cy="-35" rx="3" ry="8" fill="#FF8E53" opacity="0.7"/>
                </g>
              ))}
            </g>
            {/* Decorative petals */}
            <g transform="translate(60, 60)">
              {[...Array(12)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 30})`}>
                  <path d="M0,-45 Q5,-50 0,-55 Q-5,-50 0,-45" fill="#FFD700" opacity="0.6"/>
                </g>
              ))}
            </g>
          </svg>
        </div>
        
        {/* Top right paisley pattern */}
        <div 
          className="absolute top-8 right-8 text-pink-400/50 z-20 transition-all duration-300"
          style={{
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px) rotate(${-scrollY * 0.03}deg)`,
          }}
        >
          <svg width="100" height="140" viewBox="0 0 100 140" fill="currentColor" className="drop-shadow-xl">
            <path d="M50 10 Q70 20 80 50 Q85 80 70 100 Q50 120 40 100 Q30 80 35 60 Q40 40 45 30 Q48 20 50 10 Z" fill="#FF6B6B" opacity="0.8"/>
            <path d="M50 15 Q65 25 72 50 Q75 75 65 90 Q50 105 45 90 Q40 75 43 60 Q46 40 48 30 Q49 22 50 15 Z" fill="#FFD700" opacity="0.7"/>
            <circle cx="55" cy="45" r="3" fill="#FF8E53" opacity="0.9"/>
            <circle cx="50" cy="60" r="2" fill="#FFD700" opacity="0.8"/>
            <circle cx="58" cy="75" r="2.5" fill="#FF6B6B" opacity="0.7"/>
          </svg>
        </div>

        {/* Bottom decorative elements */}
        <div 
          className="absolute bottom-20 left-12 text-orange-400/40 z-20 transition-all duration-300"
          style={{
            transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})`,
          }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100" fill="currentColor" className="drop-shadow-lg">
            <g transform="translate(40, 50)">
              {[...Array(6)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 60})`}>
                  <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#FFD700" opacity="0.6"/>
                  <ellipse cx="0" cy="-25" rx="4" ry="15" fill="#FF6B6B" opacity="0.7"/>
                </g>
              ))}
              <circle cx="0" cy="0" r="6" fill="#FF8E53" opacity="0.9"/>
            </g>
          </svg>
        </div>
        
        <div 
          className="absolute bottom-20 right-12 text-red-400/40 z-20 transition-all duration-300"
          style={{
            transform: `translate(${-scrollY * 0.07}px, ${-scrollY * 0.08}px) scale(${1 + scrollY * 0.0003})`,
          }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100" fill="currentColor" className="drop-shadow-lg">
            <g transform="translate(40, 50)">
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 45})`}>
                  <ellipse cx="0" cy="-20" rx="6" ry="15" fill="#FF6B6B" opacity="0.6"/>
                </g>
              ))}
              <circle cx="0" cy="0" r="5" fill="#FFD700" opacity="0.8"/>
            </g>
          </svg>
        </div>

        {/* Floating golden particles */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} bg-yellow-400/30 rounded-full transition-all duration-${500 + i * 100}`}
            style={{
              top: `${20 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
              transform: `translate(${scrollY * (0.2 + i * 0.05)}px, ${scrollY * (0.1 + i * 0.03)}px)`,
              opacity: Math.max(0.2, 1 - scrollY / (600 + i * 50)),
            }}
          />
        ))}
      </div>
      
      {/* Main content with enhanced styling */}
      <div 
        className="container px-4 py-24 md:py-32 z-30 text-center transition-all duration-300"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0.3, 1 - scrollY / 500),
        }}
      >
        <div className="animate-fade-in">
          {/* Enhanced header with Indian styling */}
          <div className="relative mb-6">
            <h2 className="font-montserrat text-sm md:text-base uppercase tracking-[0.4em] text-yellow-300 mb-4 relative">
              <span className="relative z-10 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold">
                We're Getting Married
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-lg"></div>
            </h2>
          </div>
          
          {/* Names with stunning gradient and glow effects - MADE BOLD */}
          <div className="relative mb-8">
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-9xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-black drop-shadow-2xl">
                Akansha
              </span>
              <span className="mx-4 font-cormorant italic text-yellow-400 text-6xl md:text-8xl drop-shadow-xl font-bold">
                &
              </span>
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-black drop-shadow-2xl">
                Kush
              </span>
            </h1>
            {/* Enhanced glow effect behind names */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/40 via-orange-600/40 to-red-600/40 blur-3xl -z-10"></div>
          </div>

          {/* Decorative separator with Indian motif */}
          <div className="flex items-center justify-center my-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="mx-4 w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center bg-red-900/50">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          
          <p className="font-montserrat text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join us as we celebrate our love and begin our forever journey together in the sacred bond of marriage
          </p>
          
          <h3 className="font-cormorant text-xl md:text-2xl text-orange-200 italic mb-8 font-medium">
            Sacred Union Date
          </h3>

          {/* Enhanced countdown with Indian styling */}
          <div className="p-8 md:p-10 bg-gradient-to-br from-red-900/80 via-pink-900/70 to-orange-900/80 backdrop-blur-lg rounded-2xl shadow-2xl inline-block mb-8 border-2 border-yellow-400/30 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400"></div>
            
            <Countdown targetDate={weddingDate} />
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-400/20">
            <p className="font-montserrat text-lg md:text-xl text-yellow-200 font-medium">
              April 20th, 2026 | HOTEL ROYAL BISTRO
            </p>
            <p className="font-cormorant text-md text-orange-300 italic mt-2">
              Where two hearts become one
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-30 transition-all duration-300"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.05}px)`,
        }}
      >
        <a href="#our-story" className="text-yellow-400 hover:text-orange-300 transition-colors group">
          <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center group-hover:border-orange-300 group-hover:bg-yellow-400/10 transition-all">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
      
      <AudioPlayer audioSrc={defaultMusic.file} />
    </section>
  );
};

export default HeroSection;
