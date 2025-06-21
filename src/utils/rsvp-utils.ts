
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  guests: z.coerce.number()
    .min(0, "Number of guests cannot be negative")
    .max(5, "We're sorry, but we're currently accepting a maximum of 5 additional guests per invitation"),
  dietary: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const checkExistingRsvp = async (name: string, email: string) => {
  const { data, error } = await supabase
    .from('rsvp_responses')
    .select('name, email')
    .or(`name.eq.${name},email.eq.${email}`)
    .limit(1);
  
  if (error) {
    console.error("Error checking existing RSVP:", error);
    return { exists: false, matchType: null };
  }
  
  if (data && data.length > 0) {
    const match = data[0];
    if (match.name === name && match.email === email) {
      return { exists: true, matchType: 'both' };
    } else if (match.name === name) {
      return { exists: true, matchType: 'name' };
    } else if (match.email === email) {
      return { exists: true, matchType: 'email' };
    }
  }
  
  return { exists: false, matchType: null };
};

export const submitRsvp = async (formData: FormValues, attending: boolean) => {
  // Check for existing RSVP first
  const existingCheck = await checkExistingRsvp(formData.name, formData.email);
  
  if (existingCheck.exists) {
    throw new Error('DUPLICATE_RSVP');
  }
  
  // Format dietary restrictions field to handle empty string properly
  const dietaryValue = formData.dietary?.trim() || null;
  
  // Create a new record in the rsvp_responses table
  const { error } = await supabase
    .from('rsvp_responses')
    .insert({
      name: formData.name,
      email: formData.email,
      guests: formData.guests,
      attending: attending,
      dietary: dietaryValue,
    });
  
  if (error) {
    console.error("Error details:", error);
    
    // Check if it's a duplicate key error (fallback check)
    if (error.code === '23505') {
      throw new Error('DUPLICATE_RSVP');
    }
    
    throw error;
  }
  
  return { success: true };
};
