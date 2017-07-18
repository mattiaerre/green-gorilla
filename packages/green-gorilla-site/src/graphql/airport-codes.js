const airports = require('airport-codes/airports.json');

const TYPE_NAME = 'AirportCode';

const schema = `
  type ${TYPE_NAME} {
    id: String,
    name: String,
    city: String,
    country: String,
    iata: String,
    icao: String
  }
`;

const resolver = ({ city, country }) => {
  let result = airports.filter(e => e.iata !== '' && e.icao !== '\\N');
  if (city) {
    result = result.filter(e => (e.city.toLowerCase().includes(city.toLowerCase())));
  }
  if (country) {
    result = result.filter(e => (e.country.toLowerCase().includes(country.toLowerCase())));
  }
  return result;
};

module.exports = { TYPE_NAME, schema, resolver };
