
import RsvpForm from './RsvpForm';

const RsvpSection = () => {
  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a17188' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Decorative corner flourishes */}
      <div className="absolute top-10 left-10 text-wedding-mauve/20">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 10 Q30 5 50 10 T90 15" opacity="0.6"/>
          <path d="M15 25 Q35 20 55 25 T95 30" opacity="0.4"/>
          <circle cx="20" cy="15" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="40" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
          <circle cx="70" cy="18" r="1" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 text-wedding-mauve/20 transform rotate-180">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 10 Q30 5 50 10 T90 15" opacity="0.6"/>
          <path d="M15 25 Q35 20 55 25 T95 30" opacity="0.4"/>
          <circle cx="20" cy="15" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="40" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
          <circle cx="70" cy="18" r="1" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cormorant font-semibold mb-6 text-wedding-mauve">RSVP</h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We would be delighted to have you join us on our special day. Your presence would make our celebration complete.
          </p>
        </div>

        {/* Enhanced card container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream/50 via-transparent to-wedding-blush/30 rounded-2xl"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-6 left-6 text-wedding-gold/30">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="8" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="4" r="1" opacity="0.4"/>
                <circle cx="32" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="4" cy="20" r="1" opacity="0.4"/>
                <circle cx="36" cy="20" r="1" opacity="0.4"/>
                <circle cx="8" cy="32" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="36" r="1" opacity="0.4"/>
                <circle cx="32" cy="32" r="1.5" opacity="0.6"/>
              </svg>
            </div>
            
            <div className="absolute top-6 right-6 text-wedding-gold/30 transform rotate-45">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="8" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="4" r="1" opacity="0.4"/>
                <circle cx="32" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="4" cy="20" r="1" opacity="0.4"/>
                <circle cx="36" cy="20" r="1" opacity="0.4"/>
                <circle cx="8" cy="32" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="36" r="1" opacity="0.4"/>
                <circle cx="32" cy="32" r="1.5" opacity="0.6"/>
              </svg>
            </div>
            
            <div className="absolute bottom-6 left-6 text-wedding-gold/30 transform -rotate-45">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="8" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="4" r="1" opacity="0.4"/>
                <circle cx="32" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="4" cy="20" r="1" opacity="0.4"/>
                <circle cx="36" cy="20" r="1" opacity="0.4"/>
                <circle cx="8" cy="32" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="36" r="1" opacity="0.4"/>
                <circle cx="32" cy="32" r="1.5" opacity="0.6"/>
              </svg>
            </div>
            
            <div className="absolute bottom-6 right-6 text-wedding-gold/30 transform rotate-180">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="8" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="4" r="1" opacity="0.4"/>
                <circle cx="32" cy="8" r="1.5" opacity="0.6"/>
                <circle cx="4" cy="20" r="1" opacity="0.4"/>
                <circle cx="36" cy="20" r="1" opacity="0.4"/>
                <circle cx="8" cy="32" r="1.5" opacity="0.6"/>
                <circle cx="20" cy="36" r="1" opacity="0.4"/>
                <circle cx="32" cy="32" r="1.5" opacity="0.6"/>
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <RsvpForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
