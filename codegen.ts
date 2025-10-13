import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Check if the WordPress API URL is available
const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Create minimal fallback types when WordPress API URL is not available
const fallbackConfig: CodegenConfig = {
  overwrite: true,
  schema: `
    type Query {
      posts: [Post]
    }
    
    type Post {
      id: ID!
      title: String!
      content: String!
      excerpt: String!
      slug: String!
      date: String!
      featuredImage: MediaItem
      author: User
      categories: [Category]
      tags: [Tag]
    }
    
    type MediaItem {
      node: MediaItemNode
    }
    
    type MediaItemNode {
      sourceUrl: String!
      altText: String
      caption: String
    }
    
    type User {
      node: UserNode
    }
    
    type UserNode {
      name: String!
      avatar: Avatar
    }
    
    type Avatar {
      url: String!
    }
    
    type Category {
      nodes: [CategoryNode]
    }
    
    type CategoryNode {
      name: String!
      slug: String!
    }
    
    type Tag {
      nodes: [TagNode]
    }
    
    type TagNode {
      name: String!
      slug: String!
    }
  `,
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

// Always use fallback config since we're not using WordPress GraphQL
// The blog fetcher handles WordPress REST API and scraping directly
console.log('Using fallback GraphQL schema for blog functionality');
export default fallbackConfig;
