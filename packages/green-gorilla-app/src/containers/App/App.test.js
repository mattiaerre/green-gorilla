import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';
import mock from '../../actions/mock';

describe('<App />', () => {
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
