const {
  GraphQLSchema
} = require('graphql');

const Query = require('./types/Query');

const schema = new GraphQLSchema({
  query: Query
});

module.exports = schema;
