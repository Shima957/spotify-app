/* eslint-disable prefer-arrow/prefer-arrow-functions */
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
  callbacks: {
    async jwt({ token, account, user }) {

      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        };
      }

      return token
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session
    }
  }
});
