
import { Calendar, Clock } from 'lucide-react';

const VenueDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 md:py-28 bg-wedding-blush/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">Wedding Details</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            We're excited to celebrate our special day with you. Here's everything you need to know.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="font-cormorant text-3xl mb-4 text-wedding-mauve">Ceremony</h3>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="h-5 w-5 text-wedding-gold" />
              <p className="text-gray-700">April 20th, 2026</p>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Clock className="h-5 w-5 text-wedding-gold" />
              <p className="text-gray-700">4:00 PM</p>
            </div>
            <p className="text-gray-600 mb-4">
              Hotel Royal Bistro<br />
              Canada Palace, Nr. Reliance Smart<br />
              Bypass Road, Mehsana, 384 002
            </p>
            <p className="italic text-sm text-gray-500 mb-6">
              The ceremony will be held in the garden pavilion. In case of inclement weather, 
              We will move to the grand hall.
            </p>
            <a 
              href="https://www.google.com/maps/place/Hotel+Royal+Bistro/@23.6177148,72.3432253,602m/data=!3m2!1e3!4b1!4m9!3m8!1s0x395c43ea4a703a1b:0x70bb34b76d1d1d02!5m2!4m1!1i2!8m2!3d23.6177099!4d72.3458002!16s%2Fg%2F11y2spj57f?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-2 bg-wedding-mauve text-white rounded-md hover:bg-wedding-mauve/90 transition-colors duration-300"
            >
              View Map
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="font-cormorant text-3xl mb-4 text-wedding-mauve">Reception</h3>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="h-5 w-5 text-wedding-gold" />
              <p className="text-gray-700">April 20th, 2026</p>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Clock className="h-5 w-5 text-wedding-gold" />
              <p className="text-gray-700">6:00 PM</p>
            </div>
            <p className="text-gray-600 mb-4">
              Hotel Royal Bistro<br />
              Canada Palace, Nr. Reliance Smart<br />
              Bypass Road, Mehsana, 384 002
            </p>
            <p className="italic text-sm text-gray-500 mb-6">
              Dinner, dancing, and a celebration to follow the ceremony. 
              We would like to ask you for cocktail attire.
            </p>
            <a 
              href="https://www.google.com/maps/place/Hotel+Royal+Bistro/@23.6177148,72.3432253,602m/data=!3m2!1e3!4b1!4m9!3m8!1s0x395c43ea4a703a1b:0x70bb34b76d1d1d02!5m2!4m1!1i2!8m2!3d23.6177099!4d72.3458002!16s%2Fg%2F11y2spj57f?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-2 bg-wedding-mauve text-white rounded-md hover:bg-wedding-mauve/90 transition-colors duration-300"
            >
              View Map
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="font-cormorant text-3xl mb-6 text-wedding-mauve text-center">Accommodations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-cormorant text-xl mb-3 text-gray-800">Serenity Grand Hotel</h4>
              <p className="text-gray-600 mb-2">
                1000 Main Street<br />
                Serenity Valley, SV 56789
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Phone:</span> +91 7987398516 <br />
                <span className="font-medium">Group Code:</span> AK2026
              </p>
              <p className="italic text-sm text-gray-500">
                Special room rate available until January 14, 2026
              </p>
            </div>
            
            <div>
              <h4 className="font-cormorant text-xl mb-3 text-gray-800">Hotel Royal Bistro</h4>
              <p className="text-gray-600 mb-2">
                Canada Palace, Nr. Reliance Smart<br />
                Bypass Road, Mehsana, 384 002
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Phone:</span> +91 9098190788<br />
                <span className="font-medium">Group Code:</span> AKWEDDING
              </p>
              <p className="italic text-sm text-gray-500">
                Special room rate available until January 20, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueDetails;
