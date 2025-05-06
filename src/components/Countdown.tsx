
import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex flex-wrap justify-center gap-4 md:gap-8 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wedding-mauve">
          {timeLeft.days}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-600 mt-2">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wedding-mauve">
          {timeLeft.hours}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-600 mt-2">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wedding-mauve">
          {timeLeft.minutes}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-600 mt-2">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wedding-mauve">
          {timeLeft.seconds}
        </div>
        <div className="text-sm uppercase tracking-widest text-gray-600 mt-2">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
