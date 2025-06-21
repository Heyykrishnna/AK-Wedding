
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OurStory from '@/components/OurStory';
import VenueDetails from '@/components/VenueDetails';
import RsvpSection from '@/components/RsvpSection';
import FunctionThemes from '@/components/FunctionThemes';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <HeroSection />
      <OurStory />
      <VenueDetails />
      <RsvpSection />
      <FunctionThemes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
