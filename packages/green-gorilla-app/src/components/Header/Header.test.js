import React from 'react';
import { create } from 'react-test-renderer';
import Header from './Header';
import mock from '../../actions/mock';

test('<Header /> to match snapshot', () => {
  const component = create(
    <Header {...mock.info} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
