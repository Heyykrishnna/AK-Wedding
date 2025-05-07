
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  guests: z.coerce.number().min(0).max(10),
  dietary: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RsvpForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userResponse, setUserResponse] = useState<'attending' | 'not-attending' | null>(null);
  
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
      // Generate a UUID for the id field (Note: Supabase actually uses UUIDs not strings)
      // Save RSVP data to Supabase
      const { error } = await supabase
        .from('profiles')
        .insert({
          id: crypto.randomUUID(), // Generate a UUID for the required id field
          full_name: formData.name,
          dietary_restrictions: formData.dietary,
          guests: formData.guests,
          attending: attending,
        });
      
      if (error) {
        throw error;
      }
      
      setUserResponse(attending ? 'attending' : 'not-attending');
      
      toast({
        title: "RSVP Submitted",
        description: `Thank you for your response! We ${attending ? 'look forward to seeing you' : 'will miss you'}.`,
      });
    } catch (error: any) {
      console.error("Error submitting RSVP:", error);
      toast({
        title: "Error submitting RSVP",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (userResponse) {
    return (
      <div className="text-center py-8 max-w-md mx-auto">
        <h3 className="text-xl font-medium mb-4">
          {userResponse === 'attending' 
            ? 'You have confirmed your attendance!' 
            : 'Thank you for letting us know you cannot attend.'}
        </h3>
        <p className="mb-6 text-gray-600">
          {userResponse === 'attending'
            ? `We're looking forward to celebrating with you${form.getValues().guests > 0 
                ? ` and your ${form.getValues().guests} guest${form.getValues().guests === 1 ? '' : 's'}` 
                : ''}.`
            : "We'll miss having you with us on our special day."}
        </p>
        <Button 
          variant="outline" 
          className="border-wedding-mauve text-wedding-mauve hover:bg-wedding-mauve/10"
          onClick={() => setUserResponse(null)}
        >
          Update my RSVP
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <Form {...form}>
        <form className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium">Will you be attending?</h3>
            <p className="text-sm text-gray-500 mt-2">Please let us know by December 1st, 2025</p>
          </div>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com" {...field} />
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
                <FormLabel>Number of additional guests (if applicable)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" max="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dietary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Any dietary restrictions or special requirements?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please let us know of any dietary restrictions or other special requirements."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex gap-4 justify-center mt-8">
            <Button
              type="button"
              className="bg-wedding-mauve hover:bg-wedding-mauve/80"
              onClick={() => form.handleSubmit((data) => handleSubmitRsvp(data, true))()}
              disabled={isSubmitting}
            >
              Yes, I'll be there
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="border-wedding-mauve text-wedding-mauve hover:bg-wedding-mauve/10"
              onClick={() => form.handleSubmit((data) => handleSubmitRsvp(data, false))()}
              disabled={isSubmitting}
            >
              Sorry, I can't make it
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RsvpForm;
