import { gql } from 'apollo-server-koa';

export const interfaces = gql`
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
`;
