import get from "lodash/get";

export class Testimonial {
  constructor(node) {
    this.title = get(node, `title`);
  }
}
