'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _Maybe = require('../../../../../Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Error = require('../../../../../Error');

var _Error2 = _interopRequireDefault(_Error);

var _Button = require('../../../../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Paragraph = require('../../../../../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Request = require('../../../../../Request');

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputClassNames = 'input-reset pa2 br2 ba b--gray-secondary dark-gray w-100';

var clearedState = {
  title: '',
  technologyId: '',
  summary: '',
  hasMissingInput: false
};

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = clearedState, _this.handleMissingInput = function () {
      _this.setState({ hasMissingInput: true });
    }, _this.handleTitleChange = function (event) {
      _this.setState({
        title: event.target.value
      });
    }, _this.handleTechnologyChange = function (event) {
      _this.setState({
        technologyId: event.target.value
      });
    }, _this.handleSummaryChange = function (event) {
      _this.setState({
        summary: event.target.value
      });
    }, _this.handleResponse = function (response) {
      if (!response) {
        _this.setState(clearedState);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          title = _state.title,
          technologyId = _state.technologyId,
          summary = _state.summary,
          hasMissingInput = _state.hasMissingInput;
      var _props = this.props,
          instructor = _props.instructor,
          lessonsUrl = _props.lessonsUrl,
          technologiesUrl = _props.technologiesUrl;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          'Have an idea for an egghead lesson? Fill out this information and get started. Feel free to submit as many ideas as you like.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'mb3' },
          _react2.default.createElement(
            'div',
            { className: 'b' },
            'Title *'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            value: title,
            onChange: this.handleTitleChange,
            className: '' + inputClassNames + (hasMissingInput ? ' b--red' : '')
          })
        ),
        _react2.default.createElement(
          _Request2.default,
          { auth: true, url: technologiesUrl },
          function (_ref2) {
            var data = _ref2.data;
            return _react2.default.createElement(
              'div',
              { className: 'mb3' },
              _react2.default.createElement(
                'div',
                { className: 'b' },
                'Technology *'
              ),
              _react2.default.createElement(
                'select',
                {
                  value: technologyId,
                  onChange: _this2.handleTechnologyChange,
                  className: '' + inputClassNames + (hasMissingInput ? ' b--red' : '')
                },
                _react2.default.createElement('option', { value: '' }),
                (0, _lodash.map)(data.technologies, function (technology) {
                  return _react2.default.createElement(
                    'option',
                    {
                      key: technology.id,
                      value: technology.id
                    },
                    technology.label
                  );
                })
              )
            );
          }
        ),
        _react2.default.createElement(
          'div',
          { className: 'mb3' },
          _react2.default.createElement(
            'div',
            { className: 'b' },
            'Summary'
          ),
          _react2.default.createElement('textarea', {
            type: 'text',
            rows: '5',
            value: summary,
            onChange: this.handleSummaryChange,
            className: inputClassNames
          })
        ),
        _react2.default.createElement(
          _Maybe2.default,
          { condition: hasMissingInput },
          _react2.default.createElement(
            'div',
            { className: 'mb3' },
            _react2.default.createElement(
              _Error2.default,
              null,
              'Missing required form input'
            )
          )
        ),
        _react2.default.createElement(
          _Request2.default,
          {
            lazy: true,
            method: 'post',
            url: lessonsUrl,
            body: {
              'lesson': {
                title: title,
                technology_id: technologyId,
                summary: summary,
                instructor_id: instructor.id
              }
            },
            onResponse: this.handleResponse
          },
          function (_ref3) {
            var request = _ref3.request;
            return _react2.default.createElement(
              _Button2.default,
              {
                size: 'small',
                onClick: function onClick() {
                  if ((0, _lodash.every)([title, technologyId], function (input) {
                    return (0, _lodash.size)(input) > 0;
                  })) {
                    request();
                  } else {
                    _this2.handleMissingInput();
                  }
                }
              },
              'Submit'
            );
          }
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;