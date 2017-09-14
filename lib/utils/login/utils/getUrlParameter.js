'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _windowMock = require('../../windowMock');

var _windowMock2 = _interopRequireDefault(_windowMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var universalWindow = typeof window === 'undefined' ? _windowMock2.default : window;

exports.default = function (key) {
  var cleanKey = key.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + cleanKey + '=([^&#]*)');
  var results = regex.exec(universalWindow.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};