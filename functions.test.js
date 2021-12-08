const {
  stringLength,
  reverseString,
  newCalculator,
  capitalize,
} = require('./functions');

test('string length', () => {
  expect(stringLength('test')).toBe(4);
});

test('string length less than 1', () => {
  expect(() => stringLength('')).toThrowError('does not meet condition: less than 1 caracter');
});

test('string length more than 10', () => {
  expect(() => stringLength('blablablabla')).toThrowError('does not meet condition: more than 10 caracters');
});

test('reversed string:', () => {
  expect(reverseString('khalil')).toBe('lilahk');
});

describe('simple calculator', () => {
  test('add fucntion', () => {
    expect(newCalculator.add(1, 2)).toEqual(3);
    expect(newCalculator.add(3, 2)).toEqual(5);
    expect(newCalculator.add(0, 7)).toEqual(7);
  });

  test('substruct fucntion', () => {
    expect(newCalculator.subtract(2, 2)).toEqual(0);
    expect(newCalculator.subtract(3, 2)).toEqual(1);
    expect(newCalculator.subtract(9, 7)).toEqual(2);
  });

  test('divide fucntion', () => {
    expect(newCalculator.divide(12, 3)).toEqual(4);
    expect(newCalculator.divide(8, 4)).toEqual(2);
    expect(newCalculator.divide(100, 10)).toEqual(10);
  });

  test('multiply fucntion', () => {
    expect(newCalculator.multiply(9, 9)).toEqual(81);
    expect(newCalculator.multiply(5, 8)).toEqual(40);
    expect(newCalculator.multiply(9, 1)).toEqual(9);
  });
});

test('first character capitalized', () => {
  expect(capitalize('khalil')).toBe('Khalil');
});