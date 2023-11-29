import gql from "graphql-tag";

export const GET_COMPANIES = gql`
  query Companies {
    companies {
      nodes {
        id
        nodeId
        translations {
          nodes {
            nodeId
            lang
            name
          }
        }
      }
    }
  }
`;