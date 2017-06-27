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
    main: Main
  }

  type Sys {
    country: String
  }

  type Main {
    temp: Float
  }

  type Query {
    info: Info,
    currentWeather: CurrentWeather
  }
`);

module.exports = schema;
