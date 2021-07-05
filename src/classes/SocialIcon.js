import * as React from "react";
import get from "lodash/get";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutubeSquare,
  FaPinterestP,
  FaLinkedin,
  FaYelp,
  FaInstagram
} from "react-icons/fa";
import { WmkLink } from "wmk-lib";

// Use as a hashtable to register available icons
const IconList = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  youtube: FaYoutubeSquare,
  pinterest: FaPinterestP,
  linkedin: FaLinkedin,
  yelp: FaYelp,
  instagram: FaInstagram
};

/**
 * @class - Represents a social media icon link
 */
export class SocialIcon {
  /**
   * Create an icon
   * @param {*} node -  ContentfulLink node
   */
  constructor(node) {
    const target = get(node, `target`, "New Window");
    this.alt = `Visit ${get(node, `alt`)}`;
    this.target =
      target === "New Window" ? "_blank" : target ? "_self" : undefined;
    this.to = get(node, `to`);
    this.icon = get(IconList, get(node, `icon`), null);
  }
  /**
   * Renders a social media icon
   * @param {*} _key- special identifier to avoid React key collisions
   * @returns {JSX}
   */
  render(_key = "") {
    const Icon = this.icon;
    const key = _key + this.title;
    return () => <Icon key={key} title={this.title} />;
  }
  /**
   * Renders an icon that is linked
   * to its respective social media page
   * @param {*} _key - special identifier to avoid React key collisions
   * @returns {JSX}
   */
  link(_key = "") {
    const Icon = this.icon;
    const key = _key + this.title;
    return (
      <WmkLink key={key} to={this.to} target={this.target}>
        <Icon title={this.title} />
      </WmkLink>
    );
  }
}

/**
 * @class - Handles a collection of multiple Social Media links
 */
export class SocialIcons {
  /**
   * 
   * @param {Object} node - result of NodeSocialMediaFields fragment 
   */
  constructor(node) {
    const _socials = get(node, `links`);
    const socials = Array.isArray(_socials)
      ? _socials.map((icon) => new SocialIcon(icon))
      : [];
    this.list = socials;
    this.length = socials.length;
  }
    /**
   * Renders each social media icon
   * @param {*} _key - special identifier to avoid React key collisions
   * @returns {JSX}
   */
  renderAll(_key = "") {
    this.list.forEach((icon) => {
      icon.render(_key);
    });
  }
    /**
   * Renders all icons as links
   * @param {*} _key - special identifier to avoid React key collisions
   * @returns {JSX}
   */
  linkAll(_key = "") {
    this.list.forEach((icon) => icon.link(_key));
  }
}
