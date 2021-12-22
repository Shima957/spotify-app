import { useState } from "react"

const useSelected = () => {
  const [trackData, setId] = useState<SpotifyApi.TrackObjectFull>()

  const seleced = (trackData: SpotifyApi.TrackObjectFull) => {
    setId(trackData)
  }

  return { trackData, seleced }
}

export default useSelected
