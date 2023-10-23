import { gql } from 'apollo-server-koa';
import { mutations } from './mutation';
import { queries } from './queries';
import { interfaces } from './interface';

export const typeDefs = gql`
  ${interfaces}
  ${mutations}
  ${queries}
`;
