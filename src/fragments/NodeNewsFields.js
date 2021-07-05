import { graphql } from "gatsby";

export const NodeNewsFields = graphql`
  fragment NodeNewsFields on ContentfulNews {
    title
    tags
    date
    slug
    pull: pullquote {
      quote: pullquote
    }
    publication
    source: originalSource
    featuredImage {
      gatsbyImageData
      title
    }
    author
    content {
      raw
    }
  }
`;
