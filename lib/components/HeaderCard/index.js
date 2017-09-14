'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Maybe = require('../Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderCard = function HeaderCard(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      intro = _ref.intro,
      subtle = _ref.subtle;
  return _react2.default.createElement(
    'section',
    { className: 'br2 ' + (subtle ? 'ba b--gray-secondary' : 'bg-white-secondary shadow-1') },
    _react2.default.createElement(
      'div',
      { className: 'pa4' },
      _react2.default.createElement(
        _Heading2.default,
        { level: '5' },
        title
      ),
      description ? _react2.default.createElement(
        _Paragraph2.default,
        { type: 'small' },
        description
      ) : null,
      _react2.default.createElement(
        _Maybe2.default,
        { condition: Boolean(intro) },
        _react2.default.createElement(
          'div',
          null,
          intro
        )
      )
    ),
    subtle ? _react2.default.createElement(
      'div',
      { className: 'bt b--gray-secondary' },
      children
    ) : _react2.default.createElement(
      _Card2.default,
      null,
      children
    )
  );
};

HeaderCard.propTypes = {
  children: _react.PropTypes.node.isRequired,
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string,
  intro: _react.PropTypes.node,
  subtle: _react.PropTypes.bool
};

HeaderCard.defaultProps = {
  description: null,
  intro: null,
  subtle: false
};

exports.default = HeaderCard;