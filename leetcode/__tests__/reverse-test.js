const reverse = require('../reverse');

test('adds 1 + 2 to equal 3', () => {
  expect(reverse(1, 2)).toBe(3);
});