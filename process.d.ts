declare namespace NodeJS {
  export interface ProcessEnv {
    COGNITO_CLIENT_ID: string;
    COGNITO_CLIENT_SECRET: string;
    COGNITO_ISSUER: string;
    COGNITO_LOGOUT_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_DEBUG: string;
    APPSYNC_REGION: string;
    APPSYNC_GRAPHQL_ENDPOINT: string;
    APPSYNC_AUTHENTIFICATION_TYPE: string;
    APPSYNC_API_KEY: string;
  }
}
