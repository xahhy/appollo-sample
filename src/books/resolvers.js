const { Book } = require('./book');

const resolvers = {
  Query: {
    books: () => Book.all(),
  },
};

module.exports = {
  resolvers,
};
