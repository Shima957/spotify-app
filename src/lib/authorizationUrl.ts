const scopes = ['streaming', 'user-read-email', 'playlist-read-collaborative'].join(',')
const params = { scopes: scopes }

const queryParamString = new URLSearchParams(params).toString()
export const authorizationUrl = `https://accounts.spotify.com/authorize?${queryParamString}`
