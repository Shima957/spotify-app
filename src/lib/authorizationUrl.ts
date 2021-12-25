import spotifyApi from "./spotifyApi"

export default spotifyApi
const scopes = [
  'user-read-email',
  'streaming',
  // "user-library-modify"
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
].join(',')

const params = {
  scope: scopes
}

const queryParamsString = new URLSearchParams(params).toString()

export const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&${queryParamsString.toString()}&state=state`
