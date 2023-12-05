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