"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Date().toISOString().slice(0, 8) + "01";
};