const airports = require('airport-codes/airports.json');

const resolver = ({ id, city, country }) => {
  let result = airports.filter(e => e.iata !== '' && e.icao !== '\\N');
  if (id) {
    result = result.filter(e => (e.id === id));
  }
  if (city) {
    result = result.filter(e => (e.city.toLowerCase().includes(city.toLowerCase())));
  }
  if (country) {
    result = result.filter(e => (e.country.toLowerCase().includes(country.toLowerCase())));
  }
  return result;
};

module.exports = resolver;
