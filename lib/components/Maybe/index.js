'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var Maybe = function Maybe(_ref) {
  var children = _ref.children,
      condition = _ref.condition;
  return condition ? children : null;
};

Maybe.propTypes = {
  children: _react.PropTypes.node.isRequired,
  condition: _react.PropTypes.bool.isRequired
};

exports.default = Maybe;