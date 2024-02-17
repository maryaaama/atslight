import gql from "graphql-tag";
import { FULL_JOB } from "./fragments";

export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($input: UpdateCompanyInput!) {
    updateCompany(input: $input) {
      company {
        nodeId
        id
        translations {
          nodes {
            nodeId
            name
            lang
          }
        }
        languages
        category
        companySize
        customWebsiteHost
        logoUrl
      }
    }
  }
`;
export const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      company {
        nodeId
        id
      }
    }
  }
`;
export const CREATE_PRESIGND_UPLOAD_LINK = gql`
  mutation createPresignedUploadLink($input: CreatePresignedUploadLinkInput!) {
    createPresignedUploadLink(input: $input) {
      getURL
      postURL
      formData
      fileKey
    }
  }
`;
export const UPDATE_JOB = gql`
  mutation UpdateJob($input: UpdateJobInput!) {
    updateJob(input: $input) {
      job {
        nodeId
        ...FullJob
      }
    }
  }
  ${FULL_JOB}
`;

export const UPDATE_JOB_ALTERNATIVE = gql`
  mutation UpdateJobAlternative($input: UpdateJobInput__!) {
    updateJob__(input: $input) {
      job {
        nodeId
        ...FullJob
      }
    }
  }
  ${FULL_JOB}
`;
