import { signOut, useSession } from "next-auth/react"
import { useEffect } from "react"
import spotifyApi from "../lib/spotifyApi"

const useSpotify = () => {
  const { data: session } = useSession()

  useEffect(() => {

    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signOut()
      }

      spotifyApi.setAccessToken(session?.accessToken as string)
    }

  }, [session])

  return spotifyApi
}

export default useSpotify
