'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = function Markdown(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_reactMarkdown2.default, { source: children });
};

Markdown.propTypes = {
  children: _react.PropTypes.string.isRequired
};

exports.default = Markdown;