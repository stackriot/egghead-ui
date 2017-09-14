'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

exports.default = function (params) {
  return (0, _lodash.replace)((0, _lodash.reduce)(params, function (memo, value, key) {
    return memo + '&' + key + '=' + ((0, _lodash.isArray)(value) ? value.join(',') : value);
  }, ''), '&', '?');
};