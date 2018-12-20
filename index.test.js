const lib = require('./')

test('adds 1 + 2 to equal 3', () => {
    expect(lib.sum(1, 2)).toBe(3);
  });