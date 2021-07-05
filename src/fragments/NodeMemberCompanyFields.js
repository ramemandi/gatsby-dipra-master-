import { graphql } from "gatsby";

export const NodeMemberCompanyFields = graphql`
  fragment NodeMemberCompanyFields on ContentfulMemberCompany {
    title
    logo {
      title
      gatsbyImageData(width: 162, height: 162)
    }
    full: fullAddress {
      address: fullAddress
    }
    contactInfo {
      type: key
      value
    }
  }
`;
