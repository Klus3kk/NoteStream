"use client"
import React, { useState, useEffect } from 'react';
import AudioPlayer from './components/AudioPlayer';

interface Track {
  name: string;
  artist: string;
  url: string;
}

const HomePage = () => {
  const [trackData, setTrackData] = useState<Track | null>(null);

  useEffect(() => {
    const fetchTrackData = async () => {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `{ track(id: 1) { name artist url } }` })
      });
      const { data } = await response.json();
      setTrackData(data.track);
    };

    fetchTrackData();
  }, []);

  if (!trackData) return <div>Loading...</div>;

  return (
    <div className="home-page">
      <h1>Now Playing</h1>
      <AudioPlayer trackUrl={trackData.url} trackName={trackData.name} artist={trackData.artist} />
    </div>
  );
};

export default HomePage;
