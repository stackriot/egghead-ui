'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

exports.default = function (revenue, month) {
  return (0, _lodash.filter)(revenue, function (memo) {
    return memo.month !== month;
  });
};