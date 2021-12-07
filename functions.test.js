const {stringLength} = require('./functions.js');

test('string length', () => {
 expect(stringLength('test')).toBe(4);
});

test('string length less than 1', () => {
 expect(() => stringLength('')).toThrowError('does not meet condition: less than 1 caracter');
});

test('string length more than 10', () => {
 expect(() => stringLength('blablablabla')).toThrowError('does not meet condition: more than 10 caracters');
});