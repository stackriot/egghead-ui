'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedItems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var selectedItems = exports.selectedItems = ['left', 'right'];

var sharedLabelClasses = 'w-50 normal lh-copy tc relative z-1 pv2 pointer border-box';

var Highlight = function Highlight(_ref) {
  var selectedItem = _ref.selectedItem;

  return _react2.default.createElement(
    'span',
    { className: 'w-50 db br-pill pa2 bg-blue absolute left-0 border-box',
      style: {
        transition: '150ms',
        transform: selectedItem === 'right' ? 'translateX(100%)' : ''
      } },
    _react2.default.createElement('span', { className: 'db h2' })
  );
};

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      selectedItem: _this.props.selectedItem
    }, _this.handleChange = function (e) {
      var selectedItem = _this.state.selectedItem;

      _this.setState({ selectedItem: selectedItem === 'left' ? 'right' : 'left' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rightOption = _props.rightOption,
          leftOption = _props.leftOption,
          onClick = _props.onClick;
      var selectedItem = this.state.selectedItem;


      return _react2.default.createElement(
        'div',
        { className: 'w5 relative flex items-center br-pill ba b--dark-gray bg-transparent' },
        _react2.default.createElement(
          'label',
          {
            className: sharedLabelClasses + ' ' + (selectedItem === 'left' ? 'white' : 'dark-gray'),
            htmlFor: 'left-' + leftOption.replace(/\s/g, "-")
          },
          leftOption,
          _react2.default.createElement('input', { onClick: onClick, type: 'radio', name: leftOption, id: 'left-' + leftOption.replace(/\s/g, "-"), className: 'absolute o-0', checked: selectedItem === 'left', onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          { className: sharedLabelClasses + ' ' + (selectedItem === 'right' ? 'white' : 'dark-gray') },
          rightOption,
          _react2.default.createElement('input', { onClick: onClick, type: 'radio', name: rightOption, id: 'right-' + rightOption.replace(/\s/g, "-"), className: 'absolute o-0', checked: selectedItem === 'right', onChange: this.handleChange })
        ),
        _react2.default.createElement(Highlight, { selectedItem: selectedItem })
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.propTypes = {
  leftOption: _react.PropTypes.string.isRequired,
  rightOption: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func,
  selectedItem: _react.PropTypes.oneOf(selectedItems)
};

Toggle.defaultProps = {
  selectedItem: (0, _lodash.first)(selectedItems)
};

exports.default = Toggle;