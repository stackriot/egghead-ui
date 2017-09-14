'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _urls = require('../../../../utils/urls');

var _createLessonsUrlWithParams = require('../../../../utils/createLessonsUrlWithParams');

var _createLessonsUrlWithParams2 = _interopRequireDefault(_createLessonsUrlWithParams);

var _Request = require('../../../../components/Request');

var _Request2 = _interopRequireDefault(_Request);

var _HeaderCard = require('../../../../components/HeaderCard');

var _HeaderCard2 = _interopRequireDefault(_HeaderCard);

var _isStepComplete = require('./utils/isStepComplete');

var _isStepComplete2 = _interopRequireDefault(_isStepComplete);

var _Progress = require('./components/Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Checklist = require('./components/Checklist');

var _Checklist2 = _interopRequireDefault(_Checklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetPublished = function GetPublished(_ref) {
  var instructor = _ref.instructor;
  return _react2.default.createElement(
    _Request2.default,
    {
      url: (0, _createLessonsUrlWithParams2.default)({
        lessonsUrl: instructor.lessons_url
      }),
      subscribe: true
    },
    function (_ref2) {
      var data = _ref2.data;

      var instructorLessonStates = (0, _lodash.compact)((0, _lodash.uniq)((0, _lodash.map)(data, 'state')));

      var checklistItems = [{
        isComplete: true,
        description: 'Create instructor account'
      }, {
        isComplete: (0, _lodash.isString)(instructor.slack_id),
        description: 'Join our Slack',
        moreInfoUrl: _urls.chatInfoUrl
      }, {
        isComplete: (0, _isStepComplete2.default)(instructorLessonStates, 'claimed'),
        description: 'Claim new lesson',
        action: '/lessons/new'
      }, {
        isComplete: (0, _isStepComplete2.default)(instructorLessonStates, 'submitted'),
        description: 'Submit rough draft',
        moreInfoUrl: _urls.roughDraftInfoUrl
      }, {
        isComplete: (0, _lodash.isString)(instructor.gear_tracking_id),
        description: 'Get gear',
        moreInfoUrl: _urls.gearSetupInfoUrl
      }, {
        isComplete: (0, _isStepComplete2.default)(instructorLessonStates, 'updated'),
        description: 'Re-record with gear',
        moreInfoUrl: _urls.roughDraftInfoUrl
      }, {
        isComplete: (0, _isStepComplete2.default)(instructorLessonStates, 'approved'),
        description: 'Iterate until approved',
        moreInfoUrl: _urls.roughDraftInfoUrl
      }, {
        isComplete: (0, _isStepComplete2.default)(instructorLessonStates, 'published'),
        description: 'Publish lesson'
      }];

      return _react2.default.createElement(
        _HeaderCard2.default,
        {
          title: 'To Do',
          description: 'Work with your mentor to complete these items so you can get published.',
          intro: _react2.default.createElement(_Progress2.default, {
            total: (0, _lodash.size)(checklistItems),
            complete: (0, _lodash.size)((0, _lodash.filter)(checklistItems, 'isComplete'))
          })
        },
        _react2.default.createElement(_Checklist2.default, { items: checklistItems })
      );
    }
  );
};

exports.default = GetPublished;