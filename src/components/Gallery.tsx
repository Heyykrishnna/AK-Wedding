
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Gallery: React.FC = () => {
  const placeholderImages = [
    "https://i.postimg.cc/3rzBxQrJ/IMG-20250512-WA0008-2.jpg",
    "https://i.postimg.cc/JzL5j3Bf/IMG-20250512-WA0010-2.jpg",
    "https://i.postimg.cc/25HdpPXY/IMG-20250512-WA0014-3.jpg",
    "https://i.postimg.cc/g2Hqsw-Vn/IMG-20250512-WA0016-3.jpg",
    "https://i.postimg.cc/pdVQ62Ck/IMG-20250512-WA0022-2.jpg",
    "https://i.postimg.cc/cCddQb0K/IMG-20250512-WA0020-2.jpg",
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
