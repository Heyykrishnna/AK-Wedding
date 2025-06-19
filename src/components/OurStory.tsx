
import { useState, useEffect, useRef } from 'react';
import { Flower } from 'lucide-react';

const OurStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'how' | 'first' | 'proposal'>('how');
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
  
  const renderContent = () => {
    switch(activeTab) {
      case 'how':
        return (
          <div className="animate-fade-in">
            <h3 className="font-cormorant text-3xl mb-4 text-wedding-mauve">How We Met</h3>
            <p className="mb-4">
              On a quiet morning in the office of TCS, where screens flickered softly and the air buzzed with beginnings, I sat with a new laptop and a thousand dreams folded in code. 
              The light spilled gently across the desk, as if fate itself leaned closer to see what would unfold. And there he was—Kush, like a whispered verse in a familiar song I hadn't known I was waiting for. 
              Our eyes met not with thunder, but with the hush of something eternal, like the first page of a story already written in the stars.
            </p>
            <p>
              He smiled, not with words but with a warmth that melted time, and suddenly the keyboard in front of me seemed less important than the poetry sitting across the room. 
              There was laughter, soft and hesitant, like petals brushing against glass, and in that moment of clumsy introductions and shared tech troubles, love quietly found its way between the bytes and blinking cursors. 
              We didn't know it then, but something sacred had begun—two souls syncing in a rhythm more powerful than any machine could measure.
            </p>
          </div>
        );
      case 'first':
        return (
          <div className="animate-fade-in">
            <h3 className="font-cormorant text-3xl mb-4 text-wedding-mauve">First Date</h3>
            <p className="mb-4">
              For our first official date, James invited Kate to a cooking class where they learned to 
              make authentic Italian cuisine. The kitchen was hot, the pasta was delicious, and the 
              connection was undeniable.
            </p>
            <p>
              We laughed through our failed attempts at proper pasta rolling technique, and by the end 
              of the night, we were covered in flour but completely smitten with each other. It was the 
              perfect start to our journey together.
            </p>
          </div>
        );
      case 'proposal':
        return (
          <div className="animate-fade-in">
            <h3 className="font-cormorant text-3xl mb-4 text-wedding-mauve">The Proposal</h3>
            <p className="mb-4">
              After three wonderful years together, James knew it was time. During a weekend trip to the 
              mountains, he suggested a hike to watch the sunrise. At the summit, with the world awash in 
              golden morning light, he got down on one knee.
            </p>
            <p>
              Kate said yes before he even finished asking, and they celebrated with champagne and 
              breakfast picnic as the sun climbed higher in the sky. It was intimate, perfect, and 
              utterly us.
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      id="our-story" 
      className="py-20 md:py-28 bg-gradient-to-br from-purple-100 via-lavender-50 to-purple-50 relative overflow-hidden"
    >
      {/* Enhanced aesthetic flower decorations with animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated floating flowers */}
        <div className="absolute top-12 left-1/4 text-purple-300/40 animate-float-slow">
          <svg width="60" height="90" viewBox="0 0 60 90" fill="currentColor" className="drop-shadow-sm">
            <path d="M30 90 Q28 70 26 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
            <ellipse cx="20" cy="65" rx="3" ry="8" transform="rotate(-30 20 65)" opacity="0.4"/>
            <ellipse cx="40" cy="60" rx="2.5" ry="6" transform="rotate(30 40 60)" opacity="0.4"/>
            <g transform="translate(30, 15)">
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(45)" opacity="0.6"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(90)" opacity="0.7"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(135)" opacity="0.6"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(180)" opacity="0.7"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(225)" opacity="0.6"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(270)" opacity="0.7"/>
              <ellipse cx="0" cy="-8" rx="4" ry="12" transform="rotate(315)" opacity="0.6"/>
              <circle cx="0" cy="-8" r="2" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        <div className="absolute top-24 right-1/3 text-purple-200/35 animate-float-fast">
          <svg width="50" height="75" viewBox="0 0 50 75" fill="currentColor" className="drop-shadow-sm">
            <path d="M25 75 Q27 60 29 45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <ellipse cx="18" cy="55" rx="2.5" ry="6" transform="rotate(-25 18 55)" opacity="0.4"/>
            <ellipse cx="35" cy="50" rx="2" ry="5" transform="rotate(25 35 50)" opacity="0.4"/>
            <g transform="translate(25, 12)">
              <ellipse cx="0" cy="-6" rx="3" ry="8" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-6" rx="3" ry="8" transform="rotate(60)" opacity="0.6"/>
              <ellipse cx="0" cy="-6" rx="3" ry="8" transform="rotate(120)" opacity="0.7"/>
              <ellipse cx="0" cy="-6" rx="3" ry="8" transform="rotate(180)" opacity="0.6"/>
              <ellipse cx="0" cy="-6" rx="3" ry="8" transform="rotate(240)" opacity="0.7"/>
              <ellipse cx="0" cy="-6" rx="3" ry="8" transform="rotate(300)" opacity="0.6"/>
              <circle cx="0" cy="-6" r="1.5" opacity="0.8"/>
            </g>
          </svg>
        </div>

        {/* More animated decorative elements */}
        <div className="absolute bottom-16 left-1/3 text-purple-200/30 animate-pulse-slow">
          <Flower className="w-8 h-8" />
        </div>
        
        <div className="absolute bottom-24 right-1/4 text-purple-300/35 animate-float-slow">
          <Flower className="w-6 h-6" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">Our Love Story</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's a glimpse into our journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Animated tab buttons */}
          <div className={`flex justify-center mb-10 border-b border-purple-200/50 transition-all duration-1000 delay-200 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
            <button 
              onClick={() => setActiveTab('how')} 
              className={`px-6 py-3 font-montserrat text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${activeTab === 'how' ? 'text-wedding-mauve border-b-2 border-wedding-mauve' : 'text-gray-500 hover:text-wedding-mauve'}`}
            >
              How We Met
            </button>
            <button 
              onClick={() => setActiveTab('first')} 
              className={`px-6 py-3 font-montserrat text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${activeTab === 'first' ? 'text-wedding-mauve border-b-2 border-wedding-mauve' : 'text-gray-500 hover:text-wedding-mauve'}`}
            >
              First Date
            </button>
            <button 
              onClick={() => setActiveTab('proposal')} 
              className={`px-6 py-3 font-montserrat text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${activeTab === 'proposal' ? 'text-wedding-mauve border-b-2 border-wedding-mauve' : 'text-gray-500 hover:text-wedding-mauve'}`}
            >
              The Proposal
            </button>
          </div>
          
          {/* Animated content card */}
          <div className={`card-hover bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 transition-all duration-1000 delay-300 ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <div className="prose max-w-none min-h-[250px] text-center">
              {renderContent()}
            </div>
          </div>
          
          {/* Animated quote */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'scroll-reveal-scale revealed' : 'scroll-reveal-scale'}`}>
            <div className="bg-gradient-to-r from-purple-50 to-lavender-50 rounded-xl p-6 card-hover">
              <p className="italic text-lg text-gray-600 font-cormorant">
                "Love is not about how many days, months, or years you have been together. 
                Love is about how much you love each other every single day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
