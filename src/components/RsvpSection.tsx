
import RsvpForm from './RsvpForm';

const RsvpSection = () => {
  return (
    <section id="rsvp" className="py-16 bg-wedding-blush/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-cormorant font-semibold mb-4">RSVP</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            We would be delighted to have you join us on our special day. Please let us know if you'll be able to attend.
          </p>
        </div>

        <RsvpForm />
      </div>
    </section>
  );
};

export default RsvpSection;
