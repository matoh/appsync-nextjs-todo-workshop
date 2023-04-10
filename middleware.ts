import { withAuth,  } from 'next-auth/middleware';

// Redirect user to login page when JWT token is expired
// More info: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isExpired = token ? new Date() > new Date((token.exp as number) * 1000) : false;

      return !isExpired;
    }
  }
});

export const config = {};
