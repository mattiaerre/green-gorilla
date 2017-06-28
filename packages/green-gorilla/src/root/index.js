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
            icon: '10n',
            description: 'light rain'
          }
        ],
        sys: {
          country: 'GB'
        },
        main: {
          temp: 16.62
        },
        dt: 1473541622,
      };
    }
  };
};

module.exports = root;
