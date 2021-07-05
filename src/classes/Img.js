import get from "lodash/get";
/**
 * @class
 * Helper class for image queries that will
 * hold data for Static/Dynamic images
 * (via Gatsby)
 */
export class Img {
  /**
   * @param {Object} node - result of an image node query from Contentful
   */
  constructor(node) {
    const gatsby = get(node, `gatsbyImageData`);
    const _url = get(node, `file.url`, get(node, `node.url`));
    const url =
      typeof _url === "string"
        ? _url.indexOf("//") === 0
          ? "https:" + _url
          : _url
        : undefined;
    this.title = get(node, `title`, get(node, `node.title`));
    this.alt = get(node, `title`, get(node, `node.altText`));
    this.src = url;
    this.gatsby = gatsby;
  }
}
