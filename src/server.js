const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const books = require('./books');

const typeDef = gql`
  type Query
`;
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: [typeDef, books.typeDef],
  resolvers: [books.resolvers],
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
