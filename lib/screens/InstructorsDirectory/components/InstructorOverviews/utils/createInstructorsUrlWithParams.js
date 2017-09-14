'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createQueryString = require('../../../../../utils/createQueryString');

var _createQueryString2 = _interopRequireDefault(_createQueryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLessonsUrlWithParams = function createLessonsUrlWithParams(_ref) {
  var _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === undefined ? 10 : _ref$pageSize,
      _ref$page = _ref.page,
      page = _ref$page === undefined ? 1 : _ref$page,
      instructorsUrl = _ref.instructorsUrl;


  var params = {
    'page': page,
    'per_page': pageSize
  };
  var queryString = (0, _createQueryString2.default)(params);

  return '' + instructorsUrl + queryString;
};

exports.default = createLessonsUrlWithParams;