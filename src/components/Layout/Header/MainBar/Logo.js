import * as React from "react";
import styled from "styled-components";
import get from "lodash/get";
import { graphql, useStaticQuery } from "gatsby";
import { Img } from "../../../../classes/Img";
import { GatsbyImage } from "gatsby-plugin-image";
import { WmkLink } from "wmk-lib";

const Wrap = styled.div`
  * {
    transition: all 0.3s ease;
    max-width: 135px;
  }
`;

/**
 * 
 * @param {string} siteTitle 
 * @returns {JSX}
 */
const HeaderLogo = ({ siteTitle }) => {
  const logo = useStaticQuery(graphql`
    query {
      logo: contentfulAsset(title: { eq: "DIPRA Logo" }) {
        title
        gatsbyImageData
        file {
          url
          contentType
        }
      }
    }
  `).logo;
  const logoImg = new Img(logo);
  return (
    <Wrap>
      <WmkLink to={`/`}>
        <GatsbyImage image={get(logoImg, `gatsby`)} alt={siteTitle} />
      </WmkLink>
    </Wrap>
  );
};

export default HeaderLogo;
