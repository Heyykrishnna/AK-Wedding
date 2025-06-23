
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
    <div className="fixed bottom-6 right-6 z-50 group">
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        loop 
        onCanPlayThrough={handleCanPlayThrough}
        onError={handleError}
      />
      
      {/* Main container with reduced size */}
      <div className="relative bg-gradient-to-br from-yellow-400/20 via-orange-400/15 to-red-400/20 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-yellow-400/20 hover:shadow-lg">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl blur-sm"></div>
        
        {/* Content */}
        <div className="relative flex items-center gap-3">
          {/* Play/Pause button with reduced size */}
          <button 
            onClick={togglePlay}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400/80 via-orange-400/70 to-red-400/60 hover:from-yellow-300/90 hover:via-orange-300/80 hover:to-red-300/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group-hover:animate-pulse"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {/* Button inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full blur-md"></div>
            
            {/* Icon with reduced size */}
            <div className="relative z-10">
              {isPlaying ? 
                <Pause className="text-white drop-shadow-lg" size={16} /> : 
                <Play className="text-white drop-shadow-lg ml-0.5" size={16} />
              }
            </div>
          </button>
          
          {/* Mute button with reduced size */}
          <button
            onClick={toggleMute}
            className="relative w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700/60 via-gray-600/70 to-gray-800/60 hover:from-gray-600/70 hover:via-gray-500/80 hover:to-gray-700/70 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-sm border border-white/20"
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          >
            {/* Mute button glow */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
            
            {/* Icon with reduced size */}
            <div className="relative z-10">
              {isMuted ? 
                <VolumeX className="text-white drop-shadow-md" size={12} /> : 
                <Volume2 className="text-white drop-shadow-md" size={12} />
              }
            </div>
          </button>

          {/* Music indicator with smaller bars */}
          {isPlaying && (
            <div className="flex items-center gap-0.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full animate-pulse"
                  style={{
                    height: `${8 + (i % 2) * 3}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating particles effect with reduced count */}
        <div className="absolute -inset-1 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-yellow-400/60 rounded-full animate-float-slow"
              style={{
                top: `${25 + (i * 20)}%`,
                left: `${20 + (i * 20)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Error message with reduced size */}
      {error && (
        <div className="absolute -top-12 left-0 right-0 bg-red-500/90 backdrop-blur-sm text-white text-xs py-1.5 px-3 rounded-lg text-center shadow-lg border border-red-400/30">
          {error}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
