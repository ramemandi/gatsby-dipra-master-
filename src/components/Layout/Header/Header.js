import * as React from "react";
import PropTypes from "prop-types";
import HeaderTopBar from "./TopBar";
import HeaderMainBar from "./MainBar/MainBar";

/**
 * @commponent
 * @param {string} siteTitle
 * @param {Menu} megaMenu
 * @param {Menu} topbarMenu
 * @returns 
 */
const Header = ({ siteTitle, megaMenu, topbarMenu }) => {
  return (
    <header style={{ position: "initial" }}>
      <HeaderTopBar menu={topbarMenu} />
      <HeaderMainBar
        megaMenu={megaMenu}
        siteTitle={siteTitle}
      />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
