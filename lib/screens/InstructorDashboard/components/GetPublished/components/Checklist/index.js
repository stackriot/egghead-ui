'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _lodash = require('lodash');

var _Icon = require('../../../../../../components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _List = require('../../../../../../components/List');

var _List2 = _interopRequireDefault(_List);

var _MoreInfo = require('./components/MoreInfo');

var _MoreInfo2 = _interopRequireDefault(_MoreInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checklist = function Checklist(_ref) {
  var items = _ref.items;
  return _react2.default.createElement(_List2.default, { items: (0, _lodash.map)(items, function (item, index) {
      return _react2.default.createElement(
        'div',
        {
          key: index,
          className: 'flex items-center justify-between'
        },
        _react2.default.createElement(
          'div',
          { className: 'flex items-center' },
          _react2.default.createElement(
            'div',
            { className: 'mr3' },
            index + 1
          ),
          _react2.default.createElement(
            'span',
            { className: item.isComplete ? 'strike gray-secondary' : 'base' },
            item.description
          )
        ),
        item.isComplete ? _react2.default.createElement(_Icon2.default, {
          type: 'check',
          color: 'green'
        }) : _react2.default.createElement(
          'div',
          null,
          item.moreInfoUrl ? _react2.default.createElement(
            'span',
            { className: 'ml2' },
            _react2.default.createElement(_MoreInfo2.default, { url: item.moreInfoUrl })
          ) : null,
          item.action ? _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: item.action,
              className: 'pointer dim ml2'
            },
            _react2.default.createElement(_Icon2.default, {
              type: 'chevron-right',
              size: '4'
            })
          ) : null
        )
      );
    }) });
};

Checklist.propTypes = {
  items: _react.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    isComplete: _react.PropTypes.bool.isRequired,
    description: _react.PropTypes.string.isRequired,
    moreInfoUrl: _react.PropTypes.string,
    action: _react.PropTypes.string
  })).isRequired
};

exports.default = Checklist;