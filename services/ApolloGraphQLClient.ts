import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

export function ApolloGraphQLClient(jwtToken: string) {
  let apolloLink = undefined;

  if (jwtToken) {
    const url = process.env.APPSYNC_GRAPHQL_ENDPOINT;
    const region = process.env.APPSYNC_REGION;

    const auth = {
      type: process.env.APPSYNC_AUTHENTIFICATION_TYPE,
      apiKey: process.env.APPSYNC_API_KEY,
      jwtToken: jwtToken
    };

    const httpLink = new HttpLink({ uri: url });

    apolloLink = ApolloLink.from([
      // @ts-ignore
      createAuthLink({ url, region, auth }),
      // @ts-ignore
      createSubscriptionHandshakeLink({ url, region, auth }, httpLink)
    ]);
  }

  return new ApolloClient({
    link: apolloLink,
    cache: new InMemoryCache()
  });
}
