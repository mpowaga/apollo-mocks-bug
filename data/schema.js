const typeDefinitions = `
type User {
  name: String
}

type Post {
  title: String
  authors: [User]!
}

type Query {
  posts: [Post]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
