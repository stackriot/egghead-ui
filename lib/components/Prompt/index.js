'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _lodash = require('lodash');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Prompt = function Prompt(_ref) {
  var description = _ref.description,
      actionText = _ref.actionText,
      action = _ref.action;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paragraph2.default,
      null,
      description
    ),
    _react2.default.createElement(
      'div',
      { className: 'mt3' },
      (0, _lodash.startsWith)(action, '/') ? _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: action,
          className: 'no-underline'
        },
        _react2.default.createElement(
          _Button2.default,
          { size: 'small' },
          actionText
        )
      ) : _react2.default.createElement(
        'a',
        {
          href: action,
          className: 'pointer dim no-underline'
        },
        _react2.default.createElement(
          _Button2.default,
          { size: 'small' },
          actionText
        )
      )
    )
  );
};

Prompt.propTypes = {
  description: _react.PropTypes.string.isRequired,
  actionText: _react.PropTypes.string.isRequired,
  action: _react.PropTypes.string.isRequired
};

exports.default = Prompt;