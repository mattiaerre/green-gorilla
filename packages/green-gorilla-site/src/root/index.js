const { name, version } = require('../../package.json');
const currentWeather = require('./current-weather');

const root = ({ appid }) => { // eslint-disable-line arrow-body-style
  return {
    info: () => { // eslint-disable-line arrow-body-style
      return {
        name: '➜ ~', // todo: replace w/ `name`
        version
      };
    },
    currentWeather: currentWeather({ appid })
  };
};

module.exports = root;
