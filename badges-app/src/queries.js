import { gql } from '@apollo/client';

export const GET_BADGES = gql`
  query GetBadges {
    getBadges {
      id
      title
      img
      details
      certificate {
        name
        email
        date
        s3Bucket
        s3Key
        signedUrl
      }
    }
  }
`;