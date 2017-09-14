'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _lodash = require('lodash');

var _Maybe = require('../../../Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Card = require('../../../Card');

var _Card2 = _interopRequireDefault(_Card);

var _sortLessonsByState = require('./utils/sortLessonsByState');

var _sortLessonsByState2 = _interopRequireDefault(_sortLessonsByState);

var _LessonOverview = require('./components/LessonOverview');

var _LessonOverview2 = _interopRequireDefault(_LessonOverview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatedLessonOverviews = function PaginatedLessonOverviews(_ref) {
  var fallback = _ref.fallback,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      total = _ref.total,
      lessons = _ref.lessons,
      requestNextPage = _ref.requestNextPage,
      requestCurrentPage = _ref.requestCurrentPage;


  var pageCount = Math.ceil(total / pageSize);
  var hasMoreThanOnePage = pageCount > 1 && lessons.length > 0;

  var linkClassNames = {
    mobileHide: 'dn db-ns',
    link: 'db dim pointer bg-orange white mb2 mr2 pa2 ph3-ns br2'
  };

  return total > 0 ? _react2.default.createElement(
    'div',
    null,
    (0, _lodash.map)((0, _sortLessonsByState2.default)(lessons), function (lesson, index) {
      return _react2.default.createElement(
        'div',
        {
          key: lesson.id,
          className: index < lessons.length - 1 ? 'mb3' : ''
        },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(_LessonOverview2.default, {
            lesson: lesson,
            requestCurrentPage: requestCurrentPage
          })
        )
      );
    }),
    _react2.default.createElement(
      _Maybe2.default,
      { condition: hasMoreThanOnePage },
      _react2.default.createElement(
        'div',
        { className: 'pa3' },
        _react2.default.createElement(_reactPaginate2.default, {
          pageCount: pageCount,
          pageRangeDisplayed: 3,
          marginPagesDisplayed: 1,
          initialPage: currentPage - 1,
          previousLabel: 'Previous',
          nextLabel: 'Next',
          onPageChange: function onPageChange(page) {
            var selected = page.selected;

            if (currentPage !== selected + 1) {
              requestNextPage(selected + 1);
            }
          },
          containerClassName: 'mb0 pa0 list mt4 flex flex-wrap items-center',
          previousClassName: linkClassNames.mobileHide,
          nextClassName: linkClassNames.mobileHide,
          disabledClassName: 'o-20',
          previousLinkClassName: linkClassNames.link,
          nextLinkClassName: linkClassNames.link,
          pageLinkClassName: linkClassNames.link,
          activeClassName: 'o-50',
          breakClassName: 'mr2'
        })
      )
    )
  ) : fallback;
};

PaginatedLessonOverviews.propTypes = {
  fallback: _react.PropTypes.node.isRequired,
  pageSize: _react.PropTypes.number.isRequired,
  currentPage: _react.PropTypes.number.isRequired,
  total: _react.PropTypes.string,
  lessons: _react.PropTypes.array.isRequired,
  requestNextPage: _react.PropTypes.func.isRequired
};

exports.default = PaginatedLessonOverviews;