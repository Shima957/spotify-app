import { VFC } from 'react';
import TrackCard from './TrackCard';

type Props = {
  searchResults: SpotifyApi.TrackObjectFull[] | undefined;
  selected: (searchResult: SpotifyApi.TrackObjectFull) => void;
};

const SearchResultList: VFC<Props> = ({ searchResults, selected }) => {
  return (
    <div className="space-y-4 h-1/2 w-[440px] overflow-auto">
      {searchResults?.map((searchResult) => {
        return (
          <TrackCard
            key={searchResult.id}
            searchResult={searchResult}
            selected={selected}
          />
        );
      })}
    </div>
  );
};

export default SearchResultList;
