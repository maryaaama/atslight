import gql from "graphql-tag";
import { FULL_CANDIDATE } from "./fragments";

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
  }
`;
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
  }
`;

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

export const QUESTIONNAIRES_BY_CANDIDATE_ID = gql`
  query QuestionnairesByCandidateId($candidateId: Int!) {
    candidate(id: $candidateId) {
      nodeId
      questionnaires(filter: { deletedAt: { isNull: true } }) {
        nodes {
          nodeId
          id
          translations {
            nodes {
              nodeId
              lang
              title
            }
          }
          candidateQuestions(
            filter: { candidateId: { equalTo: $candidateId } }
          ) {
            nodes {
              nodeId
              id
              createdAt
              textValue
              booleanValue
              numberValue
              dateValue
              questionOption {
                nodeId
                id
                translations {
                  nodes {
                    lang
                    nodeId
                    value
                  }
                }
              }
              question {
                nodeId
                id
                type
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
    }
  }
`;

export const GET_JOB_APPLICATIONS = gql`
  query JobsApplications(
    $filter: JobsApplicationFilter
    $orderBy: [JobsApplicationsOrderBy!]
  ) {
    jobsApplications(filter: $filter, orderBy: $orderBy) {
      nodes {
        id
        nodeId
        matchesRank
        pipelineStageId
        evaluation
        candidate {
          nodeId
          ...FullCandidate
        }
      }
    }
  }
  ${FULL_CANDIDATE}
`;
export const GET_CANDIDATE_WITH_APPLICATIONS = gql`
  query CandidateWithApplications($id: Int!) {
    candidate(id: $id) {
      nodeId
      ...FullCandidate
      questionnaires(filter: { deletedAt: { isNull: true } }) {
        nodes {
          nodeId
          id
          translations {
            nodes {
              nodeId
              lang
              title
            }
          }
          candidateQuestions(filter: { candidateId: { equalTo: $id } }) {
            nodes {
              nodeId
              id
              createdAt
              textValue
              booleanValue
              numberValue
              dateValue
              questionOption {
                nodeId
                id
                translations {
                  nodes {
                    lang
                    nodeId
                    value
                  }
                }
              }
              question {
                nodeId
                id
                type
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
    }
  }
  ${FULL_CANDIDATE}
`;

export const GET_CANDIDATES_WITH_APPLICATIONS = gql`
  query CandidatesWithApplications(
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
        nodeId
        ...FullCandidate
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${FULL_CANDIDATE}
`;
export const GET_EVALUATIONS = gql`
  query Evaluations(
    $first: Int
    $offset: Int
    $orderBy: [EvaluationsOrderBy!]
    $filter: EvaluationFilter
  ) {
    evaluations(
      first: $first
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      nodes {
        id
        nodeId
        createdAt
        point
        candidate {
          id
          nodeId
          canEdit
          translations {
            nodes {
              nodeId
              lang
              name
            }
          }
        }
        job {
          nodeId
          id
          translations {
            nodes {
              nodeId
              lang
              title
            }
          }
        }
        user {
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
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
