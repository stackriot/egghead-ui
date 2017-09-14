'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _windowMock = require('../windowMock');

var _windowMock2 = _interopRequireDefault(_windowMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var universalWindow = typeof window === 'undefined' ? _windowMock2.default : window;

var logout = function logout() {
  universalWindow.localStorage.removeItem('token');
  universalWindow.location.reload();
};

exports.default = logout;