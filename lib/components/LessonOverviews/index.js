'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createLessonsUrlWithParams = require('../../utils/createLessonsUrlWithParams');

var _createLessonsUrlWithParams2 = _interopRequireDefault(_createLessonsUrlWithParams);

var _Request = require('../Request');

var _Request2 = _interopRequireDefault(_Request);

var _PaginatedLessonOverviews = require('./components/PaginatedLessonOverviews');

var _PaginatedLessonOverviews2 = _interopRequireDefault(_PaginatedLessonOverviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LessonOverviews = function (_Component) {
  _inherits(LessonOverviews, _Component);

  function LessonOverviews() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonOverviews);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonOverviews.__proto__ || Object.getPrototypeOf(LessonOverviews)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentPage: 1
    }, _this.handleCurrentPage = function (currentPage, request) {
      _this.setState({ currentPage: currentPage }, function () {
        request();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LessonOverviews, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentPage = this.state.currentPage;
      var _props = this.props,
          states = _props.states,
          fallback = _props.fallback,
          lessonsUrl = _props.lessonsUrl,
          pageSize = _props.pageSize,
          includeLessonsInCourses = _props.includeLessonsInCourses;


      return _react2.default.createElement(
        _Request2.default,
        {
          url: (0, _createLessonsUrlWithParams2.default)({
            states: states,
            pageSize: pageSize,
            page: currentPage,
            lessonsUrl: lessonsUrl,
            includeLessonsInCourses: includeLessonsInCourses
          }),
          showLoadingBetweenRequests: true
        },
        function (_ref2) {
          var request = _ref2.request,
              data = _ref2.data,
              response = _ref2.response;
          return _react2.default.createElement(_PaginatedLessonOverviews2.default, {
            fallback: fallback,
            pageSize: pageSize,
            currentPage: currentPage,
            total: response.headers['x-total-count'],
            lessons: data,
            requestNextPage: function requestNextPage(nextPage) {
              _this2.handleCurrentPage(nextPage, request);
            },
            requestCurrentPage: request
          });
        }
      );
    }
  }]);

  return LessonOverviews;
}(_react.Component);

LessonOverviews.propTypes = {
  states: _react.PropTypes.array.isRequired,
  fallback: _react.PropTypes.node.isRequired,
  lessonsUrl: _react.PropTypes.string.isRequired,
  pageSize: _react.PropTypes.number,
  includeLessonsInCourses: _react.PropTypes.bool
};
LessonOverviews.defaultProps = {
  pageSize: 10,
  includeLessonsInCourses: true
};
exports.default = LessonOverviews;