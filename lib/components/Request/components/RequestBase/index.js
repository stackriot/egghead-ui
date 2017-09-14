'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Error = require('../../../Error');

var _Error2 = _interopRequireDefault(_Error);

var _Loading = require('../../../Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var http = _axios2.default.create();

var RequestBase = function (_Component) {
  _inherits(RequestBase, _Component);

  function RequestBase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RequestBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RequestBase.__proto__ || Object.getPrototypeOf(RequestBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      running: !_this.props.lazy,
      response: null,
      data: null,
      error: null,
      subscription: null
    }, _this.request = function () {
      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.body;
      var _this$state = _this.state,
          response = _this$state.response,
          data = _this$state.data;
      var _this$props = _this.props,
          method = _this$props.method,
          url = _this$props.url,
          params = _this$props.params,
          headers = _this$props.headers,
          onResponse = _this$props.onResponse,
          onData = _this$props.onData,
          onError = _this$props.onError;


      _this.setState({
        running: true,
        request: true
      }, function () {
        http.request({
          method: method,
          url: url,
          params: params,
          headers: headers,
          data: body
        }).then(function (response) {
          if (_this.willUnmount) {
            return;
          }
          _this.setState({
            running: false,
            response: response,
            data: response.data,
            error: null
          }, function () {
            if (onResponse) {
              onResponse(null, response);
            }
            if (onData) {
              onData(data);
            }
          });
        }).catch(function (error) {
          if (_this.willUnmount) {
            return;
          }
          _this.setState({
            running: false,
            response: error,
            error: error
          }, function () {
            if (onResponse) {
              onResponse(response);
            }
            if (onError) {
              onError(error);
            }
          });
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RequestBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          lazy = _props.lazy,
          subscribe = _props.subscribe,
          subscribeInterval = _props.subscribeInterval;

      if (!lazy) {
        this.request();
        if (subscribe) {
          this.setState({
            subscription: setInterval(function () {
              var running = _this2.state.running;

              if (!running) {
                _this2.request();
              }
            }, subscribeInterval)
          });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.willUnmount = true;
      var subscription = this.state.subscription;

      clearInterval(subscription);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          lazy = _props2.lazy,
          placeholder = _props2.placeholder,
          showLoadingBetweenRequests = _props2.showLoadingBetweenRequests;
      var _state = this.state,
          running = _state.running,
          error = _state.error,
          data = _state.data,
          response = _state.response;

      if (!children) {
        return null;
      }
      if (running && showLoadingBetweenRequests || running && (lazy || !data)) {
        return placeholder ? placeholder : _react2.default.createElement(_Loading2.default, null);
      }
      if (error) {
        return _react2.default.createElement(
          _Error2.default,
          null,
          'Error: ' + error.message
        );
      }
      return children({
        request: this.request,
        running: running,
        error: error,
        data: data,
        response: response
      }) || null;
    }
  }]);

  return RequestBase;
}(_react.Component);

exports.default = RequestBase;