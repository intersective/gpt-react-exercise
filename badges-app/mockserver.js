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
    category: String!
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
    getBadges: () => {
      const categories = ["badges", "certs", "data"];
      const mockData = [];

      // Extend the mock data with 15 more objects
      for (let i = 4; i <= 18; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        console.log(randomCategory);
        mockData.push({
          id: `${i}`,
          title: `Badge ${i}`,
          details: `Badge ${i} details`,
          imageUrl: `https://via.placeholder.com/150/${getRandomColor()}/FFFFFF?text=Badge${i}`,
          date: new Date().toISOString(),
          email: "user@example.com",
          certificate: {
            s3Url: `https://s3.example.com/cert${i}.pdf`
          },
          category: randomCategory,
        });
      }

      return mockData;
    }
  }),
  // ... other mocks ...
};

// Helper function to generate random colors
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const schemaWithoutMocks = makeExecutableSchema({ typeDefs });
const schemaWithMocks = addMocksToSchema({ schema: schemaWithoutMocks, mocks });

const server = new ApolloServer({ schema: schemaWithMocks });

server.listen().then(({ url }) => {
  console.log(`🚀  Mock GraphQL API ready at ${url}`);
});