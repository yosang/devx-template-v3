const add = require('./math.js');

test('That 2 + 2 equals 4', () => {
  expect(add(2, 2)).toBe(4);
});
