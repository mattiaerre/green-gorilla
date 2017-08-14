const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const Info = require('./Info');
const { name, version } = require('../../../../package.json');

const CurrentWeather = require('./CurrentWeather');
const currentWeatherResolverfactory = require('../resolvers/current-weather');

const AirportCode = require('./AirportCode');
const airportCodesResolver = require('../resolvers/airport-codes');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    info: {
      type: Info,
      resolve: () => ({ name: '➜ ~', version })
    },
    currentWeather: {
      type: CurrentWeather,
      args: {
        city: { type: GraphQLString }
      },
      resolve: (_, args, ctx) => {
        const resolver = currentWeatherResolverfactory({ appid: ctx.options.appid });
        return resolver({ city: args.city === undefined ? ctx.options.city : args.city });
      }
    },
    airportCodes: {
      type: new GraphQLList(AirportCode),
      args: {
        id: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString }
      },
      resolve: (_, args) => (airportCodesResolver(args))
    }
  }
});

module.exports = Query;
