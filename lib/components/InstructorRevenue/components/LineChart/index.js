'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _hexRgba = require('hex-rgba');

var _hexRgba2 = _interopRequireDefault(_hexRgba);

var _reactChartjs = require('react-chartjs-2');

var _numberFormattingByType = require('../../../../utils/numberFormattingByType');

var _numberFormattingByType2 = _interopRequireDefault(_numberFormattingByType);

var _colorValues = require('../../../../utils/colorValues');

var _colorValues2 = _interopRequireDefault(_colorValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tooltipColor = _colorValues2.default['dark-gray'];

var sharedOptions = function sharedOptions(currency) {
  return {
    legend: {
      display: false
    },
    showScale: false,
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      displayColors: false,
      callbacks: {
        label: function label(tooltipItems) {
          return currency ? _numberFormattingByType2.default.money(tooltipItems.yLabel) : _numberFormattingByType2.default.general(tooltipItems.yLabel);
        }
      },
      titleFontSize: 0,
      backgroundColor: 'transparent',
      bodyFontColor: tooltipColor,
      bodyFontStyle: 'bold'
    },
    layout: {
      padding: {
        top: 5
      }
    }
  };
};

var sharedData = function sharedData(color) {
  return {
    borderColor: color,
    backgroundColor: (0, _hexRgba2.default)(color, 20),
    pointBorderColor: color,
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: color,
    fill: true,
    lineTension: 0.0,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 3,
    pointHoverBorderWidth: 3,
    pointRadius: 3,
    pointHoverRadius: 3,
    pointHitRadius: 3
  };
};

exports.default = function (_ref) {
  var xAxis = _ref.xAxis,
      yAxis = _ref.yAxis,
      _ref$currency = _ref.currency,
      currency = _ref$currency === undefined ? false : _ref$currency;
  return _react2.default.createElement(
    'div',
    { className: 'w-100' },
    _react2.default.createElement(_reactChartjs.Line, {
      options: sharedOptions(currency),
      data: {
        labels: xAxis,
        datasets: (0, _lodash.map)(yAxis, function (set) {
          return _extends({}, sharedData(set.color), {
            data: set.points
          });
        })
      }
    })
  );
};