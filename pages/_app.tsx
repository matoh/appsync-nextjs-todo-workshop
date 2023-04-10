import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import { SessionProvider, useSession } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import { ApolloGraphQLClient } from '../services/ApolloGraphQLClient';

/**
 * Apollo wrapper setting up GraphQl client and wrapping children with ApolloProvider
 * @param children
 */
function ApolloWrapper({ children }: { children: ReactElement }): ReactElement {
  const { data: sessionData } = useSession();
  const jwtToken = sessionData?.access_token;

  return <ApolloProvider client={ApolloGraphQLClient(jwtToken || '')}>{children}</ApolloProvider>;
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <ApolloWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloWrapper>
      </SessionProvider>
    </ChakraProvider>
  );
}
