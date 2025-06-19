
import { Button } from "@/components/ui/button";
import { FormValues } from "@/utils/rsvp-utils";
import { CheckCircle, Heart, Users, Utensils } from "lucide-react";

interface RsvpConfirmationProps {
  userResponse: 'attending' | 'not-attending';
  formValues: FormValues;
  onReset: () => void;
}

const RsvpConfirmation = ({ userResponse, formValues, onReset }: RsvpConfirmationProps) => {
  const isAttending = userResponse === 'attending';
  const totalGuests = formValues.guests + 1;

  return (
    <div className="text-center py-8 max-w-md mx-auto">
      {/* Success Icon */}
      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
        isAttending 
          ? 'bg-green-100 text-green-600' 
          : 'bg-orange-100 text-orange-600'
      }`}>
        {isAttending ? (
          <CheckCircle className="w-8 h-8" />
        ) : (
          <Heart className="w-8 h-8" />
        )}
      </div>

      {/* Main Message */}
      <h3 className="text-2xl font-cormorant font-semibold text-wedding-mauve mb-4">
        {isAttending 
          ? 'Your attendance is confirmed!' 
          : 'Thank you for your response'}
      </h3>

      {/* Details Card */}
      <div className="bg-gradient-to-br from-wedding-cream/20 to-wedding-blush/20 rounded-xl p-6 mb-6 border border-wedding-gold/20">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Name:</span>
            <span className="font-medium text-wedding-mauve">{formValues.name}</span>
          </div>
          
          {isAttending && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Total Attendees:
                </span>
                <span className="font-medium text-wedding-mauve">
                  {totalGuests} {totalGuests === 1 ? 'person' : 'people'}
                </span>
              </div>
              
              {formValues.guests > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Additional Guests:</span>
                  <span className="font-medium text-wedding-mauve">
                    {formValues.guests} guest{formValues.guests > 1 ? 's' : ''}
                  </span>
                </div>
              )}
              
              {formValues.dietary && (
                <div className="pt-2 border-t border-wedding-gold/20">
                  <div className="flex items-start gap-2">
                    <Utensils className="w-3 h-3 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-600 block">Special Requirements:</span>
                      <span className="text-sm text-wedding-mauve font-medium">
                        {formValues.dietary}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Message */}
      <p className="mb-8 text-gray-600 leading-relaxed">
        {isAttending
          ? `We're absolutely delighted that you'll be joining us for our special day! ${
              formValues.guests > 0 
                ? `We look forward to celebrating with you and your ${formValues.guests} guest${formValues.guests === 1 ? '' : 's'}.` 
                : 'We can\'t wait to celebrate with you!'
            }`
          : "We understand and appreciate you letting us know. While we'll miss having you with us on our special day, we're grateful for your thoughtfulness in responding."}
      </p>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="border-2 border-wedding-mauve text-wedding-mauve hover:bg-wedding-mauve/10 w-full font-medium transition-all duration-300"
          onClick={onReset}
        >
          Update My RSVP
        </Button>
        
        {isAttending && (
          <p className="text-xs text-gray-500 mt-4">
            You'll receive event details and updates via email closer to the date.
          </p>
        )}
      </div>
    </div>
  );
};

export default RsvpConfirmation;
