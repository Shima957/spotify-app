import { VFC } from 'react';
import TrackCard from './TrackCard';

type Props = {
  searchResults: SpotifyApi.TrackObjectFull[] | undefined;
};

const SearchResult: VFC<Props> = ({ searchResults }) => {
  return (
    <div className="space-y-4 h-full w-[540px] overflow-auto">
      {searchResults?.map((result) => {
        return <TrackCard key={result.id} result={result} />;
      })}
    </div>
  );
};

export default SearchResult;
