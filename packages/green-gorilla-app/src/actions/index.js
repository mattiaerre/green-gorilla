import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

const client = new Lokka({ transport: new Transport('/graphql') });

const getData = () => {
  return client.query(`
    {
      info {
        name
        version
      },
      currentWeather {
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
        }
      }
    }
    `);
};

export default getData;
