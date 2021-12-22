import { useEffect, useState, VFC } from 'react';
import spotifyApi from '../lib/spotifyApi';
import { keys } from '../util/TrackKey';

const TrackInfo: VFC<{ trackData: SpotifyApi.TrackObjectFull }> = ({
  trackData,
}) => {
  const [trackFeature, setTrackData] =
    useState<SpotifyApi.AudioFeaturesObject>();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getAudioFeaturesForTrack(trackData.id).then((data) => {
        setTrackData(data.body);
      });
    }
  }, [trackData]);

  return (
    <div className="w-[440px]">
      <div className="flex space-x-2">
        <img src={trackData.album.images[1].url} className="h-32 w-32" />
        <div>
          <p>Track: {trackData.name}</p>
          <p>Artist: {trackData.artists.map((artist) => artist.name)}</p>
          <p>
            Key:{' '}
            {`${keys[trackFeature?.key as number]}
          ${trackFeature?.mode === 0 ? 'min' : 'maj'}
          `}
          </p>
          <p>BPM: {Math.floor(trackFeature?.tempo as number)}</p>
          <p>ReleaseDate: {trackData.album.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;
