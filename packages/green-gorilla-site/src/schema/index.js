const { buildSchema } = require('graphql');

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

  type Query {
    info: Info,
    currentWeather(city: String = "${process.env.CITY}"): CurrentWeather
  }
`);

module.exports = schema;
