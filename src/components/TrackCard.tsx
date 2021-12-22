/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import Player from './Player';

type Props = {
  searchResult: SpotifyApi.TrackObjectFull;
  selected: (searchResult: SpotifyApi.TrackObjectFull) => void;
};

const TrackCard: VFC<Props> = ({ searchResult, selected }) => {
  return (
    <div className="flex space-x-2">
      <img
        src={searchResult.album.images[1]?.url}
        alt="jacket"
        className="h-32 w-32"
      />
      <div className="space-y-6">
        <div className="space-y-1">
          <div>{searchResult.name}</div>
          <div>{searchResult.artists.map((artist) => artist.name)}</div>
        </div>

        <div className="flex space-x-2">
          <Player trackInfo={searchResult} />
          <button
            type="button"
            className="bg-[#1DB954] text-white text-center rounded-md py-1 w-[82px]"
            onClick={() => selected(searchResult)}
          >
            詳細を見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
