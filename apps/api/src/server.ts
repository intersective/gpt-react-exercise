import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-koa';
import { Server } from 'http';
import Koa, { Context } from 'koa';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { typeDefs } from './gql/schema';
import { resolvers } from './gql/resolver';

export const startServer = async (): Promise<Server> => {
  console.log('Starting GraphQL server.');
  const app = new Koa();

  const apolloServer = new ApolloServer({
    cache: 'bounded',
    introspection: process.env.NODE_ENV !== 'production',
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    context: (ctx: Context) => {
      return ctx;
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env['PORT'] || '8080';

  const server = app.listen(port, () => {
    console.log(
      `🚀⚙️  Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
    );
  });

  return server;
};

export const stopServer = async (server: Server): Promise<void> => {
  await new Promise((resolve) => server.close(resolve));
  console.log(`🚀⚙️  GraphQL server stopped.`);
};
