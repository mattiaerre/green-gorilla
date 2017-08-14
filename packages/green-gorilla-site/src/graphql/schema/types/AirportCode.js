const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const AirportCode = new GraphQLObjectType({
  name: 'AirportCode',
  fields: {
    id: { type: GraphQLString },
    name: {
      type: GraphQLString,
      resolve: obj => (obj.name.toUpperCase())
    },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    iata: { type: GraphQLString },
    icao: { type: GraphQLString }
  }
});

module.exports = AirportCode;
