This is Next.js workshop, used for learning purposes of GraphQL by using AWS AppSync and Apollo client.

## Getting Started

Prerequisites:
1) Configured services according to the: https://github.com/matoh/appsync-backend-todo-workshop
2) Services are configured and deployed: AWS CDK, AWS AppSync, AWS DynamoDB, AWS Cognito etc..
3) Duplicate file `.env.example` and name it `.env.local` and `.env.production` and replace example values of env variables

Run the development server:

```bash
npm run dev
```

## Outcomes and learnings from the workshop
Workshop demonstrating querying and mutating data from Dynamo DB data source by using GraphQL (Apollo client) and AWS AppSync, which was configured by AWS CDK. Authentication process is handled by Next.js Auth library.

Experience with AppSync is mixed, as there are not enough of practical examples and there are several AWS libraries for client part, which are lacking documentation.

Also in my [CDK configuration](https://github.com/matoh/appsync-backend-todo-workshop) I am using `@aws-cdk/aws-appsync-alpha`, which is not stable to simplify configuration of VTL (Apache Velocity Template Language) resolvers. This CDK construct simplifying configurations but cannot be used for production environment yet.

AppSync also supporting JavaScript resolvers and Lambda resolvers, which are commonly used, but they are adding complexity to the setup.

Another downside of AppSync is lack of possibilities to run it locally (at least haven't found a convenient way). 

In general AppSync together with AWS Amplify have a steep learning curve mainly due to lack documentation, not clear instruction regarding SDK packages and missing practical examples.

Depends on the use case (if GraphQL subscriptions are requirements or not) but in general I would recommend to use Apollo Server served on AWS Lambda instead of AWS AppSync.