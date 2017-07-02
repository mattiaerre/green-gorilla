const fetch = require('node-fetch');
const { name, version } = require('../../package.json');

const root = ({ appid }) => { // eslint-disable-line arrow-body-style
  return {
    info: () => { // eslint-disable-line arrow-body-style
      return {
        name: '➜ ~', // todo: replace w/ `name`
        version
      };
    },
    currentWeather: async ({ city }) => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;
      const currentWeather = await fetch(url)
        .then(response => (response.json)())
        .then(data => (data));
      return currentWeather;
    }
  };
};

module.exports = root;
