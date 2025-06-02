
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
      {/* Aesthetic flower decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top scattered flowers */}
        <div className="absolute top-16 left-1/4 text-purple-200/40">
          <Flower className="w-8 h-8 rotate-12" />
        </div>
        <div className="absolute top-32 right-1/3 text-purple-300/30">
          <Flower className="w-6 h-6 -rotate-24" />
        </div>
        <div className="absolute top-24 right-1/4 text-purple-200/35">
          <Flower className="w-5 h-5 rotate-45" />
        </div>
        
        {/* Middle section flowers */}
        <div className="absolute top-1/2 left-16 text-purple-200/25">
          <Flower className="w-7 h-7 rotate-90" />
        </div>
        <div className="absolute top-1/2 right-16 text-purple-300/25">
          <Flower className="w-7 h-7 -rotate-90" />
        </div>
        
        {/* Bottom scattered flowers */}
        <div className="absolute bottom-20 left-1/3 text-purple-200/30">
          <Flower className="w-6 h-6 rotate-180" />
        </div>
        <div className="absolute bottom-32 right-1/4 text-purple-300/35">
          <Flower className="w-5 h-5 -rotate-12" />
        </div>
        <div className="absolute bottom-16 left-1/5 text-purple-200/40">
          <Flower className="w-4 h-4 rotate-60" />
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
