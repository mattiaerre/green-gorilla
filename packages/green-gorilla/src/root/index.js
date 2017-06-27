const { name, version } = require('../../package.json');

const root = () => { // eslint-disable-line arrow-body-style
  return {
    info: () => { // eslint-disable-line arrow-body-style
      return {
        name,
        version
      };
    },
    currentWeather: () => { // eslint-disable-line arrow-body-style
      return {
        name: 'London',
        weather: [
          {
            icon: '09d',
            description: 'light intensity drizzle'
          }
        ],
        sys: {
          country: 'GB'
        },
        main: {
          temp: 280.32
        }
      };
    }
  };
};

module.exports = root;
