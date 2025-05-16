
import Countdown from './Countdown';

const HeroSection: React.FC = () => {
  // Wedding date in February 2026
  const weddingDate = new Date('2026-02-14T16:00:00');

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-floral">
      {/* Darker overlay with more opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-wedding-mauve/60 to-gray-800/70 pointer-events-none" />
      
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
              February 14th, 2026 | Paradise Gardens
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
    </section>
  );
};

export default HeroSection;
