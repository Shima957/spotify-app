import spotifyApi from "./spotifyApi"

export default spotifyApi
const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  // "user-library-modify"
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read',
].join(',')

const params = {
  scope: scopes
}

const queryParamsString = new URLSearchParams(params).toString()

export const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&${queryParamsString.toString()}&state=state`
