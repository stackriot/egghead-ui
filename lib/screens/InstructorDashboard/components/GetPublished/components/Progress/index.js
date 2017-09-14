'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var barHeight = 7;

var Progress = function Progress(_ref) {
  var total = _ref.total,
      complete = _ref.complete;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'flex f6' },
      _react2.default.createElement(
        'div',
        { className: 'green mr1' },
        complete
      ),
      _react2.default.createElement(
        'div',
        { className: 'mr1' },
        '/'
      ),
      _react2.default.createElement(
        'div',
        { className: 'mr1' },
        total
      ),
      _react2.default.createElement(
        'div',
        null,
        'completed'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'mt2' },
      _react2.default.createElement(
        'div',
        {
          className: 'br2 bg-gray-secondary',
          style: {
            height: barHeight
          }
        },
        _react2.default.createElement('div', {
          className: 'br2 bg-green',
          style: {
            height: barHeight,
            width: complete / total * 100 + '%'
          }
        })
      )
    )
  );
};

Progress.propTypes = {
  total: _react.PropTypes.number.isRequired,
  complete: _react.PropTypes.number.isRequired
};

exports.default = Progress;