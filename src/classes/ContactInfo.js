import get from "lodash/get";
import { WmkLink } from "wmk-lib";
import * as React from "react";
/**
 * Handles contentful contact info
 */
export class ContactInfo {
  /**
   *
   * @param {Array} node - a ContactInfo node structured as key value pairs
   */
  constructor(node) {
    const info = Array.isArray(node)
      ? node.map((data) => {
          const { value } = data;
          const type = get(data, `type`, "").toLowerCase();
          return {
            to: value,
            text: value,
            target: type === "url" ? "New Window" : "Same Window",
            type: type.match(/phone|fax|cell|mobile|office/)
              ? "tel"
              : type === "email"
              ? "mailto"
              : type
          };
        })
      : [];
    this.list = info;
    this.length = info.length;
  }
  /**
   * Returns JSX of linked contact info
   * @param {string} _key — special id to avoid react key collisions
   */
  jsx(_key = "") {
    return this.list.map((contact, i) => {
      const { to, text, target, type } = contact;
      const key = _key + text + type + i;
      return type === "mailto" ? (
        <WmkLink mailto key={key}>
          {to}
        </WmkLink>
      ) : type === "tel" ? (
        <WmkLink tel key={key}>
          {to}
        </WmkLink>
      ) : (
        <WmkLink to={to} target={target} key={key}>
          {text}
        </WmkLink>
      );
    });
  }
}
