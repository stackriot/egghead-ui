'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerWidth = require('../../../ContainerWidth');

var _ContainerWidth2 = _interopRequireDefault(_ContainerWidth);

var _Icon = require('../../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var actionText = _ref.actionText,
      iconType = _ref.iconType,
      color = _ref.color,
      url = _ref.url,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    _ContainerWidth2.default,
    null,
    function (containerWidth) {
      return _react2.default.createElement(
        'a',
        {
          href: url,
          onClick: onClick,
          className: 'pa3 tc flex flex-wrap items-center justify-center h-100 dark-gray no-underline pointer dim'
        },
        _react2.default.createElement(
          'div',
          { className: 'pa2' },
          _react2.default.createElement(_Icon2.default, {
            type: iconType,
            color: color
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'b f6 fw5' },
          actionText
        )
      );
    }
  );
};