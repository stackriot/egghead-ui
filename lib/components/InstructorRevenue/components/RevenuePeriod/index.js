'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numberFormattingByType = require('../../../../utils/numberFormattingByType');

var _numberFormattingByType2 = _interopRequireDefault(_numberFormattingByType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var title = _ref.title,
      revenue = _ref.revenue,
      subscriberMinutes = _ref.subscriberMinutes;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'f6 ttu mb2 dark-gray-secondary' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'green b f3 mb2' },
      _numberFormattingByType2.default.money(revenue)
    ),
    _react2.default.createElement(
      'div',
      { className: 'b' },
      _numberFormattingByType2.default.general(subscriberMinutes) + ' minutes'
    )
  );
};