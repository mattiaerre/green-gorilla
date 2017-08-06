import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  const mock = {
    info: {
      name: 'red-rhinoceros',
      version: '2.0.0-alpha.4'
    },
    currentWeather: {
      name: 'London',
      weather: [
        { icon: '09d', description: 'shower rain' }
      ],
      sys: { country: 'GB' },
      main: { temp: 23.33 },
      dt: 1499694600
    }
  };

  const getData = Promise.resolve(mock);

  const props = {
    actions: {
      getData: () => (getData)
    }
  }

  test('constructor', () => {
    const component = create(
      <App {...props} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('componentDidMount', async () => {
    const component = create(
      <App {...props} />
    );

    await getData;

    expect(component.toJSON()).toMatchSnapshot();
  });
});
