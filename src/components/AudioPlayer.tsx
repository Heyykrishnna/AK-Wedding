
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  autoPlay?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setError(null);
          })
          .catch(error => {
            console.log('Playback prevented by browser:', error);
            setError('Unable to play audio');
          });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleCanPlayThrough = () => {
    setError(null);
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    console.log('Audio error:', e);
    setError('Error loading audio file');
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    
    // Auto-play if enabled (note: modern browsers require user interaction first)
    if (audio && autoPlay) {
      audio.play().catch(error => {
        console.log('Auto-play prevented by browser:', error);
      });
    }
    
    // Cleanup function
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [autoPlay]);

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        loop 
        onCanPlayThrough={handleCanPlayThrough}
        onError={handleError}
      />
      
      {/* Main container with enhanced blur and glass effect */}
      <div className="relative bg-gradient-to-br from-yellow-400/20 via-orange-400/15 to-red-400/20 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-yellow-400/20 hover:shadow-lg">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl blur-sm"></div>
        
        {/* Content */}
        <div className="relative flex items-center gap-4">
          {/* Play/Pause button with enhanced styling */}
          <button 
            onClick={togglePlay}
            className="relative w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400/80 via-orange-400/70 to-red-400/60 hover:from-yellow-300/90 hover:via-orange-300/80 hover:to-red-300/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group-hover:animate-pulse"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {/* Button inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full blur-md"></div>
            
            {/* Icon */}
            <div className="relative z-10">
              {isPlaying ? 
                <Pause className="text-white drop-shadow-lg" size={22} /> : 
                <Play className="text-white drop-shadow-lg ml-1" size={22} />
              }
            </div>
          </button>
          
          {/* Mute button with refined styling */}
          <button
            onClick={toggleMute}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700/60 via-gray-600/70 to-gray-800/60 hover:from-gray-600/70 hover:via-gray-500/80 hover:to-gray-700/70 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-sm border border-white/20"
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          >
            {/* Mute button glow */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
            
            {/* Icon */}
            <div className="relative z-10">
              {isMuted ? 
                <VolumeX className="text-white drop-shadow-md" size={16} /> : 
                <Volume2 className="text-white drop-shadow-md" size={16} />
              }
            </div>
          </button>

          {/* Music indicator with animated bars */}
          {isPlaying && (
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full animate-pulse"
                  style={{
                    height: `${12 + (i % 2) * 4}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating particles effect */}
        <div className="absolute -inset-2 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/60 rounded-full animate-float-slow"
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${15 + (i * 15)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Error message with enhanced styling */}
      {error && (
        <div className="absolute -top-16 left-0 right-0 bg-red-500/90 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-xl text-center shadow-lg border border-red-400/30">
          {error}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
