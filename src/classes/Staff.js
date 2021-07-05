import get from "lodash/get";
import { ContactInfo } from "./ContactInfo";
import { Img } from "./Img";

/**
 * @class
 * Object that represents staff member
 */
export class StaffMember {
  /**
   *
   * @param {Object} node - result of NodeStaffFields
   */
  constructor(node) {
    const _img = get(node, `image`);
    const contact = get(node, `contactInfo`, null);
    this.name = get(node, `name`);
    this.jobTitle = get(node, `jobTitle`, get(node, `job.title`));
    this.image = _img ? new Img(_img) : null;
    this.contact = contact ? new ContactInfo(contact) : null;
  }
}

export class Staff {
  /**
   *
   * @param {array} edges - collection of NodeStaffFields results
   */
  constructor(edges) {
    const staff = Array.isArray(edges)
      ? edges.map((e) => new StaffMember(e.node))
      : [];
    this.list = staff;
    this.length = staff.length;
  }
}
