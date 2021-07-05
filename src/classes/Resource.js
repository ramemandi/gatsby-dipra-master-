import get from "lodash/get";
import { Img } from "./Img";
import { getHashTable } from "./Page";
import { RichText } from "./RichText";

/**
 * @class - represents a single ContentfulResource node
 */
export class Resource {
/**
 * 
 * @param {Object} node - NodeResourceFields result
 */
  constructor(node) {
    this.title = get(node, `title`);
    this.parentPath = get(node, `parentPath`);
    this.slug = get(node, `slug`);
    this.meta = get(node, `meta.description`);
    this.content = new RichText(get(node, `content`));
    this.mainImage = new Img(get(node, `featuredImage`));
    this.secImage = new Img(get(node, `secondaryImage`));
  }
}

/**
 * @class - represents a collection of ContentfulResource nodes
 */
export class Resources {
  /**
   * 
   * @param {Array} edges Array of NodeResourceFields results
   */
  constructor(edges) {
    const pgs = Array.isArray(edges) ? edges : [];
    const pages = pgs.map((edge) => {
      const newPage = new Resource(edge.node);
      return newPage;
    });
    this.list = pages;
    this.length = pages.length;
    this.slugHash = getHashTable(pages, `slug`);
  }
  /**
   *
   * @param {string} slug
   * @returns {array} Array of matching objects
   */
  matchParent(slug) {
    const all = this.list;
    return all.reduce((match, pg) => {
      if (pg.parent === slug) {
        match.push(pg);
      }
      return match;
    }, []);
  }
  /**
   *
   * @param {Object} pgs Resources object
   * @returns {Resources} object with combined data
   */
  append(pgs) {
    if (pgs instanceof Resources && get(pgs, `pages[0]`) instanceof Resource) {
      this.list = this.list.concat(pgs);
      this.slugHash = getHashTable(this.list, `slug`);
      this.length++;
    }
    return this.list;
  }
  /**
   *
   * @param {string} slug
   * @returns Page object that matches slug
   */
  matchSlug(slug) {
    return get(this, `slugHash[${slug}]`);
  }
}
