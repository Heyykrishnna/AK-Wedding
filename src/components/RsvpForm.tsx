
import { useState, useEffect } from 'react';
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
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  guests: z.coerce.number().min(0).max(10),
  dietary: z.string().optional(),
});

const RsvpForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userResponse, setUserResponse] = useState<'attending' | 'not-attending' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: 0,
      dietary: '',
    },
  });

  // Load existing RSVP data if user is authenticated
  useEffect(() => {
    const loadUserRsvp = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('attending, guests, dietary_restrictions')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        if (data) {
          if (data.attending !== null) {
            setUserResponse(data.attending ? 'attending' : 'not-attending');
          }
          form.setValue('guests', data.guests || 0);
          form.setValue('dietary', data.dietary_restrictions || '');
        }
      } catch (error) {
        console.error('Error loading RSVP data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserRsvp();
  }, [user, form]);

  const handleSubmitRsvp = async (formData: z.infer<typeof formSchema>, attending: boolean) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit your RSVP.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          attending: attending,
          guests: formData.guests,
          dietary_restrictions: formData.dietary,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      setUserResponse(attending ? 'attending' : 'not-attending');
      
      toast({
        title: "RSVP Submitted",
        description: `Thank you for your response! We ${attending ? 'look forward to seeing you' : 'will miss you'}.`,
      });
    } catch (error: any) {
      toast({
        title: "Error submitting RSVP",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wedding-mauve"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-8 max-w-md mx-auto">
        <h3 className="text-xl font-medium mb-4">Please sign in to RSVP</h3>
        <p className="mb-6 text-gray-600">
          You need to create an account or sign in to submit your RSVP for our wedding.
        </p>
        <Link to="/auth">
          <Button className="bg-wedding-mauve hover:bg-wedding-mauve/80">
            Sign in to RSVP
          </Button>
        </Link>
      </div>
    );
  }

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

          <div className="flex gap-4 justify-center mb-6">
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
        </form>
      </Form>
    </div>
  );
};

export default RsvpForm;
