'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _Anchor = require('../../../Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Image = require('../../../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var count = _ref.count,
      label = _ref.label,
      graphics = _ref.graphics;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'flex items-center justify-center mb3' },
      _react2.default.createElement(
        'div',
        { className: 'base f3 b mr2' },
        count
      ),
      _react2.default.createElement(
        'div',
        null,
        label
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex flex-wrap justify-center' },
      (0, _lodash.map)(graphics, function (graphic) {
        return _react2.default.createElement(
          _Anchor2.default,
          {
            key: graphic.name,
            url: graphic.httpUrl
          },
          _react2.default.createElement(_Image2.default, {
            src: graphic.graphicUrl,
            alt: graphic.name,
            className: 'w2 mr3 mb3 grow-large'
          })
        );
      })
    )
  );
};