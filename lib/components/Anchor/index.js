'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _colors = require('../../utils/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = exports.types = ['inline', 'prominent'];

var Anchor = function Anchor(_ref) {
  var children = _ref.children,
      url = _ref.url,
      isSeparateTab = _ref.isSeparateTab,
      type = _ref.type,
      color = _ref.color;


  var classNameByType = {
    inline: color,
    prominent: color + ' ttu no-underline flex items-center'
  };

  var prefixByType = {
    inline: null,
    prominent: _react2.default.createElement(
      'span',
      { className: 'mr1' },
      _react2.default.createElement(_Icon2.default, {
        type: 'chevron-right',
        color: color,
        size: '4'
      })
    )
  };

  return _react2.default.createElement(
    'a',
    {
      href: url,
      target: isSeparateTab ? '_blank' : '_self',
      className: 'pointer dim ' + classNameByType[type]
    },
    prefixByType[type],
    children
  );
};

Anchor.propTypes = {
  children: _react.PropTypes.node.isRequired,
  url: _react.PropTypes.string.isRequired,
  isSeparateTab: _react.PropTypes.bool,
  type: _react.PropTypes.oneOf(types),
  color: _react.PropTypes.oneOf(_colors2.default).isRequired
};

Anchor.defaultProps = {
  isSeparateTab: false,
  type: (0, _lodash.first)(types),
  color: 'blue'
};

exports.default = Anchor;