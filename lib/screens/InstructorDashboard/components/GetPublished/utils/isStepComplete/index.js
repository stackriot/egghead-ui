'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lessonStates = require('../../../../../../utils/lessonStates');

exports.default = function (instructorLessonStates, minimumLessonState) {
  var qualifyingLessonStates = (0, _lodash.slice)(_lessonStates.lessonStates, (0, _lodash.indexOf)(_lessonStates.lessonStates, minimumLessonState));
  return (0, _lodash.some)(qualifyingLessonStates, function (qualifyingLessonState) {
    return (0, _lodash.includes)(instructorLessonStates, qualifyingLessonState);
  });
};