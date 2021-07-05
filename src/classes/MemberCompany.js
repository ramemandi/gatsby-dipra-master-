import get from "lodash/get";
import { ContactInfo } from "./ContactInfo";
import { HyperLink } from "./HyperLink";
import { Img } from "./Img";

/**
 * @class
 * Object that represents member company
 */
export class MemberCompany {
  /**
   *
   * @param {Object} node - result of NodeMemberCompanyFields
   */
  constructor(node) {
    const _img = get(node, `logo`);
    const name = get(node, `title`);
    const contact = get(node, `contactInfo`, null);
    this.name = name;
    this.link = new HyperLink({
      to: get(node, `url`),
      target: "New Window",
      name
    });
    this.logo = _img ? new Img(_img) : null;
    this.contact = contact ? new ContactInfo(contact) : null;
  }
}

export class MemberCompanies {
  /**
   *
   * @param {array} edges - collection of NodeMemberCompanyFields results
   */
  constructor(edges) {
    const staff = Array.isArray(edges)
      ? edges.map((e) => new MemberCompany(e.node))
      : [];
    this.list = staff;
    this.length = staff.length;
  }
}
