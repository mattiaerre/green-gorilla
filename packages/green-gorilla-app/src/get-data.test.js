import getData from './get-data';

describe.skip('getData', () => {
  test('is a function', () => {
    expect(typeof getData).toBe('function');
  });

  test('should return an object', () => {
    const result = getData('London');
    expect(typeof result).toBe('object');
  });
});
