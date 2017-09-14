'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Anchor = require('../../../../../../components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var label = _ref.label,
      value = _ref.value,
      href = _ref.href;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'b' },
      label
    ),
    href ? _react2.default.createElement(
      _Anchor2.default,
      { url: href },
      value
    ) : _react2.default.createElement(
      'div',
      null,
      value
    )
  );
};