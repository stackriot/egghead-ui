'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lessonStates = require('../../../../../../utils/lessonStates');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (lessons) {
  return (0, _lodash.reduce)(_lessonStates.lessonStates, function (memo, state) {
    return [].concat(_toConsumableArray(memo), _toConsumableArray((0, _lodash.filter)(lessons, function (lesson) {
      return lesson.state === state;
    })));
  }, []);
};