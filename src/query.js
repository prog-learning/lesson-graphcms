import { gql } from '@apollo/client';

export const GET_QUERY = gql`
  query MyQuery {
    sampleModels {
      id
      isPublish
      markdownContent
      title
      atDate
      createdBy {
        id
        name
      }
    }
  }
`;
