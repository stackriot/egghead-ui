'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Maybe = require('../../../../../../../../components/Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Icon = require('../../../../../../../../components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Anchor = require('../../../../../../../../components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreInfo = function MoreInfo(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(
    _Maybe2.default,
    { condition: Boolean(url) },
    _react2.default.createElement(
      _Anchor2.default,
      {
        url: url,
        isSeparateTab: true
      },
      _react2.default.createElement(_Icon2.default, {
        type: 'info',
        size: '4'
      })
    )
  );
};

MoreInfo.propTypes = {
  url: _react.PropTypes.string.isRequired
};

exports.default = MoreInfo;