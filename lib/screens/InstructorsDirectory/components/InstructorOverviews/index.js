'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Request = require('../../../../components/Request');

var _Request2 = _interopRequireDefault(_Request);

var _Paragraph = require('../../../../components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _createInstructorsUrlWithParams = require('./utils/createInstructorsUrlWithParams');

var _createInstructorsUrlWithParams2 = _interopRequireDefault(_createInstructorsUrlWithParams);

var _PaginatedInstructorOverviews = require('./components/PaginatedInstructorOverviews');

var _PaginatedInstructorOverviews2 = _interopRequireDefault(_PaginatedInstructorOverviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstructorOverviews = function (_Component) {
  _inherits(InstructorOverviews, _Component);

  function InstructorOverviews() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InstructorOverviews);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InstructorOverviews.__proto__ || Object.getPrototypeOf(InstructorOverviews)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentPage: 1
    }, _this.handleCurrentPage = function (currentPage, request) {
      _this.setState({ currentPage: currentPage }, function () {
        request();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InstructorOverviews, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentPage = this.state.currentPage;
      var _props = this.props,
          instructorsUrl = _props.instructorsUrl,
          pageSize = _props.pageSize;


      return _react2.default.createElement(
        _Request2.default,
        {
          auth: true,
          url: (0, _createInstructorsUrlWithParams2.default)({
            pageSize: pageSize,
            page: currentPage,
            instructorsUrl: instructorsUrl
          }),
          showLoadingBetweenRequests: true
        },
        function (_ref2) {
          var request = _ref2.request,
              running = _ref2.running,
              data = _ref2.data,
              response = _ref2.response;
          return _react2.default.createElement(_PaginatedInstructorOverviews2.default, {
            fallback: _react2.default.createElement(
              _Paragraph2.default,
              null,
              'No instructors to show'
            ),
            pageSize: pageSize,
            currentPage: currentPage,
            total: response.headers['x-total-count'],
            instructors: data,
            requestNextPage: function requestNextPage(nextPage) {
              _this2.handleCurrentPage(nextPage, request);
            }
          });
        }
      );
    }
  }]);

  return InstructorOverviews;
}(_react.Component);

InstructorOverviews.propTypes = {
  instructorsUrl: _react.PropTypes.string.isRequired,
  pageSize: _react.PropTypes.number
};
InstructorOverviews.defaultProps = {
  pageSize: 10
};
exports.default = InstructorOverviews;