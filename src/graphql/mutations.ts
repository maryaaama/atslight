import gql from 'graphql-tag';

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
}`
