const airportCodes = require('../../src/graphql/airport-codes');

describe('airport-codes', () => {
  test('API', () => {
    expect(airportCodes).toMatchSnapshot();
  });

  const scenarios = [
    {
      description: 'city',
      query: { city: 'Torino' }
    },
    {
      description: 'country',
      query: { country: 'Malta' }
    }
  ];

  scenarios.forEach(({ description, query }) => {
    test(`filter by ${description}`, () => {
      expect(airportCodes.resolver(query)).toMatchSnapshot();
    });
  });
});
