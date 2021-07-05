import get from "lodash/get";
import { Img } from "./Img";
import { RichText } from "./RichText";

/**
 * @function
 * @param {array} obj - array of keyed objects
 * @param {string} param - select key in object to be hash index
 * @returns {Object}
 */
export const getHashTable = (obj, param) =>
  obj && obj.length
    ? obj.reduce((hash, p) => {
        const slug = get(p, param);
        if (typeof slug !== "undefined") {
          hash[slug] = p;
        }
        return hash;
      }, {})
    : {};

export class Page {
  /**
   * @param {Object} node - result of NodePageFields
   */
  constructor(node) {
    this.title = get(node, `title`);
    this.parentPath = get(node, `parentPath`);
    this.slug = get(node, `slug`);
    this.meta = get(node, `meta.description`);
    this.content = new RichText(get(node, `content`));
    this.mainImage = new Img(get(node, `featuredImage`));
    this.secImage = new Img(get(node, `secondaryImage`));
    this.intro = {
      headline: get(node, `headline`),
      subtext: get(node, `sub.text`),
      subhead: get(node, `subhead`)
    };
  }
}

export class Pages {
  /**
   * @param {Array} edges - collection of multiple NodePageFields results
   */
  constructor(edges) {
    const pgs = Array.isArray(edges) ? edges : [];
    const pages = pgs.map((edge) => {
      const newPage = new Page(edge.node);
      return newPage;
    });
    this.list = pages;
    this.length = pages.length;
    this.slugHash = getHashTable(pages, `slug`);
  }
  /**
   *
   * @param {string} slug
   * @returns {Array} Array of matching Page objects
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
   * @param {Pages} pgs Pages object
   * @returns {array} object with combined data
   */
  append(pgs) {
    if (pgs instanceof Pages && get(pgs, `pages[0]`) instanceof Page) {
      this.list = this.list.concat(pgs);
      this.slugHash = getHashTable(this.list, `slug`);
      this.length++;
    }
    return this.list;
  }
  /**
   *
   * @param {string} slug
   * @returns {Page} Page object that matches slug
   */
  matchSlug(slug) {
    return get(this, `slugHash[${slug}]`);
  }
}
