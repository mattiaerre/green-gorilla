const airportCodes = require('../../src/graphql/airport-codes');

describe('airport-codes', () => {
  test('API', () => {
    expect(airportCodes).toMatchSnapshot();
  });

  const TORINO = 'Torino';
  const MALTA = 'Malta';
  const GATWICK_ID = '502';

  const scenarios = [
    {
      description: `filter by city: ${TORINO}`,
      query: { city: TORINO }
    },
    {
      description: `filter by city: ${TORINO}`,
      query: { city: TORINO, country: '' }
    },
    {
      description: `filter by country: ${MALTA}`,
      query: { country: MALTA }
    },
    {
      description: `filter by country: ${MALTA}`,
      query: { city: '', country: MALTA }
    },
    {
      description: `filter by id: ${GATWICK_ID}`,
      query: { id: GATWICK_ID }
    }
  ];

  scenarios.forEach(({ description, query }) => {
    test(description, () => {
      expect(airportCodes.resolver(query)).toMatchSnapshot();
    });
  });
});

// url: http://localhost:9000/graphql?query=%7B%0A%20%20airportCodes(city%3A%22Milan%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20city%0A%20%20%20%20country%0A%20%20%20%20iata%0A%20%20%20%20icao%0A%20%20%7D%0A%7D%0A
