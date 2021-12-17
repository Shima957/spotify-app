import { ChangeEvent, useState } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import SearchResult from '../components/SearchResult';
import useSpotify from '../hooks/useSpotify';

const Home = () => {
  const spotifyApi = useSpotify();
  const [searchResults, setSearchResults] = useState<
    SpotifyApi.TrackObjectFull[] | undefined
  >([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && spotifyApi.getAccessToken()) {
      spotifyApi.searchTracks(e.target.value).then((data) => {
        setSearchResults(data.body.tracks?.items);
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="h-[calc(100%-72px)]">
      <Header />
      <main className="flex flex-col items-center h-full py-10 space-y-10">
        <SearchBox onChange={onChange} />
        <SearchResult searchResults={searchResults} />
      </main>
    </div>
  );
};

export default Home;
