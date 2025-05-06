
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const RsvpSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 0,
    dietary: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a server
    console.log('RSVP Submitted:', formData);
    
    toast({
      title: "RSVP Received!",
      description: "Thank you for your response. We're looking forward to celebrating with you!",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guests: 0,
      dietary: '',
      message: ''
    });
  };
  
  return (
    <section id="rsvp" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wedding-mauve">RSVP</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto my-6"></div>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">
            We're excited to celebrate our special day with you. Please let us know if you can make it!
          </p>
          <p className="font-montserrat text-sm text-gray-500 mt-4">
            Kindly respond by January 14th, 2026
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-wedding-blush/20 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-mauve focus:border-wedding-mauve"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-mauve focus:border-wedding-mauve"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="attending" className="block text-sm font-medium text-gray-700 mb-2">
                  Will you be attending?
                </label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-mauve focus:border-wedding-mauve bg-white"
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <Input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-mauve focus:border-wedding-mauve"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Restrictions
              </label>
              <Input
                type="text"
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-mauve focus:border-wedding-mauve"
                placeholder="Vegetarian, Gluten-free, etc."
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message for the Couple
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wedding-mauve focus:border-wedding-mauve"
                placeholder="Share your well wishes or thoughts..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                className="px-8 py-2 bg-wedding-mauve text-white rounded-md hover:bg-wedding-mauve/90 transition-colors duration-300"
              >
                Submit RSVP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
