import { gql } from "@apollo/client";

export const CREATE_COMPANY=gql`
mutation CreateCompany($input:CreateCompanyInput!){
    vreateCompany(input:$input){company{nodeId
    id
}
}
}
`