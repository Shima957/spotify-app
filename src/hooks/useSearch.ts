import { ChangeEvent } from "react"
import { useState } from 'react'
import useSpotify from './useSpotify'

const useSearch = () => {
  const spotifyApi = useSpotify()
  const [searchResults, setSearchResults] = useState<
    SpotifyApi.TrackObjectFull[] | undefined
  >([]);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const searchRes = await spotifyApi.searchTracks(e.target.value).then((data) => data.body.tracks?.items)
      setSearchResults(searchRes)
    } else {
      setSearchResults([]);
    }
  };

  return { searchResults, onChange }
}

export default useSearch
