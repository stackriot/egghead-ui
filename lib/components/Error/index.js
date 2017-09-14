'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'red b flex items-center' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Icon2.default, {
        type: 'warning',
        color: 'red',
        size: '4'
      })
    ),
    _react2.default.createElement(
      'span',
      { className: 'pl2' },
      children
    )
  );
};

Error.propTypes = {
  children: _react.PropTypes.string.isRequired
};

exports.default = Error;