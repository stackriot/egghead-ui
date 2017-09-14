'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createQueryString = require('../createQueryString');

var _createQueryString2 = _interopRequireDefault(_createQueryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLessonsUrlWithParams = function createLessonsUrlWithParams(_ref) {
  var states = _ref.states,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === undefined ? 10 : _ref$pageSize,
      _ref$page = _ref.page,
      page = _ref$page === undefined ? 1 : _ref$page,
      lessonsUrl = _ref.lessonsUrl,
      _ref$includeLessonsIn = _ref.includeLessonsInCourses,
      includeLessonsInCourses = _ref$includeLessonsIn === undefined ? true : _ref$includeLessonsIn;


  var params = _extends({
    'page': page,
    'per_page': pageSize
  }, states ? { state: states } : {}, {
    'sort': ['state', 'row_order'],
    'without_course': !includeLessonsInCourses
  });
  var queryString = (0, _createQueryString2.default)(params);

  return '' + lessonsUrl + queryString;
};

exports.default = createLessonsUrlWithParams;