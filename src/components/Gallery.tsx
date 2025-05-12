
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Gallery: React.FC = () => {
  const placeholderImages = [
    "https://i.postimg.cc/25ddH1n1/IMG-20250512-WA0016-2.jpg",
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
        
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {placeholderImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-lg shadow-md group p-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
