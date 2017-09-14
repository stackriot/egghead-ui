'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _urls = require('../../../../utils/urls');

var _instructorMilestones = require('../../../../utils/instructorMilestones');

var _Maybe = require('../../../../components/Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Paragraph = require('../../../../components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _List = require('../../../../components/List');

var _List2 = _interopRequireDefault(_List);

var _Heading = require('../../../../components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _HeaderCard = require('../../../../components/HeaderCard');

var _HeaderCard2 = _interopRequireDefault(_HeaderCard);

var _Anchor = require('../../../../components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  title: 'Instructor 101 Guide',
  description: 'We\'ve put together a written Instructor Guide with step by step details on creating egghead lessons and courses. It is required reading for all instructors, and will help you make great lessons.',
  url: _urls.guideUrl,
  action: 'View the guide'
}, {
  title: 'Mentors',
  description: 'Joel, Trevor, and Zac can help with anything related to egghead.io.',
  url: _urls.chatUrl,
  action: 'Reach out in Slack'
}, {
  title: 'Slack',
  description: 'The egghead-instructors Slack channel is available for instructors to chat and see each other\'s progress.',
  url: _urls.instructorsChatUrl,
  action: 'View the channel'
}];

var Help = function Help(_ref) {
  var publishedLessons = _ref.publishedLessons;
  return _react2.default.createElement(
    _Maybe2.default,
    { condition: !(0, _instructorMilestones.hasUnlockedPublished)(publishedLessons) },
    _react2.default.createElement(
      _HeaderCard2.default,
      {
        title: 'Got questions? Feeling stuck?',
        description: 'Making screencasts is hard. The first few can be frustrating. But it gets easier and faster! There are many resources to help you as well.',
        subtle: true
      },
      _react2.default.createElement(_List2.default, { items: (0, _lodash.map)(items, function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: index },
            _react2.default.createElement(
              _Heading2.default,
              { level: '5' },
              item.title
            ),
            _react2.default.createElement(
              _Paragraph2.default,
              null,
              item.description
            ),
            _react2.default.createElement(
              _Anchor2.default,
              {
                url: item.url,
                type: 'prominent'
              },
              item.action
            )
          );
        }) })
    )
  );
};

exports.default = Help;