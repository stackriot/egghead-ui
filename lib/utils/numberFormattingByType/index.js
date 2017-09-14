'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatNumber = require('format-number');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberFormattingByType = {
  general: function general(value) {
    return (0, _formatNumber2.default)({ round: 2 })(value);
  },
  money: function money(value) {
    return (0, _formatNumber2.default)({ round: 2, prefix: '$', padRight: 2 })(value);
  }
};

exports.default = numberFormattingByType;