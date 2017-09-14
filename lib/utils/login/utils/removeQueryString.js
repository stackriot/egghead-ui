'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  history.pushState(null, '', location.href.split('?')[0]);
};