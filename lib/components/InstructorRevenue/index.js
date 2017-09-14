'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _colorValues = require('../../utils/colorValues');

var _colorValues2 = _interopRequireDefault(_colorValues);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Request = require('../Request');

var _Request2 = _interopRequireDefault(_Request);

var _Open = require('../Open');

var _Open2 = _interopRequireDefault(_Open);

var _ContainerWidth = require('../ContainerWidth');

var _ContainerWidth2 = _interopRequireDefault(_ContainerWidth);

var _currentMonthStartDate = require('./utils/currentMonthStartDate');

var _currentMonthStartDate2 = _interopRequireDefault(_currentMonthStartDate);

var _totalRevenue = require('./utils/totalRevenue');

var _totalRevenue2 = _interopRequireDefault(_totalRevenue);

var _removeRevenueMonth = require('./utils/removeRevenueMonth');

var _removeRevenueMonth2 = _interopRequireDefault(_removeRevenueMonth);

var _prettyMonthName = require('./utils/prettyMonthName');

var _prettyMonthName2 = _interopRequireDefault(_prettyMonthName);

var _RevenuePeriod = require('./components/RevenuePeriod');

var _RevenuePeriod2 = _interopRequireDefault(_RevenuePeriod);

var _LineChart = require('./components/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var revenueColor = _colorValues2.default['blue'];
var minutesColor = _colorValues2.default['dark-gray-secondary'];
var activeLabelClassName = 'dark-gray b';

var InstructorRevenue = function InstructorRevenue(_ref) {
  var revenueUrl = _ref.revenueUrl;
  return revenueUrl ? _react2.default.createElement(
    _Request2.default,
    { auth: true, url: revenueUrl },
    function (_ref2) {
      var data = _ref2.data;

      var currentMonthRevenue = (0, _lodash.find)(data, ['month', (0, _currentMonthStartDate2.default)()]);
      var currentTotalRevenue = (0, _totalRevenue2.default)((0, _removeRevenueMonth2.default)(data, (0, _currentMonthStartDate2.default)()));
      var hasCurrentRevenue = (0, _lodash.size)(data) > 0 && (currentMonthRevenue && currentMonthRevenue.revenue > 0 || currentTotalRevenue && currentTotalRevenue.revenue > 0);

      if (!hasCurrentRevenue) {
        return null;
      }

      var currentMonthNames = (0, _lodash.map)(data, function (month) {
        return (0, _prettyMonthName2.default)(month.month);
      });
      var currentRevenuePoints = (0, _lodash.map)(data, function (month) {
        return month.revenue;
      });
      var currentMinutesPoints = (0, _lodash.map)(data, function (month) {
        return month.minutes_watched;
      });

      return _react2.default.createElement(
        _Open2.default,
        null,
        function (_ref3) {
          var isOpen = _ref3.isOpen,
              handleOpenToggleClick = _ref3.handleOpenToggleClick;
          return _react2.default.createElement(
            _ContainerWidth2.default,
            null,
            function (containerWidth) {
              var shouldStack = (0, _lodash.includes)(['xsmall', 'small'], containerWidth);
              return _react2.default.createElement(
                _Card2.default,
                null,
                _react2.default.createElement(
                  'div',
                  { className: shouldStack ? 'tc' : 'tl flex justify-between' },
                  _react2.default.createElement(
                    'div',
                    {
                      className: shouldStack ? 'pa3' : 'nowrap pa5',
                      style: {
                        boxShadow: shouldStack ? '0px 25px 25px -25px rgba(35,45,59, 0.1)' : '10px 0px 25px -10px rgba(35,45,59, 0.1)'
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'mb4' },
                      _react2.default.createElement(_RevenuePeriod2.default, {
                        title: 'This Month',
                        revenue: currentMonthRevenue.revenue,
                        subscriberMinutes: currentMonthRevenue.minutes_watched
                      })
                    ),
                    _react2.default.createElement(_RevenuePeriod2.default, {
                      title: 'Last ' + currentTotalRevenue.monthCount + ' months',
                      revenue: currentTotalRevenue.revenue,
                      subscriberMinutes: currentTotalRevenue.minutes_watched
                    })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'w-100 pa3 flex flex-column justify-between' },
                    _react2.default.createElement(
                      'div',
                      {
                        onClick: handleOpenToggleClick,
                        className: 'dark-gray-secondary ttl f6 pa2 ' + (shouldStack ? '' : 'tr')
                      },
                      _react2.default.createElement(
                        'span',
                        { className: (isOpen ? '' : activeLabelClassName) + ' mr2' },
                        'Revenue'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'mr2' },
                        '/'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: isOpen ? activeLabelClassName : '' },
                        'Minutes'
                      )
                    ),
                    isOpen ? _react2.default.createElement(_LineChart2.default, {
                      key: 'minutes-' + containerWidth,
                      xAxis: currentMonthNames,
                      yAxis: [{
                        color: minutesColor,
                        points: currentMinutesPoints
                      }]
                    }) : _react2.default.createElement(_LineChart2.default, {
                      key: 'revenue-' + containerWidth,
                      xAxis: currentMonthNames,
                      yAxis: [{
                        color: revenueColor,
                        points: currentRevenuePoints
                      }],
                      currency: true
                    })
                  )
                )
              );
            }
          );
        }
      );
    }
  ) : null;
};

InstructorRevenue.propTypes = {
  revenueUrl: _react.PropTypes.string
};

exports.default = InstructorRevenue;