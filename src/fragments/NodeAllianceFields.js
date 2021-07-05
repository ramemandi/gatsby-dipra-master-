import { graphql } from "gatsby";

export const NodeAllianceFields = graphql`
  fragment NodeAllianceFields on ContentfulAlliance {
    name: title
    logo {
      title
      gatsbyImageData(width: 162, height: 162)
    }
    text: description {
      description: description
    }
    url
  }
`;
