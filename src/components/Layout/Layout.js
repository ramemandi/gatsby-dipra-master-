/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header/Header";
import Footer from "./Footer";
import { Menu } from "../../classes/Menu";
import { SocialIcons } from "../../classes/SocialIcon";

/**
 * @component
 * @param {JSX} children- Child nodes/components to be wrapped in layout  
 * @returns {JSX}
 */
const Layout = ({ children }) => {
  /**
   * @query
   * Pulls information from Gatsby GraphQL database
   * based on given query parameters.
   * ... denotes a query fragment (pulled from external file)
   */
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      megaMenu: contentfulMenu(title: { eq: "Mega Menu" }) {
        ...NodeMenuFields
      }
      socialMenu: contentfulMenu(title: { eq: "Social Media" }) {
        ...NodeSocialMediaFields
      }
      footerTopMenu: contentfulMenu(title: { eq: "Footer Top Menu" }) {
        ...NodeMenuFields
      }
      footerBottomMenu: contentfulMenu(title: { eq: "Footer Bottom Menu" }) {
        ...NodeMenuFields
      }
      topbarMenu: contentfulMenu(title: { eq: "Topbar Menu" }) {
        ...NodeMenuFields
      }
    }
  `);
  const megaMenu = new Menu(data.megaMenu);
  const socialMedia = new SocialIcons(data.socialMenu);
  const topbarMenu = new Menu(data.topbarMenu);
  const topMenu = new Menu(data.footerTopMenu);
  const bottomMenu = new Menu(data.footerBottomMenu);
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        topbarMenu={topbarMenu}
        megaMenu={megaMenu}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}>
        <main>{children}</main>
        <Footer
          topMenu={topMenu}
          bottomMenu={bottomMenu}
          socialMedia={socialMedia}
        />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
