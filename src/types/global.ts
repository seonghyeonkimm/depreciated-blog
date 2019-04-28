interface ISite {
  siteMetadata: ISiteMetadata;
}

interface IAllMarkdownRemark {
  edges: Array<INode>;
}

interface ISiteMetadata {
  title?: string;
  author?: string;
  social?: string;
}

interface INode {
  node: {
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
    };
    fields: {
      slug: string;
    }
  }
}