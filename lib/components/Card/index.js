'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levels = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNameByLevel = {
  1: 'br2 shadow-1',
  2: 'br3 shadow-2'
};

var levels = exports.levels = (0, _lodash.keys)(classNameByLevel);

var Card = function Card(_ref) {
  var children = _ref.children,
      level = _ref.level;
  return _react2.default.createElement(
    'section',
    { className: 'bg-white dark-gray ' + classNameByLevel[level] },
    children
  );
};

Card.propTypes = {
  children: _react.PropTypes.node.isRequired,
  level: _react.PropTypes.oneOf(levels)
};

Card.defaultProps = {
  level: (0, _lodash.first)(levels)
};

exports.default = Card;