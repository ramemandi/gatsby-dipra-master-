import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout/Layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { Alliances } from "../classes/Alliance";

const IndexPage = ({ data }) => {
  console.log(data,'9');
  const models = new Alliances(data.models.edges);
  console.log(models);
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    models: allContentfulAlliance {
      edges {
        node {
          ...NodeAllianceFields
        }
      }
    }
  }
`;
