import get from "lodash/get";
import { HyperLink } from "./HyperLink";

/**
 * @class
 * Helper class for menu queries
 * Represents a single menuItem node
 * that can be either a page route, resource
 * route, or external hyperlink
 */
export class MenuItem {
  /**
   *    * @param {Object} node - Node data for a valid
   *                             Page, Resource, Link or Menu query
   */
  constructor(node) {
    const resTitle = get(node, `resourceTitle`);
    const pgTitle = get(node, `pageTitle`);
    const linkPath = get(node, `path`);
    const isResource = resTitle
      ? {
          text: resTitle,
          to: `/technical-resources${get(node, `parentPath`)}/${get(
            node,
            `resourceSlug`
          )}`
        }
      : false;
    const isPage = pgTitle
      ? {
          text: pgTitle,
          to: `${get(node, `parentPath`)}/${get(node, `pageSlug`)}`
        }
      : false;
    const isLink = linkPath ? new HyperLink(node) : false;
    this.text = isResource
      ? isResource.text
      : isPage
      ? isPage.text
      : isLink
      ? isLink.text
      : undefined;
    this.to = isResource
      ? isResource.to.replace("//", "/")
      : isPage
      ? isPage.to.replace("//", "/")
      : isLink
      ? isLink.to
      : undefined;
    this.target = isLink ? isLink.target : undefined;
    this.type = isResource
      ? "resource"
      : isPage
      ? "page"
      : isLink
      ? "hyperlink"
      : undefined;
  }
}

/**
 * @class
 * Helper class for menu queries
 * Can travel down a menu that nests other
 * menus as a Menu() class, or resolves
 * individual MenuItem() nodes
 */
export class Menu {
  /**
   *   * @param {Object} node - result of NodeMenuFields query
   */
  constructor(node) {
    const __links = get(node, `links`);
    const _links = Array.isArray(__links) ? __links : [];
    const links = _links.map((link) => {
      const isMenu =
        Array.isArray(get(link, `links`)) && get(link, `links`).length;
      return isMenu ? new Menu(link) : new MenuItem(link);
    });
    const parent = get(node, `menuParent`);
    this.title = get(node, `title`);
    this.parent = parent ? new MenuItem(parent) : null;
    this.links = links;
  }
}
