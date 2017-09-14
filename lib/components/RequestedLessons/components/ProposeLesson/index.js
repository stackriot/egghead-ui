'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Open = require('../../../Open');

var _Open2 = _interopRequireDefault(_Open);

var _IconLabel = require('../../../IconLabel');

var _IconLabel2 = _interopRequireDefault(_IconLabel);

var _ProposeLessonForm = require('./components/ProposeLessonForm');

var _ProposeLessonForm2 = _interopRequireDefault(_ProposeLessonForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var instructor = _ref.instructor,
      lessonsUrl = _ref.lessonsUrl,
      technologiesUrl = _ref.technologiesUrl;
  return _react2.default.createElement(
    _Open2.default,
    null,
    function (_ref2) {
      var isOpen = _ref2.isOpen,
          handleOpenToggleClick = _ref2.handleOpenToggleClick;
      return isOpen ? _react2.default.createElement(_ProposeLessonForm2.default, {
        instructor: instructor,
        lessonsUrl: lessonsUrl,
        technologiesUrl: technologiesUrl
      }) : _react2.default.createElement(
        'a',
        {
          onClick: handleOpenToggleClick,
          className: 'pointer dim ttu'
        },
        _react2.default.createElement(_IconLabel2.default, {
          iconType: 'add',
          labelText: 'Propose a new lesson',
          color: 'blue'
        })
      );
    }
  );
};