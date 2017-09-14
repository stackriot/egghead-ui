'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _windowMock = require('../windowMock');

var _windowMock2 = _interopRequireDefault(_windowMock);

var _removeQueryString = require('./utils/removeQueryString');

var _removeQueryString2 = _interopRequireDefault(_removeQueryString);

var _getUrlParameter = require('./utils/getUrlParameter');

var _getUrlParameter2 = _interopRequireDefault(_getUrlParameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var universalWindow = typeof window === 'undefined' ? _windowMock2.default : window;

var decodeToken = function decodeToken(token) {
  return _jwtSimple2.default.decode(token, null, true);
};

var login = function login() {
  if (universalWindow.localStorage.getItem('token')) {
    var token = universalWindow.localStorage.getItem('token');
    return decodeToken(token);
  }
  if ((0, _getUrlParameter2.default)('jwt')) {
    var _token = (0, _getUrlParameter2.default)('jwt');
    universalWindow.localStorage.setItem('token', _token);
    (0, _removeQueryString2.default)();
    return decodeToken(_token);
  }
};

exports.default = login;