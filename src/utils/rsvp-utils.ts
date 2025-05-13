
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  guests: z.coerce.number().min(0).max(10),
  dietary: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const submitRsvp = async (formData: FormValues, attending: boolean) => {
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
    throw error;
  }
  
  return { success: true };
};
