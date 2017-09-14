'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _lodash = require('lodash');

var _Maybe = require('../../../../../../components/Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Card = require('../../../../../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _InstructorOverview = require('./components/InstructorOverview');

var _InstructorOverview2 = _interopRequireDefault(_InstructorOverview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatedInstructorOverviews = function PaginatedInstructorOverviews(_ref) {
  var fallback = _ref.fallback,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      total = _ref.total,
      instructors = _ref.instructors,
      requestNextPage = _ref.requestNextPage;


  var pageCount = Math.ceil(total / pageSize);
  var hasMoreThanOnePage = pageCount > 1 && instructors.length > 0;

  var linkClassNames = {
    mobileHide: 'dn db-ns',
    link: 'db dim pointer bg-orange white mb2 mr2 pa2 ph3-ns br2'
  };

  return total > 0 ? _react2.default.createElement(
    'div',
    null,
    (0, _lodash.map)(instructors, function (instructor, index) {
      return _react2.default.createElement(
        'div',
        {
          key: instructor.id,
          className: index < instructors.length - 1 ? 'mb3' : ''
        },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(_InstructorOverview2.default, { instructor: instructor })
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

PaginatedInstructorOverviews.propTypes = {
  fallback: _react.PropTypes.node.isRequired,
  pageSize: _react.PropTypes.number.isRequired,
  currentPage: _react.PropTypes.number.isRequired,
  total: _react.PropTypes.string,
  instructors: _react.PropTypes.array.isRequired,
  requestNextPage: _react.PropTypes.func.isRequired
};

exports.default = PaginatedInstructorOverviews;