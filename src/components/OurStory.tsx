
import { useState } from 'react';

const OurStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'how' | 'first' | 'proposal'>('how');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'how':
        return (
          <div className="animate-fade-in">
            <h3 className="font-cormorant text-3xl mb-4 text-wedding-mauve">How We Met</h3>
            <p className="mb-4">
              It was a crisp autumn day at the local farmer's market. Kate was selecting fresh flowers 
              for her apartment, and James was buying ingredients for his famous homemade pasta. 
              Their eyes met over a basket of heirloom tomatoes, and the rest, as they say, is history.
            </p>
            <p>
              What started as a casual conversation about cooking turned into a three-hour coffee date, 
              and neither of us have looked back since. Sometimes, love finds you when you're simply 
              going about your day, looking for tomatoes.
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
    <section id="our-story" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">Our Love Story</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's a glimpse into our journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10 border-b border-gray-200">
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
