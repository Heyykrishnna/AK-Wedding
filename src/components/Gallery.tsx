
const Gallery: React.FC = () => {
  const placeholderImages = [
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  ];
  
  return (
    <section id="gallery" className="py-20 md:py-28 bg-wedding-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">Photo Gallery</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            A glimpse into our journey together. More memories to be added after our special day!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placeholderImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image} 
                  alt={`Couple photo ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-cormorant text-xl">Our Story</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-colors duration-300 rounded-md font-montserrat uppercase tracking-wide text-sm"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
