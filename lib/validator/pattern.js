var rules = require('../rule');

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 */
var pattern = function(rule, value, callback, source) {
  var errors = [];
  rules.pattern(rule, value, source, errors);
  callback(errors);
}

module.exports = pattern;