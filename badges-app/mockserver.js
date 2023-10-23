// mockServer.js
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Badge {
    id: ID!
    title: String!
    details: String!
    imgUrl: String!
    date: String!
    email: String!
    certificate: Certificate
  }

  type Certificate {
    s3Url: String!
  }

  type Query {
    getBadges: [Badge]!
  }

  type Mutation {
    updateBadge(id: ID!, title: String, img: String, details: String, certificate: CertificateInput): Badge
  }

  input CertificateInput {
    name: String
    email: String
    date: String
    s3Bucket: String
    s3Key: String
  }
`;

const mocks = {
  Query: () => ({
    getBadges: () => ([
      {
        id: "1",
        title: "Badge 1",
        details: "Badge 1 details",
        imageUrl: "https://example.com/badge1.png",
        date: new Date().toISOString(),
        email: "user@example.com",
        certificate: {
          s3Url: "https://s3.example.com/cert1.pdf"
        }
      },
      // ... more mock badges ...
    ])
  }),
  // ... other mocks ...
};

const schema = makeExecutableSchema({ typeDefs });
addMocksToSchema({ schema, mocks });

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Mock GraphQL API ready at ${url}`);
});