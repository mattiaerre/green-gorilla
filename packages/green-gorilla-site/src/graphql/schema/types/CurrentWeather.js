const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} = require('graphql');

const CurrentWeather = new GraphQLObjectType({
  name: 'CurrentWeather',
  fields: {
    name: {
      type: GraphQLString
    },
    dt: {
      type: GraphQLInt
    },
    weather: {
      type: new GraphQLList(
        new GraphQLObjectType(
          {
            name: 'Weather',
            fields: {
              icon: { type: GraphQLString },
              description: { type: GraphQLString }
            }
          })
      )
    },
    sys: {
      type: new GraphQLObjectType(
        {
          name: 'Sys',
          fields: {
            country: { type: GraphQLString }
          }
        }
      )
    },
    main: {
      type: new GraphQLObjectType(
        {
          name: 'Main',
          fields: {
            temp: { type: GraphQLFloat }
          }
        }
      )
    }
  }
});

module.exports = CurrentWeather;
