import { graphql } from "gatsby";

export const NodeSocialMediaFields = graphql`
  fragment NodeSocialMediaFields on ContentfulMenu {
    links {
      ... on ContentfulLink {
        alt: title
        target
        icon: linkText
        to: path
      }
    }
  }
`;
