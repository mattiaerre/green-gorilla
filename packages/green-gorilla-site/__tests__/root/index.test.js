const fetch = require('node-fetch');
const index = require('../../src/root');

describe('index', () => {
  const config = { appid: 'appid' };
  const root = index(config);

  test('root API', () => {
    expect(root).toMatchSnapshot();
    const FUNCTION = 'function';
    expect(typeof root.currentWeather).toBe(FUNCTION);
    expect(typeof root.info).toBe(FUNCTION);
  });

  test('currentWeather()', async () => {
    const weather = {};
    fetch.mockResponse(JSON.stringify(weather));

    const currentWeather = await root.currentWeather({ city: 'London' });

    expect(currentWeather).toEqual(weather);
    expect(currentWeather).toMatchSnapshot();
  });

  test('fetch', () => {
    expect(fetch).toHaveBeenCalled();
    expect(fetch.mock.calls).toMatchSnapshot();
  });

  test('info()', () => {
    expect(root.info()).toMatchSnapshot();
  });
});
