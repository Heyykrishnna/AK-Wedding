
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  autoPlay?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Playback prevented by browser:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
    <div className="fixed bottom-8 right-8 z-50 bg-black/50 backdrop-blur-sm rounded-full p-3 shadow-lg border border-wedding-gold/30">
      <audio ref={audioRef} src={audioSrc} loop />
      
      <div className="flex items-center gap-3">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-wedding-mauve hover:bg-wedding-mauve/80 transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? 
            <Pause className="text-white" size={20} /> : 
            <Play className="text-white" size={20} />
          }
        </button>
        
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? 
            <VolumeX className="text-white" size={16} /> : 
            <Volume2 className="text-white" size={16} />
          }
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
