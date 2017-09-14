'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../../../../../../../../../components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var label = _ref.label,
      count = _ref.count;
  return _react2.default.createElement(
    'div',
    { className: 'pv2 ph3 bg-gray-secondary br2 tc ' + (count > 0 ? '' : 'o-30') },
    _react2.default.createElement(
      _Heading2.default,
      { level: '5' },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: 'f4' },
      count
    )
  );
};