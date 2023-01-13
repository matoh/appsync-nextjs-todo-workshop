/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
module.exports = {
  // Call federated logout (logout on the auth provider side)
  async redirects() {
    return [
      {
        source: '/logout',
        destination: `${process.env.COGNITO_LOGOUT_URL}?client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=${process.env.NEXTAUTH_URL}`,
        permanent: true
      }
    ];
  }
};
