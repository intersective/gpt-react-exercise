import { gql } from '@apollo/client';

export const GET_BADGES = gql`
  query GetBadges {
    getBadges {
      id
      title
      imageUrl
      details
      email
      date
      certificate {
        s3Url
      }
    }
  }
`;