import get from "lodash/get";
import { Img } from "./Img";

/**
 * @class
 * Object that represents DIPRA Alliance
 */
export class Alliance {
  /**
   *
   * @param {Object} node - result of NodeAllianceFields
   */
  constructor(node) {
    const _img = get(node, `logo`);
    this.name = get(node, `name`);
    this.copy = get(node, `text.description`);
    this.image = _img ? new Img(_img) : null;
    this.url = get(node, `url`);
  }
}

export class Alliances {
  /**
   *
   * @param {array} edges - collection of NodeAllianceFields results
   */
  constructor(edges) {
    const staff = Array.isArray(edges)
      ? edges.map((e) => new Alliance(e.node))
      : [];
    this.list = staff;
    this.length = staff.length;
  }
}
