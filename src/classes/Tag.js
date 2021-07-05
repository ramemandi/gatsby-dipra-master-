import get from "lodash/get";
import slugify from "slugify";

/**
 * Helper function for slugify to get slug format
 * @param {string} title
 * @returns slugified text
 */
export const slugifyTitle = (title) => slugify(title, { lower: true, strict: true });
/**
 * @function
 * Extends Contentful tags to have an additional slug property
 *
 * @param {string} tag - Name of tag
 *
 * @returns {array} - Array of tag objects: {name, slug}
 */
const reshapeCtflTag = (tag) => {
  return (
    tag &&
    typeof tag === "string" && { name: tag.trim(), slug: slugifyTitle(tag) }
  );
};

/**
 * @class
 * Use to represent content model taxonomy items
 * */
export class Tag {
  /**
   * @constructor
   *
   * @param {Object} node - Usually a graphql node
   */
  constructor(node) {
    const fromString = typeof node === "string" ? reshapeCtflTag(node) : null;
    this.name = get(fromString, `name`, get(node, `name`));
    this.slug = get(fromString, `slug`, get(node, `slug`));
  }
}
