import { gql } from 'apollo-server-koa';

export const queries = gql`
  type Query {
    getBadges: [Badge]!
    
    hello: String
  }
`;
