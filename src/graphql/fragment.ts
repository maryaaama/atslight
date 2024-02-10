import gql from "graphql-tag";

export const FULL_CANDIDATE = gql`
  fragment FullCandidate on Candidate {
    id
    nodeId
    canEdit
    photoUrl
    resumeUrl
    translations {
      nodes {
        lang
        nodeId
        name
      }
    }
    language
    gender
    emails
    phones
    socialLinks
    links
    militaryStatus
    birthday
    createdAt
    tags: candidateTags(condition: { type: TAG }) {
      nodes {
        nodeId
        tag {
          nodeId
          title
        }
      }
    }
    sources: candidateTags(condition: { type: SOURCE }) {
      nodes {
        nodeId
        tag {
          nodeId
          title
        }
      }
    }
    jobsApplications(orderBy: [CREATED_AT_DESC]) {
      nodes {
        nodeId
        disqualifyReasonId
        evaluation
        pipelineStage {
          nodeId
          type
          translations {
            nodes {
              lang
              nodeId
              title
            }
          }
        }
        job {
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
    evaluations(orderBy: [CREATED_AT_DESC]) {
      nodes {
        id
        nodeId
        point
        createdAt
        user {
          nodeId
          id
          translations {
            nodes {
              nodeId
              lang
              fullname
              initials
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
        draftEvaluation {
          nodeId
          pipelineStage {
            nodeId
            translations {
              nodes {
                nodeId
                lang
                title
              }
            }
          }
        }
        scorecards {
          nodes {
            nodeId
            translations {
              nodes {
                nodeId
                lang
                title
              }
            }
          }
        }
        eventDraftEvaluation {
          nodeId
          id
          event {
            nodeId
            id
            title
          }
        }
      }
    }
    candidateDraftEvaluations(
      orderBy: [CREATED_AT_DESC]
      filter: { deletedAt: { isNull: true } }
    ) {
      nodes {
        nodeId
        id
        userIds
        scorecardIds
        jobId
        candidateId
        createdAt
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
        pipelineStage {
          nodeId
          translations {
            nodes {
              nodeId
              lang
              title
            }
          }
        }
        scorecards {
          nodes {
            nodeId
            translations {
              nodes {
                nodeId
                lang
                title
              }
            }
          }
        }
      }
    }
    candidateEventDraftEvaluations(
      filter: { deletedAt: { isNull: true } }
      orderBy: [CREATED_AT_DESC]
    ) {
      nodes {
        id
        nodeId
        userIds
        scorecardIds
        createdAt
        event {
          nodeId
          title
          startTime
          endTime
          type
          description
        }
        scorecards {
          nodes {
            nodeId
            translations {
              nodes {
                nodeId
                lang
                title
              }
            }
          }
        }
      }
    }
  }
`;