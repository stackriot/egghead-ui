'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

var _hardCodedSizes = require('../../utils/hardCodedSizes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerWidth = function (_Component) {
  _inherits(ContainerWidth, _Component);

  function ContainerWidth() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContainerWidth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContainerWidth.__proto__ || Object.getPrototypeOf(ContainerWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containerWidth: 'small'
    }, _this.componentDidMount = function () {
      _this.handleWidthChange();
      (0, _elementResizeEvent2.default)(_this.refs.container, _this.handleWidthChange);
    }, _this.componentWillUnmount = function () {
      (0, _elementResizeEvent.unbind)(_this.refs.container);
    }, _this.handleWidthChange = function () {
      var onWidthChange = _this.props.onWidthChange;

      if (onWidthChange) {
        onWidthChange();
      }
      var containerExactWidth = _this.refs.container.clientWidth;
      if (containerExactWidth >= _hardCodedSizes.xxlargeContainerWidth) {
        _this.setState({
          containerWidth: 'xxlarge'
        });
      } else if (containerExactWidth >= _hardCodedSizes.xlargeContainerWidth) {
        _this.setState({
          containerWidth: 'xlarge'
        });
      } else if (containerExactWidth >= _hardCodedSizes.largeContainerWidth) {
        _this.setState({
          containerWidth: 'large'
        });
      } else if (containerExactWidth >= _hardCodedSizes.mediumContainerWidth) {
        _this.setState({
          containerWidth: 'medium'
        });
      } else if (containerExactWidth >= _hardCodedSizes.smallContainerWidth) {
        _this.setState({
          containerWidth: 'small'
        });
      } else {
        _this.setState({
          containerWidth: 'xsmall'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContainerWidth, [{
    key: 'render',
    value: function render() {
      var containerWidth = this.state.containerWidth;
      var _props = this.props,
          children = _props.children,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        {
          ref: 'container',
          className: className
        },
        children(containerWidth)
      );
    }
  }]);

  return ContainerWidth;
}(_react.Component);

exports.default = ContainerWidth;


ContainerWidth.propTypes = {
  children: _react.PropTypes.func.isRequired,
  onWidthChange: _react.PropTypes.func
};