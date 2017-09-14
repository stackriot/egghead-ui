'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var windowMock = {
  location: {
    href: '',
    reload: function reload() {
      return null;
    }
  },
  localStorage: {
    setItem: function setItem() {
      return null;
    },
    getItem: function getItem() {
      return null;
    },
    removeItem: function removeItem() {
      return null;
    }
  }
};

exports.default = windowMock;