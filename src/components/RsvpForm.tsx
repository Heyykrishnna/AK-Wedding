
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { formSchema, FormValues, submitRsvp } from '@/utils/rsvp-utils';
import RsvpConfirmation from './RsvpConfirmation';
import { Users, Calendar, Clock, MapPin } from 'lucide-react';

const RsvpForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userResponse, setUserResponse] = useState<'attending' | 'not-attending' | null>(null);
  const [guestCount, setGuestCount] = useState(0);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      guests: 0,
      dietary: '',
    },
  });

  const handleSubmitRsvp = async (formData: FormValues, attending: boolean) => {
    setIsSubmitting(true);

    try {
      await submitRsvp(formData, attending);
      
      setUserResponse(attending ? 'attending' : 'not-attending');
      
      toast({
        title: "RSVP Submitted Successfully",
        description: `Thank you for your response! We ${attending ? 'look forward to celebrating with you' : 'will miss you at our celebration'}.`,
      });
    } catch (error: any) {
      console.error("Error submitting RSVP:", error);
      
      // Handle duplicate RSVP case
      if (error.message === 'DUPLICATE_RSVP') {
        toast({
          title: "Already Registered",
          description: "You have already marked your presence through your name or email ID. If you want to edit your response, please contact the family for assistance.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error Submitting RSVP",
          description: "Something went wrong. Please try again in a moment.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedGuests = form.watch('guests');

  if (userResponse) {
    return <RsvpConfirmation 
      userResponse={userResponse} 
      formValues={form.getValues()} 
      onReset={() => setUserResponse(null)} 
    />;
  }

  return (
    <div className="max-w-lg w-full mx-auto">
      {/* Event Details Header */}
      <div className="bg-gradient-to-r from-wedding-cream/20 to-wedding-blush/20 rounded-xl p-6 mb-8 border border-wedding-gold/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-wedding-mauve">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">April 20, 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-wedding-mauve">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">6:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-wedding-mauve sm:col-span-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Hotel Royal Bistro, Mehsana</span>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-cormorant font-semibold text-wedding-mauve mb-2">
              Will you be joining us?
            </h3>
            <p className="text-sm text-gray-500">Please respond by December 1st, 2025</p>
          </div>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-wedding-mauve font-medium">Your Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    className="border-wedding-gold/30 focus:border-wedding-mauve transition-colors"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-wedding-mauve font-medium">Email Address *</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-wedding-gold/30 focus:border-wedding-mauve transition-colors"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-wedding-mauve font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Additional Guests (Maximum 5)
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="number" 
                      min="0" 
                      max="5" 
                      placeholder="0"
                      className="border-wedding-gold/30 focus:border-wedding-mauve transition-colors"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value) || 0;
                        if (value > 5) {
                          toast({
                            title: "Guest Limit Exceeded",
                            description: "We're sorry, but we're currently accepting a maximum of 5 additional guests per invitation.",
                            variant: "destructive",
                          });
                          return;
                        }
                        field.onChange(value);
                        setGuestCount(value);
                      }}
                    />
                    {watchedGuests > 0 && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <span className="text-xs text-wedding-mauve bg-wedding-cream px-2 py-1 rounded-full">
                          {watchedGuests} guest{watchedGuests > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </FormControl>
                <p className="text-xs text-gray-500 mt-1">
                  Including yourself, total attendees: {(watchedGuests || 0) + 1}
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dietary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-wedding-mauve font-medium">
                  Dietary Restrictions or Special Requirements
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please let us know about any dietary restrictions, allergies, or special accommodations needed..."
                    className="border-wedding-gold/30 focus:border-wedding-mauve transition-colors min-h-[100px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              type="button"
              className="bg-wedding-mauve hover:bg-wedding-mauve/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => form.handleSubmit((data) => handleSubmitRsvp(data, true))()}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                "✨ Yes, I'll be there!"
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="border-2 border-wedding-mauve text-wedding-mauve hover:bg-wedding-mauve/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => form.handleSubmit((data) => handleSubmitRsvp(data, false))()}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-wedding-mauve/30 border-t-wedding-mauve rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                "😔 Sorry, I can't make it"
              )}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 p-4 bg-wedding-cream/30 rounded-lg border border-wedding-gold/20">
            <p className="text-sm text-gray-600">
              Having trouble with your RSVP? Feel free to reach out to us directly.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RsvpForm;
