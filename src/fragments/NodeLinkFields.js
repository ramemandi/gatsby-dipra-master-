import { graphql } from "gatsby";

export const NodeLinkFields = graphql`
  fragment NodeLinkFields on ContentfulLink {
    title
    text: linkText
    to: path
    target
  }
`;
