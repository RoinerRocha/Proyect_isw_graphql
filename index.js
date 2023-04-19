import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getCategoryById, getCategories} from './controllers/category.controller.js';
import { getNewSourceById, getNewSources} from './controllers/newSource.controller.js';
import { getNewsByCat, getNews} from './controllers/news.controller.js';
import { typeDefs } from './graphql_schema.js';
import mongoose from 'mongoose';
const db = mongoose.connect("mongodb://127.0.0.1:27017/proyecto", { useNewUrlParser: true, useUnifiedTopology: true });


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    categories: async () => {
      return await getCategories();
    },
    categoryById: async (parent, args, context, info) => {
      return await getCategoryById(args.id);
    },
    newSources: async () => {
      return await getNewSources();
    },
    newSourceById: async (parent, args, context, info) => {
      return await getNewSourceById(args.id);
    },
    news: async (parent, args, context, info) => {
      return await getNews(args.id);
    },
    newsByCat: async (parent, args, context, info) => {
      return await getNewsByCat(args.id, args.cat);
    },
    version: () => "1.2"
  },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);