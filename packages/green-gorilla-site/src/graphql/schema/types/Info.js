const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const Info = new GraphQLObjectType({
  name: 'Info',
  fields: {
    name: { type: GraphQLString },
    version: { type: GraphQLString }
  }
});

module.exports = Info;
