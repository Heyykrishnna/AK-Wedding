
import { Button } from "@/components/ui/button";
import { FormValues } from "@/utils/rsvp-utils";

interface RsvpConfirmationProps {
  userResponse: 'attending' | 'not-attending';
  formValues: FormValues;
  onReset: () => void;
}

const RsvpConfirmation = ({ userResponse, formValues, onReset }: RsvpConfirmationProps) => {
  return (
    <div className="text-center py-8 max-w-md mx-auto">
      <h3 className="text-xl font-medium mb-4">
        {userResponse === 'attending' 
          ? 'You have confirmed your attendance!' 
          : 'Thank you for letting us know you cannot attend.'}
      </h3>
      <p className="mb-6 text-gray-600">
        {userResponse === 'attending'
          ? `We're looking forward to celebrating with you${formValues.guests > 0 
              ? ` and your ${formValues.guests} guest${formValues.guests === 1 ? '' : 's'}` 
              : ''}.`
          : "We'll miss having you with us on our special day."}
      </p>
      <Button 
        variant="outline" 
        className="border-wedding-mauve text-wedding-mauve hover:bg-wedding-mauve/10"
        onClick={onReset}
      >
        Update my RSVP
      </Button>
    </div>
  );
};

export default RsvpConfirmation;
