const fetch = require('node-fetch');
const index = require('../../src/root');

describe('index', () => {
  const weather = {};

  fetch.mockResponses([
    JSON.stringify(weather)
  ]);

  const FUNCTION = 'function';

  const config = { appid: 'appid' };
  const root = index(config);

  test('root', () => {
    expect(root).toMatchSnapshot();
  });

  test('currentWeather', () => {
    expect(typeof root.currentWeather).toBe(FUNCTION);
  });

  test('currentWeather()', async () => {
    const currentWeather = await root.currentWeather({ city: 'London' });
    expect(currentWeather).toEqual(weather);
    expect(currentWeather).toMatchSnapshot();
  });

  test('fetch', () => {
    expect(fetch).toHaveBeenCalled();
    expect(fetch.mock.calls).toMatchSnapshot();
  });

  test('info', () => {
    expect(typeof root.info).toBe(FUNCTION);
  });

  test('info()', () => {
    expect(root.info()).toMatchSnapshot();
  });
});
