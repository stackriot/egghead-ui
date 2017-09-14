'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _hardCodedSizes = require('../../utils/hardCodedSizes');

var _ContainerWidth = require('../ContainerWidth');

var _ContainerWidth2 = _interopRequireDefault(_ContainerWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutColumns = function LayoutColumns(_ref) {
  var items = _ref.items,
      relativeSizes = _ref.relativeSizes;
  return _react2.default.createElement(
    _ContainerWidth2.default,
    null,
    function (containerWidth) {
      return _react2.default.createElement(
        'div',
        { className: 'flex flex-wrap' },
        (0, _lodash.map)(items, function (item, index) {
          return _react2.default.createElement(
            'div',
            {
              key: index,
              className: '\n              mb4\n              mw-100\n              ' + (containerWidth !== 'xsmall' && index < items.length - 1 ? 'mr4' : '') + '\n            ',
              style: {
                flexGrow: relativeSizes ? relativeSizes[index] : 1,
                flexShrink: 0,
                flexBasis: _hardCodedSizes.xsmallContainerWidth - 100
              }
            },
            item
          );
        })
      );
    }
  );
};

LayoutColumns.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
  relativeSizes: _react.PropTypes.arrayOf(_react.PropTypes.number)
};

exports.default = LayoutColumns;