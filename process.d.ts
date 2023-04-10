declare namespace NodeJS {
  export interface ProcessEnv {
    COGNITO_CLIENT_ID: string;
    COGNITO_CLIENT_SECRET: string;
    COGNITO_ISSUER: string;
    COGNITO_LOGOUT_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_DEBUG: string;
    NEXT_PUBLIC_APPSYNC_REGION: string;
    NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT: string;
    NEXT_PUBLIC_APPSYNC_AUTHENTIFICATION_TYPE: string;
    NEXT_PUBLIC_APPSYNC_API_KEY: string;
  }
}
