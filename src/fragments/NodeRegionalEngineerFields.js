import { graphql } from "gatsby";

export const NodeRegionalEngineerFields = graphql`
  fragment NodeRegionalEngineerFields on ContentfulEngineer {
    name: title
    job: jobTitle{
      title: jobTitle
    }
    image: headshot {
      title
      gatsbyImageData
    }
    full: fullAddress {
      address: fullAddress
    }
    contactInfo {
      type: key
      value
    }
    region
  }
`;
