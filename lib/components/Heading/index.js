'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levels = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerWidth = require('../ContainerWidth');

var _ContainerWidth2 = _interopRequireDefault(_ContainerWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var levels = exports.levels = ['1', '2', '3', '4', '5'];

var sharedStyle = {
  wordBreak: 'break-word'
};

var Heading = function Heading(_ref) {
  var children = _ref.children,
      level = _ref.level;
  return _react2.default.createElement(
    _ContainerWidth2.default,
    null,
    function (containerWidth) {
      return _react2.default.createElement(
        'div',
        null,
        {
          1: _react2.default.createElement(
            'h1',
            {
              className: (containerWidth === 'xsmall' ? 'f3' : 'f1') + ' mt0 normal mb4',
              style: sharedStyle
            },
            children
          ),
          2: _react2.default.createElement(
            'h2',
            {
              className: (containerWidth === 'xsmall' ? 'f4 bold' : 'f2 normal') + ' mt0 mb3',
              style: sharedStyle
            },
            children
          ),
          3: _react2.default.createElement(
            'h3',
            {
              className: (containerWidth === 'xsmall' ? 'f5 bold' : 'f3 normal') + ' mt0 mb2',
              style: sharedStyle
            },
            children
          ),
          4: _react2.default.createElement(
            'h4',
            {
              className: (containerWidth === 'xsmall' ? 'f5 bold' : 'f4 normal') + ' mt0 mb2',
              style: sharedStyle
            },
            children
          ),
          5: _react2.default.createElement(
            'h5',
            {
              className: 'f5 bold mt0 mb2',
              style: sharedStyle
            },
            children
          )
        }[level]
      );
    }
  );
};

Heading.propTypes = {
  children: _react.PropTypes.string.isRequired,
  level: _react.PropTypes.oneOf(levels).isRequired
};

exports.default = Heading;