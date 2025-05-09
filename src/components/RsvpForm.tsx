
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
      await submitRsvp(formData, attending);
      
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
    return <RsvpConfirmation 
      userResponse={userResponse} 
      formValues={form.getValues()} 
      onReset={() => setUserResponse(null)} 
    />;
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <Form {...form}>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
              {isSubmitting ? "Submitting..." : "Yes, I'll be there"}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="border-wedding-mauve text-wedding-mauve hover:bg-wedding-mauve/10"
              onClick={() => form.handleSubmit((data) => handleSubmitRsvp(data, false))()}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sorry, I can't make it"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RsvpForm;
