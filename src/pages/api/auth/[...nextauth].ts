/* eslint-disable prefer-arrow/prefer-arrow-functions */
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify'
import { authorizationUrl } from '../../../lib/authorizationUrl';
import spotifyApi from '../../../lib/spotifyApi';

const refreshAccessToken = async (token: JWT) => {
  try {
    spotifyApi.setAccessToken(token.accessToke as string);
    spotifyApi.setRefreshToken(token.refreshToken as string);
    const { body: refreshedToken } = await spotifyApi.refreshAccessToken()

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshedToken: refreshedToken.refresh_token ?? token.refreshToken
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError"
    }
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
      authorization: authorizationUrl,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account, user }) {

      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: Date.now() + Number(account.expires_at) * 1000,
        }
      }

      // アクセストークンの期限が切れていなければトークンをそのまま返す
      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      // トークンの期限が切れているなら更新する
      return refreshAccessToken(token)

    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session
    }
  }
});
