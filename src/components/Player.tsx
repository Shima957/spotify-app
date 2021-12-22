import { PauseIcon, PlayIcon } from '@heroicons/react/solid';
import { VFC, useState } from 'react';
import {
  usePlaybackState,
  usePlayerDevice,
} from 'react-spotify-web-playback-sdk';
import spotifyApi from '../lib/spotifyApi';

type Props = {
  trackInfo: SpotifyApi.TrackObjectFull;
};

const Player: VFC<Props> = ({ trackInfo }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const device = usePlayerDevice();
  const playbackState = usePlaybackState();

  const togglePlay = () => {
    if (!isPlaying) {
      spotifyApi.play({
        uris: [trackInfo.uri],
        position_ms: playbackState?.position,
        device_id: device?.device_id,
      });
      setIsPlaying(true);
    } else {
      spotifyApi.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button type="button" className="h-8 w-8" onClick={togglePlay}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
};

export default Player;
