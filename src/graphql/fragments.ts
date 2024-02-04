import { gql } from "@apollo/client";

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
export const CANDIDATE_WITH_APPLICATIONS = gql`
  fragment CandidateWithApplications on Candidate {
    id
    nodeId
    photoUrl
    translations {
      nodes {
        lang
        nodeId
        name
      }
    }
    jobsApplications {
      nodes {
        nodeId
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
  }
`;
export const FULL_JOB = gql`
  fragment FullJob on Job {
    id
    nodeId
    status
    education
    isRemote
    country
    state
    position
    city
    address
    hoursPerWeek {
      start {
        value
      }
      end {
        value
      }
    }
    languages
    militaryStatus
    genders
    pipelineId
    createdAt
    updatedAt
    publishedAt
    department {
      id
      nodeId
      translations {
        nodes {
          departmentId
          nodeId
          lang
          title
        }
      }
    }
    pipeline {
      id
      nodeId
      translations {
        nodes {
          nodeId
          lang
          title
        }
      }
    }
    fields {
      nodes {
        id
        nodeId
        type
        position
        required
      }
    }
    users {
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
    tags {
      nodes {
        id
        nodeId
        title
      }
    }
    translations {
      nodes {
        nodeId
        title
        lang
        requirements
        description
        fieldOfStudy
        orientation
      }
    }
    jobQuestionnaires {
      nodes {
        nodeId
        questionnaire {
          id
          nodeId
          translations {
            nodes {
              nodeId
              title
              lang
            }
          }
          questions {
            nodes {
              id
              nodeId
              translations {
                nodes {
                  nodeId
                  questionId
                  title
                  lang
                  description
                }
              }
            }
          }
        }
      }
    }
    gradeConditions
    minAgeCondition
    maxAgeCondition
    workExperienceCondition
    knowledges {
      nodes {
        id
        nodeId
        title
      }
    }
    skills {
      nodes {
        id
        nodeId
        title
      }
    }
    competencies {
      nodes {
        id
        nodeId
        title
      }
    }
  }
`;
