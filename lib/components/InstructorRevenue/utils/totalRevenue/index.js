'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var initialMemo = {
  minutes_watched: 0,
  revenue: 0,
  monthCount: 0
};

exports.default = function (revenue) {
  return (0, _lodash.reduce)(revenue, function (memo, monthRevenue) {
    return {
      minutes_watched: memo.minutes_watched + monthRevenue.minutes_watched,
      revenue: memo.revenue + monthRevenue.revenue,
      monthCount: memo.monthCount + 1
    };
  }, initialMemo);
};