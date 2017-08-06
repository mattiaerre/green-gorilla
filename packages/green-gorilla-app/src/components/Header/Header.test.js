import React from 'react';
import { create } from 'react-test-renderer';
import Header from './Header';

test('<Header /> to match snapshot', () => {
  const mock = {
    name: 'red-rhinoceros',
    version: '2.0.0-alpha.4'
  };

  const component = create(
    <Header {...mock} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
