const { buildSchema } = require('graphql');
const airportCodes = require('../graphql/airport-codes');

const schema = buildSchema(`
  type Info {
    name: String,
    version: String
  }

  type Weather {
    icon: String,
    description: String
  }

  type CurrentWeather {
    name: String,
    weather: [Weather],
    sys: Sys,
    main: Main,
    dt: Float
  }

  type Sys {
    country: String
  }

  type Main {
    temp: Float
  }

  ${airportCodes.schema}

  type Query {
    info: Info,
    currentWeather(city: String = "${process.env.CITY}"): CurrentWeather
    airportCodes(id: String, city: String, country: String): [${airportCodes.TYPE_NAME}]
  }
`);

module.exports = schema;
