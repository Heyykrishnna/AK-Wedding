
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed w-full py-4 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-cormorant font-semibold text-wedding-mauve">
            K&J
          </a>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-wedding-mauve focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Home</a>
            <a href="#our-story" className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Our Story</a>
            <a href="#details" className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Details</a>
            <a href="#rsvp" className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">RSVP</a>
            <a href="#gallery" className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Gallery</a>
          </nav>
        </div>

        {/* Mobile menu */}
        <nav className={`md:hidden absolute left-0 right-0 top-full bg-white/95 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 p-4' : 'max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4 p-2">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Home</a>
            <a href="#our-story" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Our Story</a>
            <a href="#details" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Details</a>
            <a href="#rsvp" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">RSVP</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-wedding-mauve transition-colors duration-300">Gallery</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
