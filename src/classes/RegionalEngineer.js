import get from "lodash/get";
import { StaffMember } from "./Staff";
/**
 * @class
 * Object representing DIPRA engineers
 */
export class RegionalEngineer extends StaffMember {
  /**
   *
   * @param {Object} node - result of NodeRegionalEngineerFields
   */
  constructor(node) {
    super(node);
    this.region = get(node, `region`);
  }
}

export class RegionalEngineers {
    /**
     *
     * @param {array} edges - collection of NodeRegionalEngineer results
     */
    constructor(edges) {
      const staff = Array.isArray(edges)
        ? edges.map((e) => new RegionalEngineer(e.node))
        : [];
      this.list = staff;
      this.length = staff.length;
    }
  }
