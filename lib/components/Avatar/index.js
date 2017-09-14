'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.classNameBySizes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classNameBySizes = exports.classNameBySizes = {
  1: 'w1 h1',
  2: 'w2 h2',
  3: 'w3 h3',
  4: 'w4 h4'
};

var sizes = exports.sizes = (0, _lodash.keys)(classNameBySizes);

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasLoaded: false
    }, _this.handleLoad = function () {
      _this.setState({ hasLoaded: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var hasLoaded = this.state.hasLoaded;
      var _props = this.props,
          name = _props.name,
          url = _props.url,
          size = _props.size;

      var alt = 'Avatar for ' + name;
      var containerClassName = 'bg-gray-secondary dib br-100 ' + classNameBySizes[size];

      if (hasLoaded) {
        return _react2.default.createElement('div', {
          className: containerClassName,
          style: {
            background: 'url(' + url + ') center center / cover no-repeat'
          },
          role: 'img',
          'aria-label': alt
        });
      }

      return _react2.default.createElement(
        'div',
        { className: containerClassName },
        _react2.default.createElement('img', {
          onLoad: this.handleLoad,
          src: url,
          alt: alt,
          style: {
            display: 'none'
          }
        })
      );
    }
  }]);

  return Avatar;
}(_react.Component);

exports.default = Avatar;


Avatar.propTypes = {
  name: _react.PropTypes.string.isRequired,
  url: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.oneOf(sizes).isRequired
};

Avatar.defaultProps = {
  size: '3'
};