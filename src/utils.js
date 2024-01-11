const { setRules } = require('./rules');
const { getValue } = require('./value');
const { compare: _compare } = require('./compare');

function setMatchingRules(rules, data, path) {
  return setRules(rules, data, path);
}

function compare(actual, expected, rules, path, strict) {
  let errors = [];
  try {
    _compare(actual, expected, rules, path, errors);
    if (strict) {
      _compare(expected, actual, rules, path, errors);
    }
    if (errors.length > 0) {
      throw errors;
    }
  } catch (error) {
    return {
      equal: false,
      message: error.toString()
    };
  }
  return {
    equal: true,
    message: ''
  };
}

module.exports = {
  setMatchingRules,
  getValue,
  compare
};
