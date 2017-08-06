import React from 'react';
import { create } from 'react-test-renderer';
import MoraleCheck from './MoraleCheck';

describe('<MoraleCheck />', () => {
  test('should match snapshot', () => {
    const component = create(
      <MoraleCheck handleOnCLick={jest.fn()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
