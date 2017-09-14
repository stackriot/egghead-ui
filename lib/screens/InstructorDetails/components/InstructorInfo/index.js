'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _List = require('../../../../components/List');

var _List2 = _interopRequireDefault(_List);

var _HeaderCard = require('../../../../components/HeaderCard');

var _HeaderCard2 = _interopRequireDefault(_HeaderCard);

var _Avatar = require('../../../../components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _InfoBit = require('./components/InfoBit');

var _InfoBit2 = _interopRequireDefault(_InfoBit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var instructor = _ref.instructor;


  var items = (0, _lodash.compact)([_react2.default.createElement(
    'div',
    { className: 'tc' },
    _react2.default.createElement(_Avatar2.default, {
      name: instructor.full_name,
      url: instructor.avatar_url,
      size: '4'
    })
  ), instructor.bio || instructor.bio_short ? _react2.default.createElement(_InfoBit2.default, {
    label: 'Bio',
    value: instructor.bio_short || instructor.bio_short
  }) : null, instructor.slack_id ? _react2.default.createElement(_InfoBit2.default, {
    label: 'Slack',
    value: instructor.slack_id,
    href: 'https://npmstack.slack.com/messages/@' + instructor.slack_id
  }) : null, instructor.website ? _react2.default.createElement(_InfoBit2.default, {
    label: 'Website',
    value: instructor.website,
    href: instructor.website
  }) : null, instructor.twitter ? _react2.default.createElement(_InfoBit2.default, {
    label: 'Twitter',
    value: instructor.twitter,
    href: 'https://twitter.com/' + instructor.twitter
  }) : null]);

  return _react2.default.createElement(
    _HeaderCard2.default,
    { title: instructor.full_name },
    _react2.default.createElement(_List2.default, { items: (0, _lodash.map)(items, function (item, index) {
        return item;
      }) })
  );
};