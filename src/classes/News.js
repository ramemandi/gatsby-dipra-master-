import get from "lodash/get";
import { Img } from "./Img";
import { getHashTable } from "./Page";
import { RichText } from "./RichText";
import { Tag } from "./Tag";

export class NewsArticle {
  constructor(node) {
    // console.log('node in blog class: ', node);
    const databaseId = get(node, `databaseId`);
    const tags = get(node, `tags.nodes`, get(node, `tags`, []));
    const image = new Img(get(node, `featuredImage`, get(node, `image`)));
    this.title = get(node, `title`);
    this.author = get(node, `author.node`, get(node, `author`));
    this.date = new Date(get(node, `date`));
    this.tags = Array.isArray(tags) ? tags.map((t) => new Tag(t)) : [];
    this.slug = get(node, `slug`);
    this.image = image ? image : null;
    // This will be modified to add an identifier for Cision XML feed
    this.contentSource = databaseId ? "wp" : get(node, `contentSource`, "ctfl");
    this.content = new RichText(get(node, `content`));
    this.quote = get(node, `pull.quote`);
    this.source = get(node, `source`);
    this.publication = get(node, `publication`);
  }
}

export class News {
  constructor(edges) {
    // get raw blog data
    const rawBlogs = Array.isArray(edges)
      ? edges.map((e) => new NewsArticle(e.node))
      : [];
    // overwrite slug conflicts with CTFL data
    const merged = rawBlogs.reduce((merge, blog) => {
      merge[blog.slug] = blog;
      return merge;
    }, {});
    // turn merged data back into array
    const blogs = Object.keys(merged).map((key) => merged[key]);
    // create hash table for each category slug
    const catHash = blogs.reduce((hash, blog) => {
      const tags = get(blog, `tags`, []);
      tags.forEach((tag) => {
        if (!hash[tag.slug]) {
          hash[tag.slug] = { ...tag, list: [] };
        }
        hash[tag.slug].list.push(blog);
      });
      return hash;
    }, {});
    this.list = blogs;
    this.length = blogs.length;
    this.tags = catHash;
    this.slugHash = getHashTable(blogs, `slug`);
  }
  getTag(tagSlug) {
    return get(this, `categories[${tagSlug}]`);
  }
  getSlug(slug) {
    return get(this, `slugHash[${slug}]`);
  }
}
