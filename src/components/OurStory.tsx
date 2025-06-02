import { useState } from 'react';
import { Flower } from 'lucide-react';

const OurStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'how' | 'first' | 'proposal'>('how');
  
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
    <section id="our-story" className="py-20 md:py-28 bg-gradient-to-br from-purple-100 via-lavender-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced aesthetic flower decorations with stems and petals */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top scattered flowers with detailed petals */}
        <div className="absolute top-12 left-1/4 text-purple-300/40">
          <svg width="60" height="90" viewBox="0 0 60 90" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M30 90 Q28 70 26 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
            {/* Leaves */}
            <ellipse cx="20" cy="65" rx="3" ry="8" transform="rotate(-30 20 65)" opacity="0.4"/>
            <ellipse cx="40" cy="60" rx="2.5" ry="6" transform="rotate(30 40 60)" opacity="0.4"/>
            {/* Flower with detailed petals */}
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
        
        <div className="absolute top-24 right-1/3 text-purple-200/35">
          <svg width="50" height="75" viewBox="0 0 50 75" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M25 75 Q27 60 29 45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
            {/* Leaves */}
            <ellipse cx="18" cy="55" rx="2.5" ry="6" transform="rotate(-25 18 55)" opacity="0.4"/>
            <ellipse cx="35" cy="50" rx="2" ry="5" transform="rotate(25 35 50)" opacity="0.4"/>
            {/* Small delicate flower */}
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
        
        <div className="absolute top-16 right-1/4 text-purple-300/30">
          <svg width="45" height="70" viewBox="0 0 45 70" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M22.5 70 Q24 55 25.5 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
            {/* Small leaves */}
            <ellipse cx="16" cy="50" rx="2" ry="5" transform="rotate(-20 16 50)" opacity="0.4"/>
            <ellipse cx="30" cy="45" rx="1.5" ry="4" transform="rotate(20 30 45)" opacity="0.4"/>
            {/* Tiny flower */}
            <g transform="translate(22.5, 10)">
              <ellipse cx="0" cy="-5" rx="2.5" ry="6" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="6" transform="rotate(72)" opacity="0.6"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="6" transform="rotate(144)" opacity="0.7"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="6" transform="rotate(216)" opacity="0.6"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="6" transform="rotate(288)" opacity="0.7"/>
              <circle cx="0" cy="-5" r="1" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        {/* Middle section flowers */}
        <div className="absolute top-1/2 left-12 text-purple-200/25">
          <svg width="55" height="85" viewBox="0 0 55 85" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M27.5 85 Q25 65 22.5 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
            {/* Leaves */}
            <ellipse cx="15" cy="60" rx="3" ry="7" transform="rotate(-35 15 60)" opacity="0.4"/>
            <ellipse cx="38" cy="55" rx="2.5" ry="6" transform="rotate(35 38 55)" opacity="0.4"/>
            {/* Beautiful flower */}
            <g transform="translate(27.5, 18)">
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(40)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(80)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(120)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(160)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(200)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(240)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(280)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(320)" opacity="0.7"/>
              <circle cx="0" cy="-10" r="2.5" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        <div className="absolute top-1/2 right-12 text-purple-300/25">
          <svg width="55" height="85" viewBox="0 0 55 85" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M27.5 85 Q30 65 32.5 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
            {/* Leaves */}
            <ellipse cx="40" cy="60" rx="3" ry="7" transform="rotate(35 40 60)" opacity="0.4"/>
            <ellipse cx="17" cy="55" rx="2.5" ry="6" transform="rotate(-35 17 55)" opacity="0.4"/>
            {/* Beautiful flower */}
            <g transform="translate(27.5, 18)">
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(40)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(80)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(120)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(160)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(200)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(240)" opacity="0.7"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(280)" opacity="0.6"/>
              <ellipse cx="0" cy="-10" rx="4.5" ry="14" transform="rotate(320)" opacity="0.7"/>
              <circle cx="0" cy="-10" r="2.5" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        {/* Bottom scattered flowers */}
        <div className="absolute bottom-16 left-1/3 text-purple-200/30">
          <svg width="48" height="70" viewBox="0 0 48 70" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M24 70 Q22 55 20 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
            {/* Leaves */}
            <ellipse cx="14" cy="50" rx="2.5" ry="6" transform="rotate(-30 14 50)" opacity="0.4"/>
            <ellipse cx="32" cy="45" rx="2" ry="5" transform="rotate(30 32 45)" opacity="0.4"/>
            {/* Flower */}
            <g transform="translate(24, 12)">
              <ellipse cx="0" cy="-6" rx="3" ry="9" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-6" rx="3" ry="9" transform="rotate(60)" opacity="0.6"/>
              <ellipse cx="0" cy="-6" rx="3" ry="9" transform="rotate(120)" opacity="0.7"/>
              <ellipse cx="0" cy="-6" rx="3" ry="9" transform="rotate(180)" opacity="0.6"/>
              <ellipse cx="0" cy="-6" rx="3" ry="9" transform="rotate(240)" opacity="0.7"/>
              <ellipse cx="0" cy="-6" rx="3" ry="9" transform="rotate(300)" opacity="0.6"/>
              <circle cx="0" cy="-6" r="1.5" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        <div className="absolute bottom-24 right-1/4 text-purple-300/35">
          <svg width="42" height="65" viewBox="0 0 42 65" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M21 65 Q23 50 25 35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
            {/* Leaves */}
            <ellipse cx="30" cy="45" rx="2" ry="5" transform="rotate(25 30 45)" opacity="0.4"/>
            <ellipse cx="12" cy="40" rx="1.5" ry="4" transform="rotate(-25 12 40)" opacity="0.4"/>
            {/* Small flower */}
            <g transform="translate(21, 10)">
              <ellipse cx="0" cy="-5" rx="2.5" ry="7" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="7" transform="rotate(72)" opacity="0.6"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="7" transform="rotate(144)" opacity="0.7"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="7" transform="rotate(216)" opacity="0.6"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="7" transform="rotate(288)" opacity="0.7"/>
              <circle cx="0" cy="-5" r="1" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        <div className="absolute bottom-12 left-1/5 text-purple-200/40">
          <svg width="38" height="60" viewBox="0 0 38 60" fill="currentColor" className="drop-shadow-sm">
            {/* Stem */}
            <path d="M19 60 Q17 45 15 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
            {/* Tiny leaves */}
            <ellipse cx="10" cy="40" rx="1.5" ry="4" transform="rotate(-20 10 40)" opacity="0.4"/>
            <ellipse cx="26" cy="35" rx="1" ry="3" transform="rotate(20 26 35)" opacity="0.4"/>
            {/* Delicate flower */}
            <g transform="translate(19, 8)">
              <ellipse cx="0" cy="-4" rx="2" ry="6" transform="rotate(0)" opacity="0.7"/>
              <ellipse cx="0" cy="-4" rx="2" ry="6" transform="rotate(60)" opacity="0.6"/>
              <ellipse cx="0" cy="-4" rx="2" ry="6" transform="rotate(120)" opacity="0.7"/>
              <ellipse cx="0" cy="-4" rx="2" ry="6" transform="rotate(180)" opacity="0.6"/>
              <ellipse cx="0" cy="-4" rx="2" ry="6" transform="rotate(240)" opacity="0.7"/>
              <ellipse cx="0" cy="-4" rx="2" ry="6" transform="rotate(300)" opacity="0.6"/>
              <circle cx="0" cy="-4" r="0.8" opacity="0.8"/>
            </g>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">Our Love Story</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's a glimpse into our journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10 border-b border-purple-200/50">
            <button 
              onClick={() => setActiveTab('how')} 
              className={`px-6 py-3 font-montserrat text-sm uppercase tracking-wide transition-colors duration-300 ${activeTab === 'how' ? 'text-wedding-mauve border-b-2 border-wedding-mauve' : 'text-gray-500 hover:text-wedding-mauve'}`}
            >
              How We Met
            </button>
            <button 
              onClick={() => setActiveTab('first')} 
              className={`px-6 py-3 font-montserrat text-sm uppercase tracking-wide transition-colors duration-300 ${activeTab === 'first' ? 'text-wedding-mauve border-b-2 border-wedding-mauve' : 'text-gray-500 hover:text-wedding-mauve'}`}
            >
              First Date
            </button>
            <button 
              onClick={() => setActiveTab('proposal')} 
              className={`px-6 py-3 font-montserrat text-sm uppercase tracking-wide transition-colors duration-300 ${activeTab === 'proposal' ? 'text-wedding-mauve border-b-2 border-wedding-mauve' : 'text-gray-500 hover:text-wedding-mauve'}`}
            >
              The Proposal
            </button>
          </div>
          
          <div className="prose max-w-none min-h-[250px] text-center">
            {renderContent()}
          </div>
          
          <div className="mt-16 text-center">
            <p className="italic text-lg text-gray-600 font-cormorant">
              "Love is not about how many days, months, or years you have been together. 
              Love is about how much you love each other every single day."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
