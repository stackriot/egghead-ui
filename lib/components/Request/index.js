'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _logout = require('../../utils/logout');

var _logout2 = _interopRequireDefault(_logout);

var _windowMock = require('../../utils/windowMock');

var _windowMock2 = _interopRequireDefault(_windowMock);

var _RequestBase = require('./components/RequestBase');

var _RequestBase2 = _interopRequireDefault(_RequestBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var universalWindow = typeof window === 'undefined' ? _windowMock2.default : window;

var methods = exports.methods = ['get', 'post', 'put', 'delete'];

var Request = function (_Component) {
  _inherits(Request, _Component);

  function Request() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Request);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Request.__proto__ || Object.getPrototypeOf(Request)).call.apply(_ref, [this].concat(args))), _this), _this.getHeaders = function () {
      var headers = _extends({}, _this.props.headers);
      if (_this.props.auth) {
        return _extends({}, headers, {
          Authorization: universalWindow.localStorage.token ? 'Bearer ' + universalWindow.localStorage.token : null,
          'Content-Type': 'application/json'
        });
      }

      return headers;
    }, _this.handleError = function (error) {
      if ((0, _lodash.includes)([401, 403], error.response.status) && _this.props.auth) {
        (0, _logout2.default)();
      }
      if (_this.props.onError) {
        _this.props.onError(error);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Request, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['url', 'children']);

      return _react2.default.createElement(
        _RequestBase2.default,
        _extends({}, rest, {
          url: url,
          headers: this.getHeaders(),
          onError: this.handleError
        }),
        function (_ref2) {
          var request = _ref2.request,
              running = _ref2.running,
              error = _ref2.error,
              data = _ref2.data,
              response = _ref2.response;

          return children({
            request: request,
            running: running,
            error: error,
            data: data,
            response: response
          });
        }
      );
    }
  }]);

  return Request;
}(_react.Component);

Request.propTypes = {
  children: _react.PropTypes.func.isRequired,
  url: _react.PropTypes.string.isRequired,
  lazy: _react.PropTypes.bool,
  auth: _react.PropTypes.bool,
  placeholder: _react.PropTypes.node,
  params: _react.PropTypes.object,
  headers: _react.PropTypes.object,
  body: _react.PropTypes.object,
  onResponse: _react.PropTypes.func,
  onData: _react.PropTypes.func,
  onError: _react.PropTypes.func,
  method: _react.PropTypes.oneOf(methods),
  subscribe: _react.PropTypes.bool,
  subscribeInterval: _react.PropTypes.number
};

Request.defaultProps = {
  method: (0, _lodash.first)(methods),
  subscribe: false,
  auth: false,
  subscribeInterval: 10000
};

exports.default = Request;