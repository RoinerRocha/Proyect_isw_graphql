// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Player" type defines the queryable fields for every player in our data source.

  type Category {
    name: String
  }
  type NewSource{
    url: String
    name: String
    user_id: String
    category_id: String
  }
  type News{
    title: String
    short_description: String
    permalink: String
    date: String
    news_sources_id: String
    user_id: String
    category_id: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "players" query returns an array of zero or more players (defined above).
  type Query {
    categories: [Category]
    categoryById(id: String): Category
    newSources: [NewSource]
    newSourceById(id: String): NewSource
    news(id: String): [News]
    newsByCat(id: String, cat: String): [News]
    version: String
  }
`;