import { VFC } from 'react';

type Props = {
  result: SpotifyApi.TrackObjectFull;
};

const TrackCard: VFC<Props> = ({ result }) => {
  return (
    <div className="flex space-x-2">
      <img
        src={result.album.images[1]?.url}
        alt="jacket"
        className="h-36 w-36"
      />
      <div className="space-y-1">
        <div>{result.name}</div>
        <div>{result.artists.map((artist) => artist.name)}</div>
      </div>
    </div>
  );
};

export default TrackCard;
