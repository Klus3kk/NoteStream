import React, { useState, useRef } from 'react';

type AudioPlayerProps = {
  trackUrl: string;
  trackName: string;
  artist: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ trackUrl, trackName, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player">
      <h3>{trackName} - {artist}</h3>
      <audio ref={audioRef} src={trackUrl} preload="metadata" />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
