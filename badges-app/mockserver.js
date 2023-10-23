// mockServer.js
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Badge {
    id: ID!
    title: String!
    details: String!
    imageUrl: String!
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
        imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Badge1",
        date: new Date().toISOString(),
        email: "user@example.com",
        certificate: {
          s3Url: "https://s3.example.com/cert1.pdf"
        }
      },
      {
        id: "2",
        title: "Badge 2",
        details: "Badge 2 details",
        imageUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Badge2",
        date: new Date().toISOString(),
        email: "user@example.com",
        certificate: {
          s3Url: "https://s3.example.com/cert2.pdf"
        }
      },
      {
        id: "3",
        title: "Badge 3",
        details: "Badge 3 details",
        imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Badge3",
        date: new Date().toISOString(),
        email: "user@example.com",
        certificate: {
          s3Url: "https://s3.example.com/cert3.pdf"
        }
      },
      // ... more mock badges ...
    ])
  }),
  // ... other mocks ...
};
const schemaWithoutMocks = makeExecutableSchema({ typeDefs });
const schemaWithMocks = addMocksToSchema({ schema: schemaWithoutMocks, mocks });

const server = new ApolloServer({ schema: schemaWithMocks });

server.listen().then(({ url }) => {
  console.log(`🚀  Mock GraphQL API ready at ${url}`);
});