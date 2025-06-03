import Countdown from './Countdown';
import AudioPlayer from './AudioPlayer';
import { defaultMusic } from '@/lib/backgroundMusic';
import { Flower } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Wedding date updated to April 20th, 2026
  const weddingDate = new Date('2026-04-20T16:00:00');

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-floral">
      {/* Darker overlay with more opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-wedding-mauve/60 to-gray-800/70 pointer-events-none" />
      
      {/* Enhanced Indian wedding flowers decoration with stems and petals */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner flower with stem */}
        <div className="absolute top-8 left-8 text-wedding-gold/40">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="currentColor" className="drop-shadow-lg">
            {/* Stem */}
            <path d="M40 120 Q38 100 36 80 Q34 60 32 40" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6"/>
            {/* Leaves */}
            <ellipse cx="25" cy="70" rx="8" ry="15" transform="rotate(-30 25 70)" opacity="0.5"/>
            <ellipse cx="55" cy="60" rx="6" ry="12" transform="rotate(45 55 60)" opacity="0.5"/>
            {/* Main flower */}
            <g transform="translate(40, 30)">
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(0)" opacity="0.8"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(45)" opacity="0.7"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(90)" opacity="0.8"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(135)" opacity="0.7"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(180)" opacity="0.8"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(225)" opacity="0.7"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(270)" opacity="0.8"/>
              <ellipse cx="0" cy="-15" rx="8" ry="20" transform="rotate(315)" opacity="0.7"/>
              <circle cx="0" cy="-15" r="4" opacity="0.9"/>
            </g>
          </svg>
        </div>
        
        {/* Top right corner flower with stem */}
        <div className="absolute top-8 right-8 text-wedding-gold/35">
          <svg width="70" height="100" viewBox="0 0 70 100" fill="currentColor" className="drop-shadow-lg">
            {/* Stem */}
            <path d="M35 100 Q37 85 39 70 Q41 55 43 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
            {/* Leaves */}
            <ellipse cx="50" cy="65" rx="6" ry="10" transform="rotate(30 50 65)" opacity="0.5"/>
            <ellipse cx="20" cy="55" rx="5" ry="8" transform="rotate(-45 20 55)" opacity="0.5"/>
            {/* Main flower */}
            <g transform="translate(35, 25)">
              <ellipse cx="0" cy="-12" rx="6" ry="16" transform="rotate(0)" opacity="0.8"/>
              <ellipse cx="0" cy="-12" rx="6" ry="16" transform="rotate(60)" opacity="0.7"/>
              <ellipse cx="0" cy="-12" rx="6" ry="16" transform="rotate(120)" opacity="0.8"/>
              <ellipse cx="0" cy="-12" rx="6" ry="16" transform="rotate(180)" opacity="0.7"/>
              <ellipse cx="0" cy="-12" rx="6" ry="16" transform="rotate(240)" opacity="0.8"/>
              <ellipse cx="0" cy="-12" rx="6" ry="16" transform="rotate(300)" opacity="0.7"/>
              <circle cx="0" cy="-12" r="3" opacity="0.9"/>
            </g>
          </svg>
        </div>
        
        {/* Bottom left decorative flower */}
        <div className="absolute bottom-32 left-16 text-wedding-gold/30">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor" className="drop-shadow-md">
            {/* Stem */}
            <path d="M30 80 Q28 65 26 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            {/* Small leaves */}
            <ellipse cx="20" cy="60" rx="4" ry="8" transform="rotate(-20 20 60)" opacity="0.5"/>
            <ellipse cx="40" cy="55" rx="3" ry="6" transform="rotate(25 40 55)" opacity="0.5"/>
            {/* Flower */}
            <g transform="translate(30, 20)">
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(0)" opacity="0.8"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(72)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(144)" opacity="0.8"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(216)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(288)" opacity="0.8"/>
              <circle cx="0" cy="-10" r="2.5" opacity="0.9"/>
            </g>
          </svg>
        </div>
        
        {/* Bottom right decorative flower */}
        <div className="absolute bottom-32 right-16 text-wedding-gold/30">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor" className="drop-shadow-md">
            {/* Stem */}
            <path d="M30 80 Q32 65 34 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            {/* Small leaves */}
            <ellipse cx="40" cy="60" rx="4" ry="8" transform="rotate(20 40 60)" opacity="0.5"/>
            <ellipse cx="20" cy="55" rx="3" ry="6" transform="rotate(-25 20 55)" opacity="0.5"/>
            {/* Flower */}
            <g transform="translate(30, 20)">
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(0)" opacity="0.8"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(72)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(144)" opacity="0.8"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(216)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="5" ry="12" transform="rotate(288)" opacity="0.8"/>
              <circle cx="0" cy="-10" r="2.5" opacity="0.9"/>
            </g>
          </svg>
        </div>
      </div>
      
      
      <div className="container px-4 py-24 md:py-32 z-10 text-center">
        <div className="animate-fade-in">
          <h2 className="font-montserrat text-sm md:text-base uppercase tracking-[0.3em] text-white mb-4"><b>We're Getting Married</b></h2>
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-wedding-cream font-light mb-6">
            <b>Akansha</b> <span className="font-cormorant italic text-wedding-gold">&</span> <b>Kush</b>
          </h1>

          <div className="w-24 h-px bg-wedding-gold mx-auto my-8"></div>
          
          <p className="font-montserrat text-lg md:text-xl text-wedding-cream max-w-xl mx-auto mb-12">
            Join us as we celebrate our love and begin our forever together.
          </p>
          
          <h3 className="font-cormorant text-xl md:text-2xl text-wedding-cream italic mb-8">
            Tentatively date of marriage
          </h3>

          <div className="p-6 md:p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl inline-block mb-8 border border-wedding-gold/30">
            <Countdown targetDate={weddingDate} />
          </div>
          
          <div className="mt-8">
            <p className="font-montserrat text-md md:text-lg text-wedding-cream">
              April 20th, 2026 | HOTEL ROYAL BISTRO
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#our-story" className="text-wedding-gold hover:text-wedding-cream transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
      
      {/* Add AudioPlayer component */}
      <AudioPlayer audioSrc={defaultMusic.file} />
    </section>
  );
};

export default HeroSection;
