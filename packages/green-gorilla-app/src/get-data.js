import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

const client = new Lokka({ transport: new Transport('/graphql') });

const getData = (city) => {
  return client.query(`
    {
      info {
        name
        version
      },
      currentWeather(city: "${city}") {
        name,
        weather {
          icon
          description
        },
        sys {
          country
        },
        main {
          temp
        },
        dt
      }
    }
    `);
};

export default getData;
