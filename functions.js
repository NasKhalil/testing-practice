const stringLength = (string) => {
  const strLength = string.length;
  try {
    if (strLength < 1) {
      throw new Error('does not meet condition: less than 1 caracter');
    }
    if (strLength > 10) {
      throw new Error('does not meet condition: more than 10 caracters');
    }
  } finally {
    // return
  }

  return strLength;
};

const reverseString = (string) => {
  const splitStr = string.split('');
  const reverseSplitStr = splitStr.reverse();
  string = reverseSplitStr.join('');
  return string;
};

class Calculator {
  add = (a, b) => a + b;

  subtract = (a, b) => a - b;

  divide = (a, b) => a / b;

  multiply = (a, b) => a * b;
}

const newCalculator = new Calculator();

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = {
  stringLength,
  reverseString,
  newCalculator,
  capitalize,
};