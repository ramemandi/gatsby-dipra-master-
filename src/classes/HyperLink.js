import get from "lodash/get";

/**
 * @class
 * Object that represents exernal hyperlinks
 */
export class HyperLink {
  /**
   * @param {Object} node - result of NodeLinkFields
   */
  constructor(node) {
    const target = get(node, `target`);
    const _text = get(node, `text`);
    const link = {
      text: _text ? _text : get(node, `title`),
      to: get(node, `to`, get(node, `path`)),
      target:
        target === "New Window"
          ? "blank"
          : target === "Same Window"
          ? "self"
          : undefined
    };
    this.text = link ? link.text : undefined;
    this.to = link ? link.to : undefined;
    this.target = link ? link.target : undefined;
    this.name = get(node, `title`, get(node, `name`));
  }
}
