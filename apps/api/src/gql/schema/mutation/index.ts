import { gql } from 'apollo-server-koa';

export const mutations = gql`
  type Mutation {
    updateBadge(input: UpdateBadgeInput!): Badge!
  }

  input UpdateBadgeInput {
    id: ID!
    title: String
    img: String
    details: String
    certificate: CertificateInput!
  }

  input CertificateInput {
    name: String
    email: String
    date: String
    s3Bucket: String
    s3Key: String
  }
`;
