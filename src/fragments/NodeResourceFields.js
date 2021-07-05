import { graphql } from "gatsby";

export const NodeResourceFields = graphql`
  fragment NodeResourceFields on ContentfulResource {
    title
    slug
    parentPath
    featuredImage {
      gatsbyImageData
      title
    }
    secondaryImage {
      gatsbyImageData
      title
    }
    content {
      raw
    }
    meta: metaDescription {
      description: metaDescription
    }
  }
`;
