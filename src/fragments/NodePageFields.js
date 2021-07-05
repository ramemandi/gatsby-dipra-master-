import { graphql } from "gatsby";

export const NodePageFields = graphql`
  fragment NodePageFields on ContentfulPage {
    title
    slug
    parentPath
    subhead
    headline
    sub: subtext {
      text: subtext
    }
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
