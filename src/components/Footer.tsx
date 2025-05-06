
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-wedding-mauve text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl mb-4">Kate & James</h2>
          <div className="flex justify-center items-center mb-6">
            <div className="w-8 h-px bg-white/70 mr-4"></div>
            <Heart className="w-5 h-5" />
            <div className="w-8 h-px bg-white/70 ml-4"></div>
          </div>
          
          <p className="font-montserrat text-sm mb-8">
            Thank you for being part of our special day!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300">Home</a>
            <a href="#our-story" className="text-white/80 hover:text-white transition-colors duration-300">Our Story</a>
            <a href="#details" className="text-white/80 hover:text-white transition-colors duration-300">Details</a>
            <a href="#rsvp" className="text-white/80 hover:text-white transition-colors duration-300">RSVP</a>
            <a href="#gallery" className="text-white/80 hover:text-white transition-colors duration-300">Gallery</a>
          </div>
          
          <p className="text-sm text-white/70">
            &copy; {currentYear} Kate & James Wedding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
