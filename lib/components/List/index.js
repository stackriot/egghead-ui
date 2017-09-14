'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paddingClassNameBySize = {
  small: 'pa3',
  medium: 'pa4',
  large: 'pa5'
};

var sizes = exports.sizes = (0, _lodash.keys)(paddingClassNameBySize);

var List = function List(_ref) {
  var items = _ref.items,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'medium' : _ref$size,
      _ref$overDark = _ref.overDark,
      overDark = _ref$overDark === undefined ? false : _ref$overDark;
  return _react2.default.createElement(
    'div',
    null,
    (0, _lodash.map)(items, function (item, index) {
      return _react2.default.createElement(
        'div',
        {
          key: index,
          className: '\n          ' + paddingClassNameBySize[size] + ' \n          ' + (index < items.length - 1 ? overDark ? 'bb b--dark-blue' : 'bb b--gray-secondary' : '') + '\n        '
        },
        item
      );
    })
  );
};

List.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
  size: _react.PropTypes.oneOf(sizes),
  overDark: _react.PropTypes.bool
};

exports.default = List;