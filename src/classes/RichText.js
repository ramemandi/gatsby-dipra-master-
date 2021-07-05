import get from "lodash/get";

/**
 * @class - Reshapes Contentful RichText data into
 * usable JSON for rendering. Also keeps track of
 * corresponding Asset/Entry references and associates
 * the data accordingly
 */
export class RichText {
  /**
   *
   * @param {Object} node - a Contentful RichText node
   */
  constructor(node) {
    const _refs = get(node, `references`, []);
    const raw = get(node, `raw`);
    const json = raw ? JSON.parse(raw) : get(node, `json`);
    let refCount = 0;
    this.raw = get(node, `raw`);
    this.json = Array.isArray(get(json, `content`))
      ? {
          ...json,
          content: json.content.map((j) => {
            const { nodeType } = j;
            let r = null;
            if (nodeType.indexOf("embedded-") === 0) {
              r = _refs[refCount];
              refCount++;
            }
            return { ...j, references: r };
          })
        }
      : null;
    this.references = _refs;
  }
}
