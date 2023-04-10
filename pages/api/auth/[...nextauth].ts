import NextAuth, { AuthOptions } from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

export const authOptions: AuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET ,
      issuer: process.env.COGNITO_ISSUER
    })
  ],
  session: {
    maxAge: 24 * 60 * 60 // 1 day
  },
  callbacks: {
    async jwt({ token, account }) {
      // Attach access token into token response as by default tokens (id, access and refresh) are omitted
      if (account) {
        token.access_token = account.access_token || '';
      }

      return token;
    },
    async session({ session, token }) {
      if (token.access_token) {
        // Attach access token to user session
        session.access_token = token.access_token;
      }

      return session;
    }
  },
  debug: !!process.env.NEXTAUTH_DEBUG
};
export default NextAuth(authOptions);
