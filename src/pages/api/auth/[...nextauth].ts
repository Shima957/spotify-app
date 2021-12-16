import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { authorizationUrl } from '../../../lib/authorizationUrl';

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
      authorization: authorizationUrl
    }),
  ],
});
