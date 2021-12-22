import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import SearchResultList from '../components/SearchResultList';
import TrackInfo from '../components/TrackInfo';
import useSearch from '../hooks/useSearch';
import useSelected from '../hooks/useSelected';

const Home = () => {
  const { searchResults, onChange } = useSearch();
  const { trackData, seleced } = useSelected();
  const { data: session } = useSession();
  const getOAuthToken = useCallback(
    (callback) => callback(session?.accessToken),
    [session]
  );

  return (
    <WebPlaybackSDK
      deviceName="my-app"
      getOAuthToken={getOAuthToken}
      connectOnInitialized={true}
      volume={0.5}
    >
      <div className="h-[calc(100%-72px)]">
        <Header />
        <main className="flex flex-col items-center h-full py-10 space-y-10">
          <SearchBox onChange={onChange} />
          <SearchResultList searchResults={searchResults} selected={seleced} />
          {trackData && <TrackInfo trackData={trackData} />}
        </main>
      </div>
    </WebPlaybackSDK>
  );
};

export default Home;
