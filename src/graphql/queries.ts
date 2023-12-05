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

export const GET_CANDIDATE = gql`
  query Candidate ($id:Int!) {
    candidate (id:$id) {
        id,
        photoUrl,
        resumeUr
    }
  }
`;
export const GET_JOBS = gql`
 query Jobs(
  $filter: JobFilter
  $orderBy: [JobsOrderBy!]
  $first: Int
  $offset: Int
) {
  jobs(filter: $filter, orderBy: $orderBy, first: $first, offset: $offset) {
    nodes {
      nodeId
      id
      translations {
        nodes {
          lang
          nodeId
          title
        }
      }
      status
      department {
        nodeId
        translations {
          nodes {
            nodeId
            lang
            title
          }
        }
      }
      canManageCandidates
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}`;
 export const GET_USER=gql`
 query Users(
  $first: Int
  $offset: Int
  $orderBy: [UsersOrderBy!]
  $filter: UserFilter
) {
  users(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
    nodes {
      id
      nodeId
      translations {
        nodes {
          nodeId
          lang
          fullname
          initials
        }
      }
    }
  }
}`;