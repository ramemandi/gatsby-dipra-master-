import { graphql } from "gatsby";

export const NodeStaffFields = graphql`
  fragment NodeStaffFields on ContentfulStaff {
    name
    jobTitle: title
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
  }
`;
