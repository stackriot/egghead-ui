'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _colorValues = require('../colorValues');

var _colorValues2 = _interopRequireDefault(_colorValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = (0, _lodash.keys)(_colorValues2.default);

exports.default = colors;