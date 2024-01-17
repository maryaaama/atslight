import gql from "graphql-tag";

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
 export const GET_USER = gql`
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

export const GET_CANDIDATES = gql`
  query Candidates(
    $filter: CandidateFilter
    $orderBy: [CandidatesOrderBy!]
    $first: Int
    $offset: Int
  ) {
    candidates(
      filter: $filter
      orderBy: $orderBy
      first: $first
      offset: $offset
    ) {
      nodes {
        id
        nodeId
        emails
        phones
        photoUrl
        translations {
          nodes {
            lang
            nodeId
            name
          }
        }
        jobs {
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
          }
        }
      }
    }
  }
`;
export const CURRENT_SESSION = gql`
  query CurrentSession {
    currentUser {
      nodeId
      id
      translations {
        nodes {
          nodeId
          lang
          fullname
          initials
          firstname
          lastname
        }
      }
      roles {
        nodes {
          id
          nodeId
          abilities
          isAdmin
          translations {
            nodes {
              nodeId
              lang
              title
            }
          }
        }
      }
      emailVerified
    }
    currentCompany {
      nodeId
      id
      websiteUrl
      translations {
        nodes {
          nodeId
          lang
          name
        }
      }
      languages
      category
      companySize
      logoUrl
      customWebsiteHost
      activeInvoice {
        nodeId
        deletedAt
        subscription {
          nodeId
          maxJobs
          maxCandidates
        }
      }
    }
    currentUserCompanies: companies {
      nodes {
        nodeId
        id
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